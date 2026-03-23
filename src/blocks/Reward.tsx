import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;

    margin-top: 20px;
`;

const Title = styled.div`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
`;

const RewardContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    margin-top: 10px;
`;

const RewardItem = styled.div`
    text-align: center;
    font-size: 14px;
    padding: 0px 20px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
`;

const LinkImg = styled.img`
    width: 12px;
    height: 12px;

    cursor: pointer;
`;


function Reward() {
    return (
        <div id="reward">
            <Container>
                <Title>
                    수상
                </Title>
                <RewardContainer>
                    <RewardItem>
                        2022.11 - 멋쟁이사자처럼 MISSION24 경기남부연합 해커톤 우수상
                    </RewardItem>
                    <RewardItem>
                        2024.11 - KISA 주관 2024 강원지역 사이버보안 해킹방어대회 우수상 <LinkImg src="link.svg" onClick={() => window.open("https://www.kado.net/news/articleView.html?idxno=1278796", "_blank")} />
                    </RewardItem>
                    <RewardItem>
                        2025.11 - 2025 HUFS CodeFestival 비기너트랙 최우수상
                    </RewardItem>
                </RewardContainer>
            </Container>
        </div>
    )
}

export default Reward;