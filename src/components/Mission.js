import React, { Component } from 'react'
import './css/Mission.css'

export default class Mission extends Component {
    render() {
        return (
            <div id="mission" className="missionContainer">
                <div className="missionText1">
                    <h1>Nuestra misión</h1>
                    <p>Nuestra intención en kubi es poder formar un equipo de creativos que se especialicen en distintas areas
                        del mundo digital para poder brindar esos servicios a quien lo necesite. <a>Si tenes ganas de formar parte
                            del proyecto, contactanos!</a>
                    </p></div>

                <div className="missionText2">
                    <h2>¿Que es una cooperativa?</h2>
                    <p>En pocas palabras, una cooperativa es una forma distinta de administrar una empresa. En esta, todxs somos socios
                        y la palabra de todxs tiene el mismo peso. También se destaca la <a>transparencia de la empresa</a> y la <a>justa distribución.</a></p>

                </div>
            </div>
        )
    }
}
