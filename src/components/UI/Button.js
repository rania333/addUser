import styled from 'styled-components';
function Button(props) {
    return ( 
        <Btn onClick={props.onClick}>
            {props.children}
        </Btn>
    );
}
const Btn = styled.button`
    margin: 0px 40%;
    width: 20%;
    textAlign: center;
    fontSize: larger;
    border: none;
    padding: 5px;
    font-size: larger;
    background-color: cadetblue;
    color: white;
    border-radius: 10px;
    type: 'submit';
    @media(max-width: 945px) {
        font-size: small;
        width: 100%;
        margin: auto;
    }
`

export default Button;