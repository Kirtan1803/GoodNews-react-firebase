import { signInWithEmailAndPassword } from "firebase/auth"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { auth } from "../firebaseconfig"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useUserStore } from "../store/user"

function Login() {
  let [email, setEmail] = useState("")
  let [pwd, setPwd] = useState("")

  let navigate = useNavigate()

  let userlogin = useUserStore((store)=>store.login)

  async function login() {
    try {
      let userCredentials = await signInWithEmailAndPassword(auth, email, pwd)
      userlogin(auth.currentUser)
      navigate("/posts")
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <>

      <Header />

      {/* Elements */}
      <section className="section login-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-login">
                <div id="login-modal" className="login">
                  <div className="form-title">
                    <h4>Login</h4>
                    <div className="signup">
                      No account yet? <Link to="/register">Sign Up</Link>
                    </div>
                  </div>
                  <div className="login-by">
                    <div className="log-face-w" style={{ backgroundColor: 'red', color: 'white' }}>
                      <i class="fa-brands fa-google"></i> Login with Google
                    </div>
                    {/* <div className="log-twit-w">
                  <a className="log-twitter" href="#">Login with Twitter</a>
                </div> */}
                  </div>
                  <form id="loginform" name="loginform" method="post">
                    <div className="email-wrap">
                      <label htmlFor="user-email">Your email address</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" size={30} className="input" id="user-email" name="log" placeholder="Email" />
                    </div>
                    <div className="pass-wrap">
                      <label htmlFor="user-pass">Password</label>
                      <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" size={30} className="input" id="user-pass" name="password" placeholder="Password" />
                    </div>

                    <div className="submit-login">
                      <input onClick={login} type="button" defaultValue="Log In" className="submit" style={{ backgroundColor: 'red' }} />
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

export default Login