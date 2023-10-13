import React from 'react';
import { Link } from "react-router-dom";

export default function Blogs() {

    function Items({ name, isPacked }) {
        var itemList = name;
        if(isPacked) {
            itemList = name + " is already Packed";
        }
        return(
            <ul>
                <li>{itemList}</li>
            </ul>
        )
    }

    return(
        <div className="container">
            <nav className="breadcrumb pt-5" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li className="is-active"><Link to="#" aria-current="page">Blogs</Link></li>
                </ul>
            </nav>

            <div className="is-max-desktop box">
                {/* <h2 className="title is-centered">Contact Us Form</h2> */}

                <Items name="Item 1" isPacked={true} />
                <Items name="Item 2" isPacked={true}/>
                <Items name="Item 3"/>
                <Items name="Item 4"/>
                <Items name="Item 5"/>
            </div>
        </div>
    )
}