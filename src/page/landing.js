import React, { Component } from 'react';
import './landing.css';

import Header from '../components/header';
import Form from '../components/form';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landingPage">
                    <Header/>
                    <main>
                        <aside>
                            <h1>
                                Pour te créer un itinéraire, connecte-toi ou crée un compte.
                            </h1>
                            <ul>
                                <li>Préparation d'itinéraire</li>
                                <li>Guidage GPS dans l&apos;app Liberty Rider</li>
                                <li>Export GPX</li>
                                <li>Détection d'accident et intervention des secours</li>
                                <li>...</li>
                            </ul>
                        </aside>
                        <Form/>
                    </main>
                </div>
            </div>
        );
    }
}

export default Landing;