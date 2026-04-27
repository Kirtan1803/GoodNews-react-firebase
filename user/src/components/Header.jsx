import { NavLink } from "react-router"
import { useUserStore } from "../store/user"

function Header() {
    let isuser = useUserStore((store)=>store.isuser)
    let logout = useUserStore((store)=>store.logout)
    let user = useUserStore((store)=>store.user)
    return (
        <>
            <header id="header" className="header">
                <div className="top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="logo" className="logo">
                                    <a href="index.html" rel="home" title="home">
                                        <img src="/goodnews/images/logo.svg" alt="Good News" />
                                    </a>
                                </div>
                                <div className="follow-us">
                                    <div className="follow-title">
                                        Follow Us
                                    </div>
                                    <ul className="social-links">
                                        <li className="facebook"><a href="#">Follow us on Facebook</a></li>
                                        <li className="twitter"><a href="#">Follow us on Twitter</a></li>
                                        <li className="google"><a href="#">Follow us on Google</a></li>
                                        <li className="linkedin"><a href="#">Follow us on Linkedin</a></li>
                                        <li className="pinterest"><a href="#">Follow us on Pinterest</a></li>
                                    </ul>
                                </div>
                            </div>{/* /.col-md-6 */}
                            <div className="col-md-6">
                                <div className="btn-menu" />{/* //mobile menu button */}
                                {isuser && <div className="member-area">
                                    <div className="member">
                                        <div className="welcome">
                                            Welcome <span className="name">{user.displayName}</span>
                                            <div className="member-options">
                                                <div className="avatar">
                                                    <div className="thumb">
                                                        <img src="/goodnews/images/user.jpg" alt="image" />
                                                    </div>
                                                    <span className="fullname">{user.displayName}</span>
                                                </div>
                                                <ul className="options">
                                                    <li><a href="favourites">My Favourites</a></li>
                                                </ul>
                                                <div onClick={logout} className="logout"><a>Logout</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
}
                            </div>{/* /.col-md-6 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </div>{/* /.top-wrap */}
                <div className="header-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <nav id="mainnav" className="mainnav">
                                    <ul className="menu">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>

                                        {isuser ? <li><NavLink to="/posts">News</NavLink></li> : <li className="has-children"><a href="#">Account</a>
                                            <ul className="sub-menu">
                                                <li><NavLink to="/login">Login</NavLink></li>
                                                <li><NavLink to="/register">Register</NavLink></li>
                                            </ul>{/* /.submenu */}
                                        </li>}

                                        <li><NavLink to="/contact">Contact</NavLink></li>

                                    </ul>{/* /.menu */}
                                </nav>{/* /nav */}
                            </div>{/* /.col-md-9 */}
                            <div className="col-md-3">
                                <div className="search-wrap">
                                    <div className="search-icon" />{/* //mobile search button */}
                                    <form action="#" id="searchform" className="search-form" method="get" role="search">
                                        <input type="text" id="s" placeholder="Search" className="search-field" />
                                        {/* <input type="submit" defaultValue="" id="searchsubmit" className="search-submit" /> */}

                                    </form>
                                </div>{/* /.search-wrap */}
                            </div>{/* /.col-md-3 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </div>{/* /.header-wrap */}
            </header>{/* /header */}
        </>
    )
}

export default Header