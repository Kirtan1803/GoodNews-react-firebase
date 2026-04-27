import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'

function Dashboard() {

    let [categories, setCategories] = useState(0)
    let [posts, setPosts] = useState(0)
    let [authors, setAuthors] = useState(0)
    let [userscount, setUserscount] = useState(0)
    let [users, setUsers] = useState(0)


    useEffect(function () {
        getCategories()
        getUsers()
        getAuthors()
        getPosts()
    }, [])

    async function getCategories() {
        let colRef = collection(db, "categories")
        let snapshot = await getDocs(colRef)
        setCategories(snapshot.docs.length)
    }

    async function getAuthors() {
        let colRef = collection(db, "authors")
        let snapshot = await getDocs(colRef)
        setAuthors(snapshot.docs.length)
    }

    async function getPosts() {
        let colRef = collection(db, "posts")
        let snapshot = await getDocs(colRef)
        setPosts(snapshot.docs.length)
    }

    async function getUsers() {
        const q = query(collection(db,"users"), orderBy("date", "desc"));
        let snapshot = await getDocs(q)
        setUserscount(snapshot.docs.length)

        let result = []
        snapshot.docs.forEach(function (doc) {
            result.push({ ...doc.data(), id: doc.id })
        })

        setUsers(result)
    }


    return (
        <>

            <Topbar />
            <Sidebar />
            <div className="page-wrapper">
                {/* Page Content*/}
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="card" style={{ height: 100 }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h6 className="fs-13 lh-base mb-3">Total Categories</h6>
                                                <h1 className="fw-bold mb-0">{categories}</h1>
                                            </div>{/*end col*/}
                                            <div className="col-auto align-self-center">
                                                <i class="fa-solid fa-cubes" style={{ fontSize: 60 }}></i>
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end card-body*/}
                                </div> {/*end card-body*/}
                            </div>{/*end col*/}
                            <div className="col-md-6 col-lg-3">
                                <div className="card" style={{ height: 100 }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h6 className="fs-13 lh-base mb-3">Total Posts</h6>
                                                <h1 className="fw-bold mb-0">{posts}</h1>
                                            </div>{/*end col*/}
                                            <div className="col-auto align-self-center">
                                                <i class="fa-solid fa-table-list" style={{ fontSize: 60 }}></i>

                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end card-body*/}
                                </div> {/*end card-body*/}
                            </div>{/*end col*/}
                            <div className="col-md-6 col-lg-3">
                                <div className="card" style={{ height: 100 }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h6 className="fs-13 lh-base mb-3">Total Authors</h6>
                                                <h1 className="fw-bold mb-0">{authors}</h1>
                                            </div>{/*end col*/}
                                            <div className="col-auto align-self-center">
                                                <i class="fa-solid fa-people-group" style={{ fontSize: 60 }}></i>
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end card-body*/}
                                </div> {/*end card-body*/}
                            </div>{/*end col*/}
                            <div className="col-md-6 col-lg-3">
                                <div className="card" style={{ height: 100 }}>
                                    <div className="card-body" >
                                        <div className="row">
                                            <div className="col">
                                                <h6 className="fs-13 lh-base mb-3">Total Users</h6>
                                                <h1 className="fw-bold mb-0">{userscount}</h1>
                                            </div>{/*end col*/}
                                            <div className="col-auto align-self-center">
                                                <i class="fa-solid fa-user-check" style={{ fontSize: 60 }}></i>
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end card-body*/}
                                </div> {/*end card-body*/}
                            </div>{/*end col*/}


                        </div>{/*end row*/}
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <h4 className="card-title">Recent Users</h4>
                                            </div>{/*end col*/}
                                            <div className="col-md-6 text-end">
                                                {/* <input type="text" id="searchInput" className="form-control form-control-sm w-50 d-inline-block" placeholder="Search category..." /> */}
                                                {/* <button type="button" className="btn btn-sm btn-outline-light d-inline-block">Add New Post</button> */}
                                            </div>{/*end col*/}
                                        </div>  {/*end row*/}
                                    </div>{/*end card-header*/}
                                    <div className="card-body pt-0">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead className>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Pwd</th>
                                                        <th>Joining Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users && users.map((user,index) => <tr>
                                                            <td>{++index}</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">

                                                                    <div className="flex-grow-1 text-truncate">
                                                                        <a href="#" className="fs-14 fw-medium text-body">{user.name}</a>

                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><div className="d-flex align-items-center">{user.email}</div></td>
                                                            <td><div className="d-flex align-items-center">************</div></td>
                                                            <td><div className="d-flex align-items-center">{user.date.toDate().toDateString()}</div></td>



                                                        </tr>
                                                    )}
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

export default Dashboard