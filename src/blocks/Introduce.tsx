import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;

    padding-top: 100px;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
`;

const Description = styled.div`
    font-size: 34px;
    font-weight: 700;
    margin-top: 40px;

    padding: 0px 15px;

    @media screen and (max-width: 550px) {
        font-size: 24px;
    }
`;

const Line = styled.div`
    width: 100%;
    line-height: 100%;
    text-align: center;
`;

const Blue = styled.span`
    color: #007BFF;
`;

const Subdescription = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
    color: #555;
    text-align: center;
    
    
    padding: 0px 15px;

    @media screen and (max-width: 550px) {
        font-size: 14px;
        text-align: center;
    }
`;

function Introduce() {
    return (
        <div>
            <Container>
                <ProfileImage src="./profile.jpg" alt="Profile" />
                <Description>
                    <Line>안녕하세요!<br />
                        개발자 <Blue>박원호</Blue>입니다.</Line>
                </Description>

                <Subdescription>
                    주로 웹과 관련된 업무를 수행하며, <br />
                    최근에는 저수준 프로그래밍을 공부하고 있습니다 <br />
                    현재는 딥러닝 추론 가속을 위한 NPU에 대해 연구하고 있습니다.
                </Subdescription>
            </Container>
        </div>
    )
}

export default Introduce;