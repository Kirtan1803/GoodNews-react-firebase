import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useParams } from "react-router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { toast } from "react-toastify";


function UpdateCategory() {
    let [name, setName] = useState("")
    let [desc, setDesc] = useState("")

    let { id } = useParams()
    console.log(id)

    useEffect(function () {
        getCategory()
    }, [])

    async function getCategory() {
        let docRef = doc(db, "categories", id)
        let docSnap = await getDoc(docRef)

        let category = docSnap.data()
        console.log(category)
        let {name,desc} = category
        setName(name)
        setDesc(desc)
    }

    async function updateCategory(){
         let docRef = doc(db, "categories", id)
         await updateDoc(docRef,{
            name:name,
            desc:desc
         })

         toast.success('Category Updated!', {
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
        setName('')
        setDesc('')
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
                                                <h4 className="card-title fs-16 mb-0 pt-3 ps-4">Update Category</h4>
                                                <form className="p-4 pt-3">
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12 mb-2 mb-lg-1">
                                                                <label htmlFor="projectName" className="form-label">Name:</label>
                                                                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="form-control" id="projectName" aria-describedby="emailHelp" placeholder="Enter category name" />
                                                            </div>{/*end col*/}

                                                        </div>{/*end row*/}
                                                    </div>{/*end form-group*/}





                                                    <div className="form-group mb-3">
                                                        <label className="form-label mt-2" htmlFor="pro-message">Post Description</label>
                                                        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} class="form-control" rows="5" id="pro-message" placeholder="Enter description here.."></textarea>

                                                    </div>{/*end form-group*/}
                                                    <button onClick={updateCategory} type="button" className="btn btn-sm btn-primary me-3">Update Category</button>
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

export default UpdateCategory