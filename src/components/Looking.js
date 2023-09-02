import React, { Component } from 'react'
import './css/Looking.css'
import Bg from './assets/flippedimg.jpg'

export default class Looking extends Component {
    render() {
        return (
            <div className="containerLook">
                <div className="servicios">
                    <img src={Bg} alt="dasdas" />
                </div>

            </div>
        )
    }
}

