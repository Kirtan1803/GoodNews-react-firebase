import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Post from "../components/Post"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../firebaseconfig"
import { useState } from "react"
import { NavLink } from "react-router"
import Subscribe from "../components/Subscribe"
import { arrayShuffle } from "array-shuffle"

function PostList() {
  let [posts, setPosts] = useState()

  let [popularPosts, setPopularPosts] = useState()

  let [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(function () {
    getPosts()
    getCategories()
  }, [selectedCategory])

  function getPosts() {
    let q = query(collection(db, "posts"))

    if (selectedCategory != "All") {
      q = query(collection(db, "posts"), where("category", "==", selectedCategory))

    }

    onSnapshot(q, function (snapshot) {
      let result = []
      snapshot.docs.forEach(function (doc) {
        result.push({ id: doc.id, ...doc.data() })
      })

      setPopularPosts(arrayShuffle(result).slice(0, 5))

      setPosts(result)


    })
  }

  let [categories, setCategories] = useState()



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


  return (
    <>
      <Header />
      <section id="main" className="category-page">
        <div className="container">
          <div className="row">

            <div className="col-md-8">
              {posts && posts.map((post) => <Post post={post} />)}
            </div>


            <div className="col-md-4">
              <div className="sidebar-widget-1">
                <div className="widget widget-categories">
                  <h5 className="widget-title">Categories</h5>
                  <ul className="cat-list">
                    <li><NavLink onClick={() => setSelectedCategory("All")}>All</NavLink></li>

                    {categories && categories.map((category) => <li><NavLink onClick={() => setSelectedCategory(category.name)}>{category.name}</NavLink></li>)}

                  </ul>
                </div>{/* /.widget-categories */}


                <div className="widget widget-tabs2">
                  <div className="tabs style2">

                    <ul className="menu-tab" style={{ width: '100%' }}>
                      <li className="active 0" style={{ width: '100%' }}><a href="#">5 Most Popular</a></li>
                    </ul>{/* /.menu-tab */}
                    <div className="content-tab">
                      <div className="content">
                        <ul className="most-popular">
                          {popularPosts && popularPosts.map((post,index) => (
                            <li>
                              <div className="order">{++index}</div>
                              <p><a href="#">{post.title}</a></p>
                            </li>
                          ))}


                        </ul>
                      </div>{/* /.content-list */}

                    </div>{/* /.content-tab */}
                  </div>{/* /.tabs */}
                </div>{/* /.widget-tabs2 */}

                <Subscribe />
              </div>{/* /.sidebar */}
            </div>{/* /.col-md-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section >
      <Footer />


    </>
  )
}

export default PostList