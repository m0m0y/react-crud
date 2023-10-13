import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
    const [data, setData] = useState([]);
    const { user_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost/api/controller.db.php?mode=get&user_id=${user_id}`)
        .then(function(res){
            setData(res.data)
        })
    }, [user_id])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({...values, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put('http://localhost/api/controller.db.php?mode=update', {data, user_id})
        .then(function(res){
            console.log(res.status, res.data);
            navigate('/');
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
                        <li className="is-active"><Link to="#" aria-current="page">Update User</Link></li>
                    </ul>
                </nav>

                <div className="is-max-desktop box">
                    <div className="content m-5">
                        <h2 className="title is-right">Update User Form</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label">Name:</label>
                                <div className="control">
                                    <input type="text" className="input" name="name" defaultValue={data.fullname} onChange={handleChange} placeholder="Fullname" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Username:</label>
                                <div className="control">
                                    <input type="text" className="input" name="username" defaultValue={data.username} onChange={handleChange} placeholder="Username" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email:</label>
                                <div className="control">
                                    <input type="email" className="input" name="email" defaultValue={data.email} onChange={handleChange} placeholder="Email Address" /> 
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Address:</label>
                                <div className="control">
                                    <input type="text" className="input" name="address" defaultValue={data.address} onChange={handleChange} placeholder="Complete Address" /> 
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Phone:</label>
                                <div className="control">
                                    <input type="number" className="input" name="phone" defaultValue={data.phone} onChange={handleChange} placeholder="09xx-xxx-xxxx" /> 
                                </div>
                            </div>

                            <div className="is-flex is-justify-content-flex-end buttons mt-5">
                                <input type="submit" className="button is-success is-hovered" />
                                <Link to="/" className="button is-dark">Back</Link>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}