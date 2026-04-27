import Footer from "../components/Footer"
import Header from "../components/Header"

function About() {
    return (
        <>

            <Header />
            {/* Main */}
            <section id="main" className="about-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about-page-wrap">
                                <div className="content-right entry-page">
                                    <h2 className="title">About Us</h2>
                                    <p className="subtitle">I think your best bet would be to start or join a startup. That's been a reliable way to get rich for hundreds of years.The word "startup" dates from the 1960s, but what happens in one is very similar.</p>
                                    <div className="simple-slider" data-auto="false" data-effect="slide" data-direction="horizotal">
                                        <div className="flexslider">
                                            <ul className="slides">
                                                <li class="flex-active-slide" style={{width: '748px', float: 'left', display: 'block'}}>
                                                    <img src="/goodnews/images/gallery/3.jpg" alt="image" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>To be a movie-besotted adolescent in the ’70s and early ’80s was to experience, in real time and at an impressionable age, performances that would go on to become icons and monuments. ‘‘This kid doesn’t just act — he takes off into the vapors,’’ wrote Pauline Kael in her review of ‘‘Mean Streets.’’ Not that there was anything airy or abstract about what he was doing, which was transforming himself — physically, vocally, psychologically — with each new role. And in the process, before our eyes, reinventing the art of acting.</p>
                                    <p>I confess, however, that it took all my professional discipline to resist squandering the time I spent with De Niro on a recent Saturday afternoon in a slack-jawed fanboy recitation of his greatest hits. Oh, my God, you’re Jake LaMotta! You’re Johnny Boy! You’re Travis Bickle! I’m talking to you.</p>
                                    <p>You forget your dreams, ignore your family, suppress your feelings, neglect your friends, and forget to be happy. Errors of omission are a particularly dangerous type of mistake, because you make them by default.</p>
                                    <p>To the younger generation, though, he is most recognizably Jack Byrnes, Ben Stiller’s impossible father-in-law in the ‘‘Fockers’’ franchise. And as the reliable heavy in a steady stream of action movies and crime dramas, some (but not all) of them quite good. It has become fashionable to suggest that De Niro’s best work is behind him. But nostalgia is a vice, and a survey of the last four decades of movie history reveals that De Niro has never slackened, diminished or gone away but has rather, year in and year out, amassed a body of work marked by a seriousness and attention to detail that was there from the start.</p>
                                    <ul className="list">
                                        <li>Globalization creates interlocking fragility.</li>
                                        <li>Please, don’t drive a school bus blindfolded.</li>
                                        <li>We don't learn that we don't learn.</li>
                                        <li>History is opaque.</li>
                                        <li>History and society don't crawl. They make jumps.</li>
                                    </ul>
                                    <h5>Got any questions?</h5>
                                    <p>Visit our <a href="#">help center</a> or <a href="#">contact us</a>.</p>
                                </div>{/* /.content-right */}
                                <div className="content-left">
                                    
                                    <div className="about-contact">
                                        <h5 className="title">Contact us</h5>
                                        <p>1639 H Street Northwest,
                                            Washington, District of Columbia.</p>
                                        <p>Tel.: +0 20 550 6300<br />Fax: +0 20 580 6399</p>
                                        <p><a href="#">hello@domain.com</a></p>
                                    </div>
                                </div>{/* /.content-left */}
                            </div>{/* /.about-page-wrap */}
                        </div>{/* /.col-md-12 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
            {/* Footer */}
            <Footer />
            {/* Go Top */}
            <a className="go-top">
                <i className="fa fa-chevron-up" />
            </a>


        </>
    )
}

export default About