import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/api/controller.db.php?mode=users')
        .then(function(res){
            setData(res.data)
            // console.log(res.status, res.data)
        })
        .catch(err => console.log(err));
    }, [])


    const deleteUser = (user_id) => {                
        axios.delete(`http://localhost/api/controller.db.php?mode=delete&user_id=${user_id}`)
        .then(function(res){
            console.log(res.status, res.data)
            window.location.reload()
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    const deleteAllUsers = () => {
        alert("test");
    }

    function Items() {
        if(data.length === 0) {
            return (
                <tbody>
                    <tr>
                        <td colSpan="6"><p className="has-text-centered has-text-weight-medium">No Data</p></td>
                    </tr>
                </tbody>
            )
        } else {
            return (
                <tbody>
                    {
                        data.map((d, index) => (
                            <tr key={index}>
                                <td>{d.fullname}</td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <td>{d.address}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <div className="field is-grouped">
                                        <Link to={`update_user/${d.user_id}`} className="button is-link is-outlined is-small control">Edit</Link>
                                        <button onClick={() => deleteUser(d.user_id)} className="button is-danger is-small control">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            )
        }
    }

    return (
        <div className="container">
            <nav className="breadcrumb pt-5" aria-label="breadcrumbs">
                <ul>
                    <li className="is-active"><Link to="#">Dashboard</Link></li>
                </ul>
            </nav>

            <div className="is-max-desktop box">
                <div className="is-flex is-justify-content-flex-end field is-grouped">
                    <Link to="adduser" className="button is-success mr-1">Add User</Link>
                    <button onClick={() => deleteAllUsers()} className='button is-danger'>Delete All</button>
                </div>



                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <Items />
                    
                </table>
            </div>
        </div>
    );
}