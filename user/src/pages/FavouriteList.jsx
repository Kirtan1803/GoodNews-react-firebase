import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Favourite from "../components/Favourites"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../firebaseconfig"
import { useState } from "react"
import { useUserStore } from "../store/user"

function FavouriteList() {
  let [favourites, setFavourites] = useState()

  let user = useUserStore((store)=>store.user)

  useEffect(function () {
    getFavourites()
  }, [])

  function getFavourites() {
      let q = query(collection(db, "favourites"), where("uid", "==", user.uid))

    onSnapshot(q, function (snapshot) {
      let result = []
      snapshot.docs.forEach(function (doc) {
        result.push({ ...doc.data(), id: doc.id})
      })

      setFavourites(result)

    })
  }

  return (
    <>
      <Header />
      <section id="main" className="category-page">
        <div className="container">
          <div className="row">



                    <div className="col-md-12">
                      {favourites && favourites.map((favourite) => <Favourite favourite={favourite} />)}
                    </div>

          </div>{/* /.row */}
        </div>{/* /.container */}
      </section >
      <Footer />
    </>
  )
}

export default FavouriteList