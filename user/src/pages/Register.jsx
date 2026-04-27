import { Link } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useState } from "react"
import { auth, db } from "../firebaseconfig"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useNavigate } from 'react-router'
function Register() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")

    let navigate = useNavigate()
    async function register() {
        try {
            if (name == "" || email == "" || pwd == "") {
                toast.error('All fields are required!', {
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

            let userCredentials = await createUserWithEmailAndPassword(auth, email, pwd)

            await updateProfile(userCredentials.user, {
                displayName: name
            })

            let colRef = collection(db,"users")
            await addDoc(colRef,{
                name:name,
                email:email,
                pwd:pwd,
                date:serverTimestamp()
            })

            navigate("/login")

            

           

        

        } catch (err) {
            console.log(err)
            toast.error('User Registration Failed!', {
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

            <Header />
            <section className="section login-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <section className="section-login">
                                <div id="signup-modal">
                                    <div className="form-title">
                                        <h4>Sign Up</h4>
                                        <div className="signup">
                                            Already a member? <Link to="/login">Login</Link>
                                        </div>
                                    </div>

                                    <form id="signupform"  >
                                        <div className="name-wrap">
                                            <label htmlFor="user-name">Name</label>
                                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" size={30} className="input" id="user-name" name="name" />
                                        </div>
                                        <div className="email-wrap">
                                            <label htmlFor="user-email">Your email address</label>
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text" size={30} className="input" id="user-email2" name="log" />
                                        </div>
                                        <div className="pass-wrap">
                                            <label htmlFor="user-pass">Password</label>
                                            <input value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Password" type="password" size={30} className="input" id="user-pass2" name="password" />
                                        </div>

                                        <div className="submit-login">
                                            <input onClick={register} style={{ backgroundColor: 'red' }} type="button" value="Sign Up"    />
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>{/* /.col-md-12 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>

            <Footer />
        </>
    )
}

export default Register