import * as ReactGA from 'react-ga';
import React, { Component } from 'react';
import styled from '@emotion/styled';
import './form.css';

import { Button } from './styledButton/button';
import { Label } from './styledLabel/label';

const mailRegex = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';

const FormComponent = styled.form`
  display: flex;
  flex-flow: column;
`;

const H2 = styled.h2`
    color: var(--orange);
    font-weight: 600;
    text-align: center;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
`;

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
        
        this.textInput = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    componentDidMount() {
        const hashParams = window.location.hash.substr(3).split('&');
        for (let i = 0; i < hashParams.length; i++) {
            const p = hashParams[i].split('=');
            if (decodeURIComponent(p[0]) === 'email') {
                document.getElementById('email').value = decodeURIComponent(p[1]);
                this.setState({ email: decodeURIComponent(p[1]) });
            }
        }

        // preparation des inputs, labels et hints au chargement
        let dataInput = document.getElementsByClassName('dataInput');
        for (let i = 0; i < 4; i++) {
            dataInput[i].lastChild.style.visibility = 'hidden';
            if (dataInput[i].childNodes[0].value) {
                dataInput[i].children[1].classList.add('notEmpty');
                if (!dataInput[2].childNodes[0].value.match(mailRegex)) {
                    dataInput[i].lastChild.style.visibility = 'visible';
                }
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
                <H2>Crée ton compte Liberty Rider</H2>
                <a href="https://liberty-rider.com/" target="_blank" onClick={this.clickHandler}>J'ai déjà un compte</a>
                <FormComponent>
                    <div className="dataInput">
                        <input id="prenom" name="prenom" type="text" value={this.state.value}
                               onChange={this.handleChange} required/>
                        <Label htmlFor="prenom">Prénom</Label>
                        <p className="hint">Champ obligatoire</p>
                    </div>
                    <div className="dataInput">
                        <input id="nom" name="nom" type="text" value={this.state.value}
                               onChange={this.handleChange}
                               required/>
                        <Label htmlFor="nom">Nom</Label>
                        <p className="hint">Champ obligatoire</p>
                    </div>
                    <div className="dataInput">
                        <input id="email" name="email" type="email" value={this.state.value}
                               onChange={this.handleChange} required/>
                        <Label htmlFor="email">Adresse email</Label>
                        <p className="hint">Format invalide</p>
                    </div>
                    <div className="dataInput">
                        <input id="pass" name="pass" type="password" value={this.state.value}
                               onChange={this.handleChange} required/>
                        <Label htmlFor="pass">Mot de passe</Label>
                        <p className="hint">Ton mot de passe doit contenir 8 caractères</p>
                    </div>
                    <div className="dataInput">
                        <textarea name="assurance" id="assurance" value={this.state.value}
                                  placeholder="Cette info (optionnelle) permet de vérifier si ton assurance t&apos;offre Liberty Rider Premium."
                                  onChange={this.handleChange}/>
                        <Label htmlFor="assurance">Ton assurance</Label>

                    </div>
                    <div>
                        <input id="consent" name="consent" type="checkbox" value={this.state.value}
                               onChange={this.handleChange} required/>
                        <label htmlFor="consent">J&apos;accepte les <a href="#">conditions d'utilisation</a> et la <a
                            href="#">charte de
                            confidentialité</a></label>
                    </div>
                    <Button type="submit" value="S&apos;inscrire" onClick={this.handleSubmit}/>

                </FormComponent>
                <a href="https://liberty-rider.com/" target="_blank" onClick={this.clickHandler}>J'ai déjà un compte</a>
            </div>
        );

    }

}

export default Form;