import styled from "styled-components";
import type { usePopupState } from "../types/usePopupState";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
    border: none;
    margin-top: 100px;
    overflow: visible;
`;


const Title = styled.div`
    font-size: 14px;
    color: #007BFF;
`;

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 10px;
    flex-wrap: wrap;
    row-gap: 20px;

    margin-top: 20px;
    overflow: visible;
`;

const PortfolioItem = styled.div`
    display: flex;
    max-width: 300px;
    flex-direction: column;
    padding: 15px;
    border-radius: 15px;
    background: white;

    user-select: none;
    cursor: pointer;
    
    filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.1));
    transform: translateY(0);
    transition: transform ease 0.2s, background-color ease 0.2s;

    &:hover {
        transform: translateY(-5px);
        background: rgba(250, 250, 250);
    }
`;

const PortfolioImg = styled.img`
    width: 300px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

const PortfolioLinkContainer = styled.div`
    display: flex;
    column-gap: 4px;
    
    margin-top: 10px;
`;

const PortfolioLinkItem = styled.div`
    font-size: 12px;
    font-weight: 400;

    padding: 3px 6px;
    border-radius: 6px;
    
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.5);
    
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;

    cursor: pointer;
    user-select: none;
`;

const PortfolioLinkIcon = styled.img`
    width: 10px;
    height: 10px;
    fill: rgba(0, 0, 0, 0.5);
`;

const PortfolioTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
    
    margin-top: 15px;
`;

const PortfolioTitleCategory = styled.span`
    font-size: 12px;

    background-color: rgba(0, 0, 0, 0.7);
    color: white;

    /* margin-left: px; */
`;

const PortfolioDescription = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.5);
`;

const PortfolioTagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 6px;
    row-gap: 6px;
    margin-top: 8px;
    
    margin-top: 20px;
`;

const PortfolioTagItem = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #005ab7;
    background-color: rgba(0, 123, 255, 0.12);
    border-radius: 999px;
    padding: 4px 8px;
`;

function Portfolio({
    portfolioPopupState
}: {
    portfolioPopupState: usePopupState;
}) {
    const onClickItem = (payload: string) => {
        portfolioPopupState.openPopup(payload);
    }

    return (
        <div id="portfolio">
            <Container>
                <Title>포트폴리오</Title>
                <PortfolioContainer>
                    {/* 언타이틀 */}
                    <PortfolioItem onClick={() => onClickItem("untitle")}>
                        <PortfolioImg src="portfolio_untitle.png" />
                        <PortfolioLinkContainer>
                            <PortfolioLinkItem>GitHub <PortfolioLinkIcon src="link.svg" /></PortfolioLinkItem>
                        </PortfolioLinkContainer>
                        <PortfolioTitle>언타이틀 <PortfolioTitleCategory>프로젝트</PortfolioTitleCategory></PortfolioTitle>
                        <PortfolioDescription>디자인에 주요하게 사용되는 에셋이나 필요한 링크를 모아놓은 사이트</PortfolioDescription>
                        <PortfolioTagContainer>
                            <PortfolioTagItem>Svelte</PortfolioTagItem>
                            <PortfolioTagItem>Spring</PortfolioTagItem>
                            <PortfolioTagItem>TypeScript</PortfolioTagItem>
                            <PortfolioTagItem>Docker</PortfolioTagItem>
                            <PortfolioTagItem>AWS</PortfolioTagItem>
                        </PortfolioTagContainer>
                    </PortfolioItem>

                    {/* 마그마 */}
                    <PortfolioItem onClick={() => onClickItem("magma")}>
                        <PortfolioImg src="portfolio_magma.png" />
                        <PortfolioLinkContainer>
                            <PortfolioLinkItem onClick={() => window.open("https://마그마.site", "_blank")}>Web <PortfolioLinkIcon src="link.svg" /></PortfolioLinkItem>
                        </PortfolioLinkContainer>
                        <PortfolioTitle>마그마 <PortfolioTitleCategory>웹 서비스</PortfolioTitleCategory></PortfolioTitle>
                        <PortfolioDescription>마케팅 플랫폼과 마케팅 공급업자 간의 연결을 돕는 서비스</PortfolioDescription>
                        <PortfolioTagContainer>
                            <PortfolioTagItem>Svelte</PortfolioTagItem>
                            <PortfolioTagItem>Spring</PortfolioTagItem>
                            <PortfolioTagItem>Docker</PortfolioTagItem>
                        </PortfolioTagContainer>
                    </PortfolioItem>


                </PortfolioContainer>
            </Container>
        </div>
    )
}

export default Portfolio;