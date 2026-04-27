import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebaseconfig"
import { toast } from "react-toastify"
import { Link } from 'react-router'
function ViewAuthors() {

  let [authors, setAuthors] = useState()

  useEffect(function () {
    getAuthors()
  }, [])

  function getAuthors() {
    let colRef = collection(db, "authors")

    onSnapshot(colRef, function (snapshot) {

      let result = []

      snapshot.docs.forEach(function (doc) {
        result.push({ ...doc.data(), id: doc.id })
      })

      setAuthors(result)
    })
  }


  async function deleteAuthor(id) {
    let docRef = doc(db, "authors", id)
    await deleteDoc(docRef)

    toast.success('Author Deleted!', {
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
      {/* Top Bar End */}
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
                        <h4 className="card-title">All Authors</h4>
                      </div>{/*end col*/}
                      <div className="col-md-6 text-end">
                       
                        <Link to="/addauthor" className="btn btn-sm btn-outline-light d-inline-block">Add Author</Link>
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
                            <th>Category</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile No</th>

                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody id="courseTable">
                          {authors && authors.map(function (author, index) {
                            return (
                              <>
                                <tr>
                                  <td>{++index}</td>
                                  <td>{author.name}</td>
                                  <td>{author.category}</td>
                                  <td>{author.email}</td>
                                  <td>*********</td>
                                  <td>{author.mobile}</td>


                                  <td className="text-end">
                                    <Link style={{marginRight:4}} to={`/updateauthor/${author.id}`} data-bs-toggle="tooltip" data-bs-title="View"><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <a style={{color:'red'}} onClick={() => deleteAuthor(author.id)} data-bs-toggle="tooltip" data-bs-title="Delete"><i class="fa-solid fa-trash"></i></a>
                                  </td>
                                </tr>
                              </>
                            )
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

export default ViewAuthors