import styled from "styled-components";

const ListComponent = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 55px;

.title-group{
    display: flex;
    justicy-content: space-between;
}

h1{
    font-size: 38px;
    margin-bottom: 75px;
}

.icon{
    margin-left: 50px;

    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #256ce1;
    border-radius: 5px;
    border: none;

    transition: .5s;
}

.icon:hover{
    opacity: .7;
}

ul{
    color: #000000;
    width: 60%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;
}

ul li{
    background-color: #FFF;
    padding: 20px;
    border-radius: 8px;
    position: relative;
}

ul .cursor{
    cursor: pointer;
}

ul li strong{
    display: block;
    margin-bottom: 16px;
    color: #414141;
}

ul li p{
    color: #737373;
    line-height: 21px;
    font-size: 16px;
}

ul li p + strong{
    margin-top: 32px;
}
`;

export default ListComponent;