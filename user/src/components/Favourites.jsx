import { Link } from "react-router"


function Favourites({ favourite }) {

    let cleanDesc = favourite.desc.replace(/&nbsp;/g, " ")
    let document = new DOMParser().parseFromString(cleanDesc, "text/html")

    return (

        <div className="col-md-12" >
            <div className="post-wrap" style={{ height: 250, overflow: "hidden" }}>
                <article className="post">
                    <Link to={`/posts/${favourite.id}`}>
                        <div className="thumb">
                            <a href="#"><img src={favourite.url} style={{ height: 250 }} alt="img" /></a>
                        </div>
                    </Link>
                    <div className="content">
                        <div className="cat">
                            <a href="#">{favourite.category}</a>
                        </div>
                        <h3><a href="#">{favourite.title.slice(0, 150)}...</a></h3>
                        <p className="excerpt-entry">
                             {document.body.textContent.slice(0, 400)}...
                            {/* <div style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: document.body.textContent.slice(0, 800) + "..." }}></div> */}
                        </p>
                    </div>
                </article>{/*  /.post */}
            </div>{/* /.social-media-posts */}
        </div>
    
    )
}

export default Favourites
