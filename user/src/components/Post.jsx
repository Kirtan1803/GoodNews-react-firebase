import { updateDoc, doc, collection, addDoc, query, onSnapshot, where, deleteDoc } from "firebase/firestore"
import { Link } from "react-router"
import { db } from "../firebaseconfig"
import { useUserStore } from "../store/user"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"

function Post({ post }) {

    let cleanDesc = post.desc.replace(/&nbsp;/g, " ")
    let document = new DOMParser().parseFromString(cleanDesc, "text/html")

    let user = useUserStore((store) => store.user)
    let isuser = useUserStore((store) => store.isuser)

    let [favourites, setFavourites] = useState([])

    let isFav = favourites.some(fav => fav.postId === post.id)

    useEffect(function() {
        getFavourites();
    }, [])

    function getFavourites() {
        let q = query(collection(db, "favourites"), where("uid", "==", user.uid))

        onSnapshot(q, function(snapshot) {
            let result = []
            snapshot.docs.forEach(function (doc) {
                result.push({
                    favId: doc.id,
                    postId: doc.data().id
                })
            })

            setFavourites(result)

        })
    }

    async function addfavourite() {
        if (isuser) {
            let colRef = collection(db, "favourites")
            await addDoc(colRef, {...post, uid: user.uid })

            toast.success('Added To Favourites Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            })

            return
        }

        toast.success('please login to add to favourites', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        })



    }

    async function removefavourite() {
        if (isuser) {

            let favDoc = favourites.find(fav => fav.postId === post.id)

            if (!favDoc) return

            let docRef = doc(db, "favourites", favDoc.favId)

            await deleteDoc(docRef)

            toast.success('Removed From Favourites Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            })

            return
        }

        toast.success('Please Login to add to Favourites', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        })



    }
    return (

        <div className="col-md-12" >
            <div className="post-wrap" style={{ height: 250, overflow: "hidden" }}>
                <article className="post">
                    <Link to={`/posts/${post.id}`}>
                        <div className="thumb">
                            <a href="#"><img src={post.url} style={{ height: 250 }} alt="img" /></a>
                        </div>
                    </Link>
                    <div className="content">
                        <div className="cat">
                            <a href="#">{post.category}</a>
                        </div>
                        <h3><a href="#">{post.title.slice(0, 40)}...</a></h3>
                        <p className="excerpt-entry">
                             {document.body.textContent.slice(0, 100)}...
                            {/* <div style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: document.body.textContent.slice(0, 800) + "..." }}></div> */}
                        </p>

                        {isFav ?<div class="activity" onClick={removefavourite}>
                            <i class="fa-solid fa-heart" style={{ color: 'black' }}></i><span style={{ padding: 0 }} href="#">Remove favourite</span>
                        </div> : <div class="activity" onClick={addfavourite}>
                            <i class="fa-regular fa-heart" style={{ color: 'black' }}></i><span style={{ padding: 0 }} href="#">Add favourite</span>
                        </div> }

                    </div>
                </article>{/*  /.post */}
            </div>{/* /.social-media-posts */}
        </div>
    
    )
}

export default Post
