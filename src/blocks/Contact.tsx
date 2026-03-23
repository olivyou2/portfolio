import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 100px;
    border: none;

    height: 100vh;
    margin-bottom: 10px;
`;


const Title = styled.div`
    font-size: 14px;
    color: #007BFF;
`;

const Content = styled.div`
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    line-height: 130%;
    text-align: center;
    width: 100%;
    max-width: 800px;
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
    box-sizing: border-box;
    column-gap: 20px;
`;

const ContactMenu = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    padding: 10px 20px;
    border-radius: 20px;
    transition: background-color 0.2s ease, color 0.2s ease;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.9);
    }
`;

function Contact() {
    return (
        <div id="contact">
            <Container>
                <Title>Contact Me</Title>
                <Content>편하게 연락 주세요.</Content>

                <ContactContainer>
                    <ContactMenu>
                        toolscomfact@gmail.com
                    </ContactMenu>
                    <ContactMenu>
                        +82 10-4166-1683
                    </ContactMenu>
                </ContactContainer>
            </Container>
        </div>
    )
}

export default Contact;