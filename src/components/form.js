import React, { Component } from 'react';
import './form.css';
import * as ReactGA from 'react-ga';

const mailRegex = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: '',
            nom: '',
            email: '',
            pass: '',
            assurance: '',
            consent: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    componentDidMount() {
        const hashParams = window.location.hash.substr(3).split('&');
        for (let i = 0; i < hashParams.length; i++) {
            const p = hashParams[i].split('=');
            if (decodeURIComponent(p[0]) === 'email') {
                document.getElementById('email').value = decodeURIComponent(p[1]);
            }
        }

        // const emailInput = document.getElementById('email');
        // if (emailInput.value) {
        //     emailInput.nextElementSibling.classList.add('notEmpty');
        //     if (emailInput.value.match(mailRegex)) {
        //         emailInput.parentNode.lastChild.style.visibility = 'hidden';
        //     }
        // }


        let dataInput = document.getElementsByClassName('dataInput');
        for (let i = 0; i < 4; i++) {
            console.log(dataInput[i].lastChild);
            console.log(dataInput[i].childNodes[0].value);
            if (dataInput[i].childNodes[0].value && dataInput[2].childNodes[0].value.match(mailRegex)) {
                dataInput[i].lastChild.style.visibility = 'hidden';
                dataInput[i].children[1].classList.add('notEmpty');
            }
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const hint = target.parentNode.lastChild;

        if (value && (target.type !== 'checkbox') && (name !== 'assurance')) {
            target.nextElementSibling.classList.add('notEmpty');
        } else {
            target.nextElementSibling.classList.remove('notEmpty');
        }

        if ((value && (target.type !== 'checkbox' && target.type !== 'password') && ((name === 'email' && value.match(mailRegex)) || name !== 'assurance' && name !== 'email')) || (target.type === 'password' && value.length > 7)) {
            hint.style.visibility = 'hidden';
        } else {
            hint.style.visibility = 'visible';
        }

        this.setState({
            [name]: value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        if (this.state.email.match(mailRegex) && (this.state.consent && this.state.prenom && this.state.nom && this.state.pass.length > 7)) {
            ReactGA.event({
                category: 'Bouton',
                action: 'Click sur le bouton s\'inscrire (avec validation)'
            });
            console.log(this.state);
            window.location = 'https://liberty-rider.com/';

        }


    }

    clickHandler(event) {
        event.preventDefault();
        ReactGA.event({
            category: 'Bouton',
            action: 'Click sur le bouton j\'ai déjà un compte'
        });
        window.location = 'https://liberty-rider.com/';
    }

    render() {
        return (
            <div className="form">
                <h2>Crée ton compte Liberty Rider</h2>
                <a href="https://liberty-rider.com/" target="_blank" onClick={this.clickHandler}>J'ai déjà un compte</a>
                <form>
                    <div className="dataInput">
                        <input id="prenom" name="prenom" type="text" value={this.state.value}
                               onChange={this.handleChange} required/>
                        <label htmlFor="prenom">Prénom</label>
                        <p className="hint">Champ obligatoire</p>
                    </div>
                    <div className="dataInput">
                        <input id="nom" name="nom" type="text" value={this.state.value}
                               onChange={this.handleChange}
                               required/>
                        <label htmlFor="nom">Nom</label>
                        <p className="hint">Champ obligatoire</p>
                    </div>
                    <div className="dataInput">
                        <input id="email" name="email" type="email" value={this.state.value}
                               onChange={this.handleChange} required/>
                        <label htmlFor="email">Adresse email</label>
                        <p className="hint">Format invalide</p>
                    </div>
                    <div className="dataInput">
                        <input id="pass" name="pass" type="password" value={this.state.value}
                               onChange={this.handleChange} required/>
                        <label htmlFor="pass">Mot de passe</label>
                        <p className="hint">Ton mot de passe doit contenir 8 caractères</p>
                    </div>
                    <div className="dataInput">
                        <textarea name="assurance" id="assurance" value={this.state.value}
                                  placeholder="Cette info (optionnelle) permet de vérifier si ton assurance t&apos;offre Liberty Rider Premium."
                                  onChange={this.handleChange}/>
                        <label htmlFor="assurance">Ton assurance</label>

                    </div>
                    <div>
                        <input id="consent" name="consent" type="checkbox" value={this.state.value}
                               onChange={this.handleChange} required/>
                        <label htmlFor="consent">J&apos;accepte les <a href="#">conditions d'utilisation</a> et la <a
                            href="#">charte de
                            confidentialité</a></label>
                    </div>
                    <input type="submit" value="S&apos;inscrire" onClick={this.handleSubmit}/>

                </form>
                <a href="https://liberty-rider.com/" target="_blank" onClick={this.clickHandler}>J'ai déjà un compte</a>
            </div>
        );

    }

}

export default Form;