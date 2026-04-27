import { useParams } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebaseconfig"
import { useState } from "react"

function PostDetails() {
    let { id } = useParams()

    let [post, setPost] = useState()

    useEffect(function () {
        getPost()
    }, [])
    async function getPost() {
        let docRef = doc(db, "posts", id)
        let docSnap = await getDoc(docRef)
         
        setPost(docSnap.data())


    }
    return (
        <>
            <Header />

           {post &&   <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="post-wrap posts post-single">
                                <article className="post">
                                    <div className="head-post">
                                        <h2>{post.title}</h2>
                                        
                                        <div className="meta">
                                            <span className="author">By <a href="#">{post.author}</a></span>
                                            <span className="time"> Published on May 07, 2004.</span>
                                        </div>
                                    </div>{/* /.head-post */}
                                    <div className="body-post">

                                        <div className="main-post">
                                            <div className="entry-post">
                                                
                                                <img src={post.url} />
                                                <div
                                                    // Apply the Quill editor class for styling
                                                    dangerouslySetInnerHTML={{ __html: post.desc.replace(/&nbsp;/g, " ") }}
                                                />
                                            </div>{/* /.entry-post */}
                                           
                                            <div className="author-post">
                                                <div className="avatar-author">
                                                    <img src="/goodnews/images/author.jpg" alt="image" />
                                                </div>
                                                <div className="info-author">
                                                    <h4>Angela Snow</h4>
                                                    <p>John is an American Graphic &amp; Web Designer, Pixel &amp; CSS lover, WordPress &amp; coffee addict. He loves UI and UX design for mobile and web apps.</p>
                                                </div>
                                            </div>{/* /.author-post */}

                                         

                                        </div>{/* /.main-post */}
                                    </div>{/* /.body-post */}
                                </article>{/* /.post */}
                            </div>{/* /.post-wrap */}
                        </div>{/* /.col-md-12 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>}
            <Footer />

        </>
    )
}

export default PostDetails