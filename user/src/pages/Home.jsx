import Header from './../components/Header'
import Footer from './../components/Footer'
import Subscribe from '../components/Subscribe'
import { useEffect } from 'react'
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { useState } from 'react'
import {  arrayShuffle } from 'array-shuffle';

function Home() {

    useEffect(function () {
        getRecentPosts()
    }, [])

    let [techPosts, setTechPosts] = useState()
    let [recentPosts, setRecentPosts] = useState()
    let [popularPosts, setPopularPosts] = useState()
    let [editorPicks, setEditorPics] = useState()

    function getRecentPosts() {
        let q = query(collection(db, "posts"), orderBy("date", "desc"))
        onSnapshot(q, function (snapshot) {
            let result = []
            snapshot.docs.forEach(function (doc) {
                result.push({ id: doc.id, ...doc.data() })
            })

            setRecentPosts(result.slice(0, 3))
            setEditorPics(arrayShuffle(result).slice(0, 3))
            setPopularPosts(arrayShuffle(result).slice(0, 5))
            setTechPosts(result.filter((post) => post.category == "Tech").slice(0, 3))
        })
    }
    return (
        <>

            <Header />
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner">
                                <div className="banner-image">
                                    <div className="overlay" />
                                    <img src={techPosts && techPosts[0].url} alt="image" />
                                    <div className="banner-text text-center">
                                        <h2 style={{width:900,textAlign:"center"}}><a href="#">{techPosts && techPosts[0].title.slice(0,50)}...</a></h2>
                                        {/* <h3>A map captures the Martian craters, valleys and peaks</h3> */}
                                        <p>By <a href="#">{ techPosts && techPosts[0].author}</a></p>
                                    </div>
                                </div>
                                <div className="banner-items">
                                    {techPosts && techPosts.map(function (techPost) {
                                        return (
                                            <>
                                                <div className="post">
                                                    <div className="thumb">
                                                        <img src={techPost.url} alt="image" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="cat">
                                                            <a href="#">Tech</a>
                                                        </div>
                                                        <h4><a href="#">{techPost.title.slice(0,30)}...</a></h4>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}

                                  
                                    <div className="clearfix" />
                                </div>
                            </div>{/* /.banner */}
                        </div>{/* /.col-md-12 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
            {/* Main */}
            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="featured-posts " data-animation="fadeInUp" data-animation-delay={0} data-animation-offset="75%">
                                <div className="content-left">
                                    <article className="post">
                                        <div className="thumb">
                                            <a href="#"><img src="/goodnews/images/thumbs/9.jpg" alt="img" /></a>
                                        </div>
                                        <div className="cat">
                                            <a href="#">Mustreads</a>
                                        </div>
                                        <h3><a href="#">If you wanted to get rich, how would you do it?</a></h3>
                                        <p className="excerpt-entry">I think your best bet would be to start or join a startup. That's been a reliable way to get rich for hundreds of years.The word "startup" dates from the 1960s, but what happens in one is very similar.</p>
                                        <div className="post-meta">
                                            <span className="author">By <a href="#">Paul Graham</a></span>
                                            <div className="activity">
                                                <span className="views">345</span><span className="comment"><a href="#">15</a></span>
                                            </div>
                                        </div>
                                    </article>{/*  /.post */}
                                </div>{/* /.content-left */}
                                <div className="content-right">
                                    <article className="post">
                                        <div className="thumb">
                                            <a href="#"><img src="/goodnews/images/thumbs/4.jpg" alt="img" /></a>
                                        </div>
                                        <div className="cat">
                                            <a href="#">Tech</a>
                                        </div>
                                        <h3><a href="#">Startups usually involve technology, so much so that the phrase "high-tech startup" is almost redundant.</a></h3>
                                        <div className="activity">
                                            <span className="views">12</span><span className="comment"><a href="#">15</a></span>
                                        </div>
                                    </article>{/*  /.post */}
                                    <article className="post">
                                        <div className="thumb">
                                            <a href="#"><img src="/goodnews/images/thumbs/4-2.jpg" alt="img" /></a>
                                        </div>
                                        <div className="cat">
                                            <a href="#">Social media</a>
                                        </div>
                                        <h3><a href="#">Startups usually involve technology, so much so that the phrase "high-tech startup" is almost redundant.</a></h3>
                                        <div className="activity">
                                            <span className="views">12</span><span className="comment"><a href="#">15</a></span>
                                        </div>
                                    </article>{/*  /.post */}
                                </div>{/* /.content-right */}
                            </div>{/* /.featured-posts */}
                            <div className="highlights-posts " data-animation="fadeInUp" data-animation-delay={0} data-animation-offset="75%">
                                <div className="gn-line" />
                                <div className="section-title">
                                    <h4><a href="#">Highlights</a></h4>
                                </div>
                                <article className="post">
                                    <div className="thumb">
                                        <a href="#"><img src="/goodnews/images/thumbs/7.jpg" alt="img" /></a>
                                    </div>
                                    <div className="cat">
                                        <a href="#">Social media</a>
                                    </div>
                                    <h3><a href="#">Like all back-of-the-envelope calculations, this one has a lot of wiggle room.</a></h3>
                                    <div className="activity">
                                        <span className="views">12</span><span className="comment"><a href="#">0</a></span>
                                    </div>
                                </article>{/*  /.post */}
                                <article className="post last">
                                    <div className="thumb">
                                        <a href="#"><img src="/goodnews/images/thumbs/7-3.jpg" alt="img" /></a>
                                    </div>
                                    <div className="cat">
                                        <a href="#">Social media</a>
                                    </div>
                                    <h3><a href="#">I'm not claiming the multiplier is precisely 36, but it is certainly more than 10...</a></h3>
                                    <div className="activity">
                                        <span className="views">12</span><span className="comment"><a href="#">0</a></span>
                                    </div>
                                </article>{/*  /.post */}
                                <article className="post">
                                    <div className="thumb">
                                        <a href="#"><img src="/goodnews/images/thumbs/7-2.jpg" alt="img" /></a>
                                    </div>
                                    <div className="cat">
                                        <a href="#">Social media</a>
                                    </div>
                                    <h3><a href="#">Like all back-of-the-envelope calculations, this one has a lot of wiggle room.</a></h3>
                                    <div className="activity">
                                        <span className="views">12</span><span className="comment"><a href="#">0</a></span>
                                    </div>
                                </article>{/*  /.post */}
                                <article className="post margin-b0 last">
                                    <div className="thumb">
                                        <a href="#"><img src="/goodnews/images/thumbs/7-4.jpg" alt="img" /></a>
                                    </div>
                                    <div className="cat">
                                        <a href="#">Social media</a>
                                    </div>
                                    <h3><a href="#">I'm not claiming the multiplier is precisely 36, but it is certainly more than 10...</a></h3>
                                    <div className="activity">
                                        <span className="views">12</span><span className="comment"><a href="#">0</a></span>
                                    </div>
                                </article>{/*  /.post */}
                            </div>{/* /.highlights-posts */}
                            <div className="editors-posts " data-animation="fadeInUp" data-animation-delay={0} data-animation-offset="75%">
                                <div className="gn-line" />
                                <div className="section-title">
                                    <h4><a href="#">Editors Picks</a></h4>
                                </div>
                                <div className="post-wrap">
                                    {editorPicks && editorPicks.map(function (editorPick) {
                                        return (
                                            <>
                                                <article className="post">
                                                    <div className="thumb">
                                                        <a href="#"><img src={editorPick.url} alt="img" /></a>
                                                    </div>
                                                    <div className="content">
                                                        <div className="cat">
                                                            <a href="#">Mustreads</a>
                                                        </div>
                                                        <h3><a href="#">{editorPick.title}</a></h3>
                                                        <p className="excerpt-entry">Economically, you can think of a startup as a way to compress your whole working life into a few years.</p>
                                                        <div className="post-meta">
                                                            <span className="author">By <a href="#">Anna Chapman</a></span>
                                                            <span className="time"> - 16 hours ago</span>
                                                        </div>
                                                    </div>
                                                </article>{/*  /.post */}
                                            </>
                                        )
                                    })}

                                </div>{/* /.post-wrap */}
                            </div>{/* /.editors-posts */}

                        </div>{/* /.col-md-8 */}
                        <div className="col-md-4">
                            <div className="sidebar-widget-1">
                                <div className="widget widget-recent " data-animation="fadeInUp" data-animation-delay={0} data-animation-offset="75%">
                                    <h5 className="widget-title">Recent Posts</h5>
                                    <ul>
                                        {recentPosts && recentPosts.map(function (recentPost) {
                                            return (
                                                <>
                                                    <li>
                                                        <div className="thumb">
                                                            <a href="#"><img src={recentPost.url} alt="img" /></a>
                                                        </div>
                                                        <div className="content">
                                                            <h3><a href="#">{recentPost.title.slice(0, 40)}...</a></h3>
                                                            <div className="date">{recentPost.date.toDate().toLocaleDateString()} | {recentPost.date.toDate().toLocaleTimeString()}</div>
                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })}

                                    </ul>
                                </div>{/* /.widget-recent */}

                                <div className="widget widget-most-popular " data-animation="fadeInUp" data-animation-delay={0} data-animation-offset="75%">
                                    <h5 className="widget-title">5 Most Popular</h5>
                                    <ul>
                                        {popularPosts && popularPosts.map(function (popularPosts, index) {
                                            return (
                                                <>
                                                    <li>
                                                        <div className="order">{++index}</div>
                                                        <p><a href="#">{popularPosts.title.slice(0, 70)}...</a></p>
                                                    </li>
                                                </>
                                            )
                                        })}

                                    </ul>
                                </div>{/* /.widget-popular */}


                                <Subscribe />

                            </div>{/* /.sidebar */}
                        </div>{/* /.col-md-4 */}
                        <div className="col-md-12">
                            <div className="gnSlider " data-animation="fadeInUp" data-animation-delay={0} data-animation-offset="75%">
                                <div className="flex-container">
                                    <div className="flexslider loading">
                                        <ul className="slides">
                                            <li>
                                                <div className="item-wrap">
                                                    <img src="/goodnews/images/slider/1.jpg" alt="image" />
                                                    <p className="item" data-bottomtext={0}>Kenneth Cole Challenges You to Do Good Deeds — and Prove it via Google Glass</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item-wrap">
                                                    <img src="/goodnews/images/slider/2.jpg" alt="image" />
                                                    <p className="item" data-bottomtext={0}>Kenneth Cole Challenges You to Do Good Deeds — and Prove it via Google Glass</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item-wrap">
                                                    <img src="/goodnews/images/slider/3.jpg" alt="image" />
                                                    <p className="item" data-bottomtext={0}>Kenneth Cole Challenges You to Do Good Deeds — and Prove it via Google Glass</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>{/* /.gnSlider */}
                        </div>{/* /.col-md-12 */}


                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
            <Footer />

        </>
    )
}

export default Home