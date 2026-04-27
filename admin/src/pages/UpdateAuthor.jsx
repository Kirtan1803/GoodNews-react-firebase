import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { collection, addDoc,doc,getDoc,updateDoc } from 'firebase/firestore'
import { db } from "../firebaseconfig";
import { toast } from "react-toastify";
import { useParams } from "react-router";

function UpdateAuthor() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [mobile, setMobile] = useState("")
    let [category, setCategory] = useState("")

    async function updateAuthor() {
        let docRef = doc(db,"authors",id)
        await updateDoc(docRef, {
            name: name,
            email:email,
            pwd:pwd,
            mobile:mobile,
            category:category,
        })

        toast.success('Author Updated!', {
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

    function clear(){
        setName("")
        setEmail("")
        setMobile("")
        setPwd("")
    }

    let {id} = useParams()

    useEffect(function(){
        getAuthor()
    },[])

    async function getAuthor(){
        let docRef = doc(db,"authors",id)
        let docSnap = await getDoc(docRef)

        let author = docSnap.data()
        let {name,email,mobile,pwd,category} = author

        setName(name)
        setEmail(email)
        setPwd(pwd)
        setCategory(category)
        setMobile(mobile)
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
                                            <div className="col-lg-12 border-end">
                                                <h4 className="card-title fs-16 mb-0 pt-3 ps-4">Create New Author</h4>
                                                <form className="p-4 pt-3">
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12 mb-2 mb-lg-1">
                                                                <label htmlFor="projectName" className="form-label">Name:</label>
                                                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="projectName" aria-describedby="emailHelp" placeholder="Enter author name" />
                                                            </div>{/*end col*/}

                                                        </div>{/*end row*/}
                                                    </div>{/*end form-group*/}

                                                     <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12 mb-2 mb-lg-1">
                                                                <label className="form-label mt-2">Category</label>
                                                                <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select">
                                                            
                                                                    <option>Tech</option>
                                                                    <option>Business</option>
                                                                    <option>Food</option>
                                                                </select>
                                                            </div>{/*end col*/}


                                                        </div>{/*end row*/}
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12 mb-2 mb-lg-1">
                                                                <label htmlFor="projectName" className="form-label">Email:</label>
                                                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="form-control" id="projectName" aria-describedby="emailHelp" placeholder="Enter author email" />
                                                            </div>{/*end col*/}

                                                        </div>{/*end row*/}
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12 mb-2 mb-lg-1">
                                                                <label htmlFor="projectName" className="form-label">Password:</label>
                                                                <input onChange={(e) => setPwd(e.target.value)} value={pwd} type="text" className="form-control" id="projectName" aria-describedby="emailHelp" placeholder="Enter author password" />
                                                            </div>{/*end col*/}

                                                        </div>{/*end row*/}
                                                    </div>


                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12 mb-2 mb-lg-1">
                                                                <label htmlFor="projectName" className="form-label">Mobile No:</label>
                                                                <input onChange={(e) => setMobile(e.target.value)} value={mobile} type="text" className="form-control" id="projectName" aria-describedby="emailHelp" placeholder="Enter author mobile" />
                                                            </div>{/*end col*/}

                                                        </div>{/*end row*/}
                                                    </div>





                                                   
                                                    <button onClick={updateAuthor} type="button" className="btn btn-sm btn-primary me-3">Update author</button>
                                                    <button onClick={clear} type="button" className="btn btn-sm btn-danger">Clear</button>
                                                </form>  {/*end form*/}
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

export default UpdateAuthor