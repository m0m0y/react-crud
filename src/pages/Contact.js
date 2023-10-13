import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Contact() {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost/api/controller.db.php?mode=contact', inputs)
        .then(function(res){
            console.log(res.data);
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    return (
        <>
        <div className="container">
            <nav className="breadcrumb pt-5" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li className="is-active"><Link to="#" aria-current="page">Contact Us</Link></li>
                </ul>
            </nav>

            <div className="is-max-desktop box">
                <h2 className="title is-centered">Contact Us Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Name:</label>
                        <div className="control">
                            <input  type="text" className="input" name="name" value={inputs.name || ""} onChange={handleChange} placeholder="Type your complete name here." />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email:</label>
                        <div className="control">
                            <input type="email" className="input" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="example@email.com" /> 
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Your Message:</label>
                        <div className="control">
                            <textarea className="textarea" name="messages" value={inputs.messages || ""} onChange={handleChange} placeholder="Type your message here."></textarea>
                        </div>
                    </div>

                    <div className="is-flex is-justify-content-flex-end">
                        <input type="submit" className="button is-success is-hovered" />
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}