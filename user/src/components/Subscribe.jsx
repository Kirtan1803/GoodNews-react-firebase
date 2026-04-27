import React from 'react'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { db } from '../firebaseconfig'

function Subscribe() {
    let [email, setEmail] = useState()

    async function subscribe() {
        let colRef = collection(db, "subscription")
        await addDoc(colRef, {
            email: email
        })
        toast.success('Thank you for subscribing!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        });

        setEmail("")
    }
    return (
        <>
            <div className="widget widget-subscribe " data-animation="fadeInUp" data-animation-delay={0} data-animation-offset="75%">
                <h5 className="widget-title">Good News Newsetter</h5>
                <p>Subscribe to our email newsletter for good news, sent out every Monday.</p>
                <form method="post" action="#" id="subscribe-form" data-mailchimp="true">
                    <div id="subscribe-content">
                        <div className="input">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="subscribe-email" name="subscribe-email" placeholder="Email" />
                        </div>
                        <div className="button">
                            <button onClick={subscribe} style={{backgroundColor:"red"}} type="button" id="subscribe-button" className title="Subscribe now">Subscribe</button>
                        </div>
                    </div>
                    <div id="subscribe-msg" />
                </form>
            </div>{/* /.widget-subscribe */}

        </>
    )
}

export default Subscribe