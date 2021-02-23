import styled from '@emotion/styled';
export default null;

export const Label = styled.label`
position: absolute !important;
left: 2rem;
top: 2rem;
font-size: 1.6rem;
font-weight: 400;
color: gray;
transition: all 0.3s ease;
cursor: text;
&.notEmpty{
  top: 0.5rem;
  font-size: 1.2rem;
}
`