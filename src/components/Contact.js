import React, { Component } from 'react'
import './css/Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contactContainer">
                <div className="line"></div>
                <div className="contactTextContainer">
                    <h1>¡Escribinos!</h1>
                    <ul>
                        <li><a href='https://wa.me/+5491124078271'>+54 9 11 2407-8271</a></li>
                        <li>info@kubi.com</li>
                        <li><a href='https://linktr.ee/kubicoop?utm_source=linktree_admin_share'>@kubicoop</a></li>
                    </ul>
                </div>

            </div>
        )
    }
}
