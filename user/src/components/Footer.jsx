function Footer() {
    return (
        <>
            {/* Footer */}
            <footer id="footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="widget widget-brand">
                                    <div className="logo logo-footer">
                                        <a href="#"><img src="/goodnews/images/logo-footer.svg" alt="Good News" /></a>
                                    </div>
                                    <p>This pays especially well in technology, where you earn a premium for working fast.</p>
                                </div>{/* /.widget-brand */}
                                <div className="widget widget-social">
                                    <h5 className="widget-title">Follow Us</h5>
                                    <div className="social-list">
                                        <a href="#"><img src="/goodnews/images/facebook.svg" alt="image" /></a>
                                        <a href="#"><img src="/goodnews/images/twitter.svg" alt="image" /></a>
                                        <a href="#"><img src="/goodnews/images/youtube.svg" alt="image" /></a>
                                        <a href="#"><img src="/goodnews/images/dribbble.svg" alt="image" /></a>
                                    </div>
                                    <a className="email" href="#">hello@youraddress.com</a>
                                </div>{/* /.widget-social */}
                            </div>{/* /.col-md-4 */}
                            <div className="col-md-4">
                                <div className="widget widget-twitter">
                                    <h5 className="widget-title">Twitter</h5>
                                    <div className="latest-tweets" data-number={3} data-username="envato" data-modpath="twitter/index.html" />
                                </div>{/* /.widget-twitter */}
                            </div>{/* /.col-md-4 */}
                            <div className="col-md-2">
                                <div className="widget widget-list">
                                    <h5 className="widget-title">Main</h5>
                                    <ul className="links-list">
                                        <li><a href="#">Mustreads</a></li>
                                        <li><a href="#">Tech</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Entertainment</a></li>
                                        <li><a href="#">Social Media</a></li>
                                    </ul>
                                </div>{/* /.widget-list */}
                            </div>{/* /.col-md-2 */}
                            <div className="col-md-2">
                                <div className="widget widget-list">
                                    <h5 className="widget-title">About Us</h5>
                                    <ul className="links-list">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Team</a></li>
                                        <li><a href="#">Careers </a></li>
                                        <li><a href="#">Advertise</a></li>
                                        <li><a href="#">Copyright</a></li>
                                    </ul>
                                </div>{/* /.widget-list */}
                            </div>{/* /.col-md-2 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </div>{/* /.footer-widgets */}
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                © 2014 Good News, Inc.
                            </div>{/* /.col-md-12 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </div>
            </footer>
            {/* Go Top */}
            <a className="go-top">
                <i className="fa fa-chevron-up" />
            </a>
        </>
    )
}

export default Footer