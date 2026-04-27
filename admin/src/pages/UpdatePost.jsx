import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { db, storage } from "../firebaseconfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, getDoc, onSnapshot, serverTimestamp, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAuthorStore } from "../store/author";
import { useParams } from "react-router";


function UpdatePost() {


    let [title, setTitle] = useState("")
    let [desc, setDesc] = useState("")
    let [url, setUrl] = useState("")

    let fileRef = useRef()

    let [image, setImage] = useState()


    let { id } = useParams()


    useEffect(function () {
        getPost()
    }, [])

    async function getPost() {
        let docRef = doc(db, "posts", id)
        let docSnap = await getDoc(docRef)

        let post = docSnap.data()

        let { title, desc, url } = post
        setTitle(title)
        setDesc(desc)
        setUrl(url)
    }

    async function updatePost() {
        let docRef = doc(db, "posts", id)


        if (image) {

            let imageRef = ref(storage, `images/${image.name}`)

            await uploadBytes(imageRef, image)

            let downloadUrl = await getDownloadURL(imageRef)
            setUrl(downloadUrl)
            updateDoc(docRef, {
                title: title,
                url: downloadUrl,
                desc: desc
            })

            toast.success('Post Updated Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            return

        }

        updateDoc(docRef, {
            title: title,
            url: url,
            desc: desc
        })

        toast.success('Post Updated Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    function clear() {
        setTitle("")
        setDesc("")
    }


    return (
        <>
            <Topbar />
            <Sidebar />

            <div className="page-wrapper">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="row g-0 h-100">
                                            <div className="col-lg-7 border-end">
                                                <h4 className="card-title fs-16 mb-0 pt-3 ps-4">Create New Post</h4>
                                                <form className="p-4 pt-3">
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12 mb-2 mb-lg-1">
                                                                <label htmlFor="projectName" className="form-label">Post Title:</label>
                                                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="projectName" aria-describedby="emailHelp" placeholder="Enter post title" />
                                                            </div>{/*end col*/}

                                                        </div>{/*end row*/}
                                                    </div>{/*end form-group*/}



                                                    <div className="form-group mb-3">
                                                        <label className="form-label mt-2" htmlFor="pro-message">Post Description</label>


                                                        <ReactQuill theme="snow" value={desc} onChange={setDesc} />
                                                    </div>{/*end form-group*/}
                                                    <button onClick={updatePost} type="button" className="btn btn-sm btn-primary me-3">Update Post</button>
                                                    <button onClick={clear} type="button" className="btn btn-sm btn-danger">Clear</button>
                                                </form>  {/*end form*/}
                                            </div>{/*end col*/}
                                            <div className="col-lg-5">
                                                <form className="p-4">
                                                    <div className="form-group">

                                                        <div className="d-flex mb-3">
                                                            <img src={url ? url : "https://placehold.co/600x400"} className="rounded me-3 w-100" />
                                                        </div>

                                                        <input type="file" ref={fileRef} onChange={(e) => setImage(e.target.files[0])} hidden />
                                                        <div onClick={() => fileRef.current.click()} className="flex-grow-1 text-truncate">
                                                            <label className="btn btn-sm btn-primary text-light w-100">
                                                                Upload Post Image
                                                            </label>
                                                        </div>
                                                    </div>{/*end form-group*/}
                                                </form>
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>
                                </div>
                            </div> {/* end col */}
                        </div> {/* end row */}
                    </div>{/* container */}
                    {/*Start Footer*/}
                    <Footer />

                </div>

            </div>




        </>
    )
}

export default UpdatePost