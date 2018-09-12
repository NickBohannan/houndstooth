import React, { Component } from 'react'
import axios from 'axios'

class Contact extends Component {

    handleSubmit(e) {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value
        axios({
            method: "POST",
            url: "http://localhost:3001/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if (response.data.message === 'success') {
                alert("Message Sent.")
                this.resetForm()
            } else if (response.data.message === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset()
    }

    render() {
        return (
            <div>
                <div className="mainbody">
                    <p className="mainbody-contact">If you're intested in a custom order or would like to get a hold of us for any reason, please submit a message detailing your needs and we will respond as soon as we are available.</p>
                    <form method='POST' onSubmit={this.handleSubmit.bind(this)} id="contact-form" >
                        <input type="text" required placeholder="Name" id="name" className="contact-form-field" />
                        <input type="email" required placeholder="Your email address" className="contact-form-field" id="email" />
                        <textarea required placeholder="Message" className="contact-form-field" id="message"></textarea>
                        <button type="submit" className="contact-btn">Submit</button>
                    </form>
                </div>
                <div className="footer-strip"></div>
                <div className="footer"></div>
            </div>
        );
    }
}

export { Contact }