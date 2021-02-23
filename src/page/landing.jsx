import React, { Component } from 'react';
import styled from '@emotion/styled';
import bgImage from "../assets/background.png";

import Header from '../components/header';
import Form from '../components/form';

const Main = styled.main`
    padding-left:  4rem;
    padding-right: 4rem;
    display: flex;
    flex-flow: column wrap;
    font-size: var(--mobFontSize);
    @media screen and (min-width: 1000px) {
        display: flex;
        padding-top: 20rem;
        background: url(${bgImage}) no-repeat;
        background-size: cover;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        font-size: var(--desFontSizeS);
       }
    @media screen and (min-width: 1500px) {
        padding: 0 15rem;
        font-size: var(desFontSizeM);
    }
    &media screne and (min-width: 1920px){
        padding: 0 25rem;
        font-size: var(--desFontSizeL);
        gap: 7rem;
    }
`;

const Ul = styled.ul`
    position: relative;
    margin: 6rem 0 6rem 2.5rem;
    &::before {
        content: "";
        position: absolute;
        border-left: 0.2rem solid var(--orange);
        height: 95%;
        width: 0.1rem;
        left: -2rem;
        top: 2rem;
    }
`;

const Li = styled.li`
    position: relative;
    list-style-type: none;
    &not(:last-of-type) {
        margin-bottom: 2rem;
    }
    &:last-of-type {
        line-height: 1.7rem;
        &::after {
            content: "";
            position: absolute;
            border-left: 0.2rem solid white;
            height: 1.5rem;
            width: 0.1rem;
            left: -2rem;
            top: 2rem;
        }
    }
    &::before { 
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        border-radius: 50%;
        background: white;
        top: 0.8rem;
        left: -2.5rem;
        border: 0.3rem solid var(--orange);
    }
    @media screen and (min-with: 1000px) {
        padding-left: 5rem;
        &:before{
            top: 1.3rem;
        }
        &:last-of-type{
            line-height: 2rem;
            &:after{
                top: 2.5rem
            }
        } 
    }
`;

class Landing extends Component {
    render() {
        return (
                <div>
                    <Header/>
                    <Main>
                        <aside>
                            <h1>
                                Pour te créer un itinéraire, connecte-toi ou crée un compte.
                            </h1>
                            <Ul>
                                <Li>Préparation d'itinéraire</Li>
                                <Li>Guidage GPS dans l&apos;app Liberty Rider</Li>
                                <Li>Export GPX</Li>
                                <Li>Détection d'accident et intervention des secours</Li>
                                <Li>...</Li>
                            </Ul>
                        </aside>
                        <Form/>
                    </Main>
                </div>
        );
    }
}

export default Landing;