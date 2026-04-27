function Topbar(){
    return (
        <>
             <div className="topbar d-print-none">
    <div className="container-fluid">
      <nav className="topbar-custom d-flex justify-content-between" id="topbar-custom">    
        <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">                        
          <li>
            <button className="nav-link mobile-menu-btn nav-icon" id="togglemenu">
              <i className="iconoir-sidebar-collapse collapse-icon" />
              <i className="iconoir-sidebar-expand expand-icon" />
            </button>
          </li>
                            
        </ul>
        <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
         
        
       
          <li className="dropdown topbar-item">                   
            <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" data-bs-offset="0,19">
              <div className="d-flex align-items-center dropdown-item">
                <div className="flex-shrink-0">
                  <i class="fa-solid fa-user-tie" style={{fontSize:25}}></i>
                  {/* <img src="assets/images/users/avatar-9.jpg" alt className="thumb-sm rounded-circle" /> */}
                </div>
                <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                  <h6 className="my-0 fw-medium text-dark fs-12">Kirtan Tanti</h6>
                  <small className="text-muted mb-0">Admin</small>
                </div>{/*end media-body*/}
              </div>
            </a>
          
          </li>
        </ul>{/*end topbar-nav*/}
      </nav>
      {/* end navbar*/}
    </div>
  </div>
        </>
    )
}

export default Topbar