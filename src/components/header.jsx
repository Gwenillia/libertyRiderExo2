import React, { Component } from 'react';
import logo from '../assets/logo.png';
import styled from '@emotion/styled';

const CustomHeader = styled.header`
    @media screen and (min-width:1000px){
        margin-left: -10rem;
    }
`;

const Branding = styled.div`
    margin-top: 2rem;
    width: 25rem;
`;

const Logo = styled.img`
    width: 100%;
    height: auto;
    margin-left: 2rem;
    margin-bottom: 10rem;
    @media screen and (min-width: 1000px) {
        margin-bottom: 0;
    }
`;

class Header extends Component {
    render() {
        return (
            <CustomHeader>
                <Branding>
                    <Logo src={logo} alt="logo liberty rider"/>
                </Branding>
            </CustomHeader>
        );
    }
}

export default Header;