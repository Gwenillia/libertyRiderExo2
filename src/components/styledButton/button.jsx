import styled from "@emotion/styled";

export const Button = styled.input`
&&{
background-color : var(--orange);
color            : white;
width            : 23rem;
align-self       : center;
outline          : none;
border           : none;
padding-bottom   : 2.3rem;
margin-bottom    : 2rem;
cursor           : pointer;
&:hover {
  background : rgba(255, 97, 88, 0.8);
}
&:active {
    transform: translateY(0.2rem);
    -webkit-transform: translateY(0.2rem);
    -moz-transform: translateY(0.2rem);
    -ms-transform: translateY(0.2rem);
    -o-transform: translateY(0.2rem);
}}
`