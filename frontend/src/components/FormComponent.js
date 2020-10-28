import styled from "styled-components";

const FormComponent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 3.2rem;
color: #000000;

.logo{
    font-size: 25px;
    color: #256ce1;
    margin-bottom: 3.2rem;
}

.container{
    background-color: #fff;
    border-radius: 5px;
    padding: 25px;
    width: 50%;
    max-width: 650px;
}

.container h1{
    margin-bottom: 18px;
}

.group{
    position: relative;
}

.group .icon{
    position: absolute;
    left: 5px;
    top: 8px;
}

.group input{
    width: 100%;
    height: 30px;
    margin-bottom: 12px;
    border-radius: 5px;
    border: 1px solid #000000;
    padding: 7px;
    padding-left: 22px;
}

.container .footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
}

.footer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.footer .button{
    border-radius: 5px;
    background-color: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: 1px solid #256ce1;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 30%;
    margin-bottom: 12px;
    text-align: center;

    &:hover{
        background: #fff;
        color: #256ce1;
    }
}
`;

export default FormComponent;