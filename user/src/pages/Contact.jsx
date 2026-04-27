import Footer from "../components/Footer"
import Header from "../components/Header"

function Contact() {
    return (
        <>
            <Header />
          
            {/* Main */}
            <section id="main" className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="content-left">
                                <h2>Say Hello!</h2>
                                <form id="contact-form" className="contact-form" method="post" action="https://formspree.io/f/xaqolano">
                                    <div className="note" />
                                    <div className="input-wrap">
                                        <input type="text" tabIndex={1} placeholder="First Name *" name="fname" id="name" />
                                    </div>
                                    <div className="input-wrap last">
                                        <input type="text" tabIndex={1} placeholder="Last Name *" name="lname" id="second-name" />
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" tabIndex={3} placeholder="Email *" name="email" id="email" />
                                    </div>
                                    <div className="input-wrap last">
                                        <input type="text" tabIndex={4} placeholder="Mobile No *" name="mobile" id="website" />
                                    </div>
                                    <div className="message-wrap">
                                        <textarea className tabIndex={5} placeholder="Message *" name="message" id="message" />
                                    </div>
                                    <div className="send-wrap">
                                        <input type="submit" id="submit" name="submit" className="submit" style={{ backgroundColor: 'red' }} />
                                    </div>
                                </form>{/* /.comment-form */}
                            </div>{/* /.content-left */}
                        </div>{/* /.col-md-9 */}
                        <div className="col-md-3">
                            <div className="content-right">
                                <h2>Contacts</h2>
                                <div className="contact-info">
                                    <p className="title">Main Office:</p>
                                    <p>Address: 1600 Pennsylvania Ave NW, Washington, DC 20500</p>
                                    <p>Phone: +990 (312) 123 45 67</p>
                                    <p>Email: hello@domain.com</p>
                                </div>
                                <div className="contact-info">
                                    <p className="title">Secondary Office:</p>
                                    <p>Address: 1600 Pennsylvania Ave NW, Washington, DC 20500</p>
                                    <p>Phone: +990 (312) 123 45 67</p>
                                    <p>Email: hello@domain.com</p>
                                </div>
                                <div className="contact-info">
                                    <p className="title">Business Hours:</p>
                                    <p>Monday - Friday: 08:00 - 17:59</p>
                                    <p>Saturday - Sunday: 09:00 - 13:59</p>
                                    <ul className="contact-social">
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                                    </ul>
                                    <div className="clearfix" />
                                </div>
                            </div>{/* /.content-right */}
                        </div>{/* /.col-md-3 */}
                        <div className="col-md-12">
                            <h2 className="title-map">On The Map</h2>
                            <div id="map" style={{ width: '100%', height: 550 }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198385.5230649662!2d73.00186408879452!3d22.49393615530929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4fa99db743bb%3A0xd9168bcf8e6150ab!2sVenom%20Technologies%20-%20Summer%20Internship%20%7C%20Web%20Development%20%7C%20Graphic%20Design%20%7C%20Data%20Science%20%7C%20Software%20Testing%20Training!5e0!3m2!1sen!2sin!4v1769421457276!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>{/* /map */}
                        </div>{/* /.col-md-12 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
            <Footer />



        </>
    )
}

export default Contact