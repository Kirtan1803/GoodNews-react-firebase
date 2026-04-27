import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebaseconfig"
import { toast } from "react-toastify"
import { Link } from 'react-router'
function ViewCategories() {

  let [categories, setCategories] = useState()

  useEffect(function () {
    getCategories()
  }, [])

  function getCategories() {
    let colRef = collection(db, "categories")

    onSnapshot(colRef, function (snapshot) {

      let result = []

      snapshot.docs.forEach(function (doc) {
        result.push({ ...doc.data(), id: doc.id })
      })

      setCategories(result)
    })
  }


  async function deleteCategory(id) {
    let docRef = doc(db, "categories", id)
    await deleteDoc(docRef)

    toast.success('Category Deleted!', {
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
                        <h4 className="card-title">All Categories</h4>
                      </div>{/*end col*/}
                      <div className="col-md-6 text-end">
                        {/* <input type="text" id="searchInput" className="form-control form-control-sm w-50 d-inline-block" placeholder="Search category..." /> */}
                        <Link to="/addcategory" className="btn btn-sm btn-outline-light d-inline-block">Add Category</Link>
                      </div>{/*end col*/}
                    </div>  {/*end row*/}
                  </div>{/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead className>
                          <tr>
                            <th>#</th>
                            <th>Category Name</th>
                            <th>Category Description</th>

                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody id="courseTable">
                          {categories && categories.map(function (category, index) {
                            return (
                              <>
                                <tr>
                                  <td>{++index}</td>
                                  <td>{category.name}</td>
                                  <td>{category.desc}</td>


                                  <td className="text-end">
                                    <Link to={`/updatecategory/${category.id}`} data-bs-toggle="tooltip" data-bs-title="View"><i class="fa-solid fa-pen-to-square text-primary"></i></Link>&nbsp;&nbsp; | &nbsp;&nbsp;
                                    <a  data-bs-toggle="tooltip" data-bs-title="Delete"><i onClick={()=>deleteCategory(category.id)} class="fa-solid fa-trash text-danger"></i></a>
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

export default ViewCategories