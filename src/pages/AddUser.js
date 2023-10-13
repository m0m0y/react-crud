import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function AddUser() {

    const randomString = (len) => {
        let res = '';
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
        const charLen = characters.length;
        for (let i = 0; i < len; i++) {
            res += characters.charAt(Math.floor(Math.random() * charLen));
        }
        return res;
    }

    const [inputs, setInputs] = useState({});
    const [userId, setUserId] = useState(randomString(8));

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost/api/controller.db.php?mode=add', {inputs, userId})
        .then(function(res){
            console.log(res.status, res.data);
            window.location.reload();
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    
    return (
        <div className="container">
            <nav className="breadcrumb pt-5" aria-label="breadcrumbs">
                <ul>
                    <li className=""><Link to="#">Dashboard</Link></li>
                    <li className="is-active"><Link to="#" aria-current="page">Add User</Link></li>
                </ul>
            </nav>

            <div className="is-max-desktop box">
                <div className="content m-5">
                    <h2 className="title is-right">Add User Form</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="is-hidden">
                            <input type="text" className="input" name="user_id" value={userId} onChange={(e) => setUserId(e.target.value)} readOnly />
                        </div>

                        <div className="field">
                            <label className="label">Name:</label>
                            <div className="control">
                                <input type="text" className="input" name="name" value={inputs.name || ""} onChange={handleChange} placeholder="Fullname" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Username:</label>
                            <div className="control">
                                <input type="text" className="input" name="username" value={inputs.username || ""} onChange={handleChange} placeholder="Username" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email:</label>
                            <div className="control">
                                <input type="email" className="input" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="Email Address" /> 
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Address:</label>
                            <div className="control">
                                <input type="text" className="input" name="address" value={inputs.address || ""} onChange={handleChange} placeholder="Complete Address" /> 
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Phone:</label>
                            <div className="control">
                                <input type="number" className="input" name="phone" value={inputs.phone || ""} onChange={handleChange} placeholder="09xx-xxx-xxxx" /> 
                            </div>
                        </div>

                        <div className="is-flex is-justify-content-flex-end buttons">
                            <input type="submit" className="button is-success is-hovered" />
                            <Link to="/" className="button is-dark">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}