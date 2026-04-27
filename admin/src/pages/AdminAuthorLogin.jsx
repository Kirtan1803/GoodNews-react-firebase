import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebaseconfig"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router"
import { useAdminStore } from "../store/admin"
import { useAuthorStore } from "../store/author"
import logo from './../assets/logo.svg'

function AdminAuthorLogin() {
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")

    let [role, setRole] = useState("Admin")

    let adminlogin = useAdminStore((store)=>store.login)
    let authorlogin = useAuthorStore((store)=>store.login)


    let navigate = useNavigate()

    async function mylogin() {
        if(role == "Admin"){
            adminLogin()
        }else{
            authorLogin()
        }
    }

    async function adminLogin() {
    
        let q = query(collection(db, "admins"), where("email", "==", email), where("pwd", "==", pwd))
        let snapshot = await getDocs(q)
   
        if (snapshot.docs.length > 0) {
            
            adminlogin(snapshot.docs[0].data())
            navigate("/dashboard")

            toast.success('Admin Login Successfull!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('Admin Login Failed!', {
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
    }

    async function authorLogin() {
         let q = query(collection(db, "authors"), where("email", "==", email), where("pwd", "==", pwd))
        let snapshot = await getDocs(q)

        if (snapshot.docs.length > 0) {
            console.log(snapshot.docs[0].data())
            authorlogin(snapshot.docs[0].data())
            navigate("/dashboard")
            toast.success('Author Login Successfull!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('Author Login Failed!', {
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
    }
    return (
        <>
            <div className="container-xxl">
                <div className="row vh-100 d-flex justify-content-center">
                    <div className="col-12 align-self-center">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 mx-auto">
                                    <div className="card">
                                        <div className="card-body p-0 bg-black auth-header-box rounded-top">
                                            <div className="text-center p-3">   
                                                <a href="index.html" className="logo logo-admin">
                                                    <img src={logo} height={40} alt="logo" className="auth-logo m-3" />
                                                </a>
                                                <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Let's Get Started</h4>
                                                <p className="text-muted fw-medium mb-0">Sign in to continue to good news.</p>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <form className="my-4">
                                                <div className="form-group mb-2">
                                                    <label className="form-label" htmlFor="username">Email</label>
                                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="username" name="username" placeholder="Enter email" />
                                                </div>{/*end form-group*/}
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="userpassword">Password</label>
                                                    <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" className="form-control" name="password" id="userpassword" placeholder="Enter password" />
                                                </div>{/*end form-group*/}

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-lg-12 mb-2 mb-lg-1">
                                                            <label className="form-label mt-2">User Type</label>
                                                            <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select">
                                                                <option>Admin</option>
                                                                <option>Author</option>

                                                            </select>
                                                        </div>{/*end col*/}


                                                    </div>{/*end row*/}
                                                </div>

                                                <div className="form-group mb-0 row">
                                                    <div className="col-12">
                                                        <div className="d-grid mt-3">
                                                            <button onClick={mylogin} className="btn btn-primary" type="button">Log In <i className="fas fa-sign-in-alt ms-1" /></button>
                                                        </div>
                                                    </div>{/*end col*/}
                                                </div> {/*end form-group*/}
                                            </form>{/*end form*/}
                                            <div className="text-center  mb-2">
                                                <p className="text-muted">Are you an user?  <Link to="http://localhost:3308/login" className="text-primary ms-2">User Login</Link></p>
                                            </div>

                                        </div>{/*end card-body*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAuthorLogin