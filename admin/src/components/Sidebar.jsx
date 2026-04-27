import { NavLink, useNavigate } from "react-router"
import { useAdminStore } from "../store/admin"
import { useAuthorStore } from "../store/author"
import logo from './../assets/blacklogo.png'
function Sidebar() {

    let adminlogout = useAdminStore((store) => store.logout)
    let authorlogout = useAuthorStore((store) => store.logout)


    let isadmin = useAdminStore((store) => store.isadmin)
    let isauthor = useAuthorStore((store) => store.isauthor)



    return (
        <>
            <div className="startbar d-print-none">
                {/*start brand*/}
                <div className="brand d-flex">
                    <a href="" className="logo">
                        <span className>
                            <img src={logo} alt="logo-large" className="logo-lg logo-dark" />
                        </span>
                    </a>
                </div>
                {/*end brand*/}
                <div className="position-relative ">
                    <div className="mobile-menu-btn-2 align-self-center">
                        <button className=" d-flex align-items-center" id="togglemenu">
                            <i className="fa-solid fa-arrow-right-arrow-left collapse-icon" />
                        </button>
                    </div>
                </div>
                {/*start startbar-menu*/}
                <div className="startbar-menu">
                    <div className="startbar-collapse" id="startbarCollapse" data-simplebar>
                        <div className="d-flex align-items-start flex-column w-100">
                            {/* Navigation */}
                            <ul className="navbar-nav mb-auto w-100">

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/dashboard" >
                                        <i class="fa-solid fa-gauge" />
                                        <span className="ms-2">Dashboard</span>

                                    </NavLink>
                                </li>{/*end nav-item*/}

                                {isadmin && <li className="nav-item">
                                    <NavLink className="nav-link" to="/addcategory">
                                        <i class="fa-solid fa-cube"></i>
                                        <span className="ms-2">Add Category</span>

                                    </NavLink>
                                </li>
                                }
                                {isadmin && <li className="nav-item">
                                    <NavLink className="nav-link" to="/viewcategories">
                                        <i class="fa-solid fa-cubes"></i>
                                        <span className="ms-2">View Categories</span>

                                    </NavLink>
                                </li>
                                }
                                {isauthor && <li className="nav-item">
                                    <NavLink className="nav-link" to="/addpost">
                                        <i class="fa-solid fa-file-pen me-2"></i>
                                        <span>Add Post</span>
                                    </NavLink>
                                </li>}

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/viewposts">
                                        <i class="fa-solid fa-table-list"></i>
                                        <span className="ms-2">View Posts</span>
                                    </NavLink>
                                </li>

                                {isadmin && <li className="nav-item">
                                    <NavLink className="nav-link" to="/addauthor">
                                        <i class="fa-solid fa-person-circle-plus"></i>
                                        <span className="ms-2">Add Author</span>
                                    </NavLink>
                                </li>}



                                {isadmin && <li className="nav-item">
                                    <NavLink className="nav-link" to="/viewauthors">
                                        <i class="fa-solid fa-people-group"></i>
                                        <span className="ms-2">View Authors</span>
                                    </NavLink>
                                </li>
                                }


                                <li className="nav-item">
                                    <NavLink to="/" onClick={() => {
                                        adminlogout()
                                        authorlogout()
                                    }} className="nav-link">
                                        <i class="fa-solid fa-right-from-bracket"></i>
                                        <span className="ms-2">Logout</span>

                                    </NavLink>
                                </li>

















                            </ul>{/*end navbar-nav-*/}

                        </div>
                    </div>{/*end startbar-collapse*/}
                </div>{/*end startbar-menu*/}
            </div>{/*end startbar*/}
            <div className="startbar-overlay d-print-none" />
        </>
    )
}

export default Sidebar