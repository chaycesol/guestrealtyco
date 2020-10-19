import React from "react";
import { connect, styled } from "frontity"

const Contact = ({ state, libraries }) => {

    const data = state.source.get("/contact");
    const contactForm = state.source.page[data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <>
                <ContactForm>
                    <Html2React html={contactForm.content.rendered} />
                </ContactForm>  
        </>
    );
};

export default connect(Contact);

const ContactForm = styled.div`
    max-width: 100%;
    box-sizing: border-box;
    form{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    label{
        color: #ccb25c;
        font-size: 1rem;
        font-weight: 800;
    }
    input{
        padding: 5px;
    }
`