import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { toast } from 'react-toastify'
import { Link } from 'react-router'
import { useAuthorStore } from '../store/author'

function ViewPosts() {
    let isauthor = useAuthorStore((store) => store.isauthor)
    let author = useAuthorStore((store) => store.author)

    let [posts, setPosts] = useState()

    useEffect(function () {
        getPosts()

    }, [])


    async function getPosts() {
        let q

        if(isauthor){
            q = query(collection(db, "posts"), where("email", "==", author.email))
        }else{
            q = query(collection(db,"posts"))
        }
        
        let snapshot = await getDocs(q)

        let result = []

        snapshot.docs.forEach(function (doc) {
            result.push({ ...doc.data(), id: doc.id })
        })

        setPosts(result)
    }

    async function deletePost(id) {
        let docRef = doc(db, "posts", id)
        await deleteDoc(docRef)

        toast.success('Post Deleted!', {
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



    return (
        <>

            <Topbar />
            <Sidebar />
            <div className="page-wrapper">
                {/* Page Content*/}
                <div className="page-content">
                    <div className="container-fluid">

                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <h4 className="card-title">All Posts</h4>
                                            </div>{/*end col*/}
                                            <div className="col-md-6 text-end">
                                                {/* <input type="text" id="searchInput" className="form-control form-control-sm w-50 d-inline-block" placeholder="Search category..." /> */}
                                                {/* <Link type="/addpost" className="btn btn-sm btn-outline-light d-inline-block">Add Post</Link> */}
                                            </div>{/*end col*/}
                                        </div>  {/*end row*/}
                                    </div>{/*end card-header*/}
                                    <div className="card-body pt-0">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead className>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Title</th>
                                                        <th>Description</th>
                                                        <th>Author</th>
                                                        <th>Category</th>

                                                        <th className="text-end">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {posts && posts.map(function (post, index) {
                                                        // let text = post.desc.replace("/<[^>]+>/g","")
                                                        let doc = new DOMParser().parseFromString(post.desc, "text/html")
                                                        return (<>
                                                            <tr>

                                                                <td>{++index}</td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={post.url} height={34} width={65} className="me-3 align-self-center rounded border" alt="..." />
                                                                        <div className="flex-grow-1 text-truncate">
                                                                            <a href="#" className="fs-14 fw-medium text-body">{post.title.slice(0, 30)}</a>
                                                                            <p className="fs-12 text-muted mb-0">{post.date.toDate().toDateString()}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td><div className="d-flex align-items-center">
                                                                    <div dangerouslySetInnerHTML={{ __html: doc.body.textContent.slice(0, 30) + "..." }}>

                                                                    </div>
                                                                </div></td>
                                                                <td><div className="d-flex align-items-center">{post.author}</div></td>

                                                                <td><span className="badge text-success border border-success px-2">{post.category}</span></td>
                                                                <td className="text-end">
                                                                    {isauthor && <Link to={`/updatepost/${post.id}`} data-bs-toggle="tooltip" data-bs-title="View"><i class="fa-solid fa-pen-to-square text-primary"></i> &nbsp;&nbsp;|&nbsp;&nbsp; </Link>}
                                                                    <a data-bs-toggle="tooltip" data-bs-title="Delete"><i onClick={() => deletePost(post.id)} class="fa-solid fa-trash text-danger"></i></a>
                                                                </td>
                                                            </tr>
                                                        </>)
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>{/*end /div*/}

                                    </div>{/*end card-body*/}
                                </div>{/*end card*/}
                            </div> {/*end col*/}
                        </div>{/*end row*/}

                    </div>{/* container */}
                    <Footer />
                </div>
                {/* end page content */}
            </div>

        </>
    )
}

export default ViewPosts