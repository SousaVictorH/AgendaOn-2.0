import React, { Component } from "react";

import styled from "styled-components";

class Footer extends Component{
    render(){
        return(
            <FooterContainer>
                <div className="copy-right">
                    <div>
                    &copy;{new Date().getFullYear()} THICC MEMES INC | All right reserved | Terms of service | Privacity
                    </div>
                </div>
            </FooterContainer>
        );
    }
}

export default Footer;

const FooterContainer = styled.footer`
    
    background: #000;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;

    .copy-right{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;