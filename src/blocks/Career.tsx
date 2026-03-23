import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    border: none;
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

const CareerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px;
`;

const CareerItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 600px;
`;

const CareerItemLeft = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;
    padding: 20px 0px;
    width: 300px;
`;


const CareerItemRight = styled.div`
    display: flex;
    margin-left: 300px;
    flex-direction: column;

    position: relative;
    padding: 20px 0px;
`;

const CareerTimeline = styled.div`
    position: absolute;
    height: 100%;
    top: -0px;

    &.left {
        right: 0px;
    }
`;

const CareerTimelineDot = styled.div`
    width: 12px;
    height: 12px;
    background: white;
    border: 2px solid #007BFF;
    border-radius: 999px;
    position: absolute;
    left: -6px;
    z-index: 1;
`;

const CareerTimelineLine = styled.div`
    width: 2px;
    left: 0.5px;
    height: 100%;
    background: linear-gradient(180deg,rgba(0, 123, 255, 1) 0%, rgba(107, 172, 242, 1) 50%, rgba(0, 123, 255, 1) 99%);
    position: absolute;

    &.last {
        background: linear-gradient(180deg,rgba(0, 123, 255, 1) 0%, rgba(107, 172, 242, 1) 24%, rgba(255, 255, 255, 1) 100%);
    }
`;

const CareerItemTime = styled.div`
    font-size: 14px;
    font-weight: 500;
    width: 100%;

    padding: 0px 30px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.527)   ;

    &.left {
        text-align: right;
    }
`;

const CareerItemTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    width: 100%;

    padding: 0px 30px;
    box-sizing: border-box;
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.777)   ;

    &.left {
        text-align: right;
    }
`;


const CareerItemTitleCategory = styled.span`
    font-size: 12px;

    background-color: rgba(0, 0, 0, 0.7);
    color: white;

    /* margin-left: px; */
`;

const CareerItemDescription = styled.div`
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    padding: 0px 30px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.555);
    
    margin-top: 10px;
    line-height: 130%;

    &.left {
        text-align: right;
    }
`;

const CareerItemTagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 6px;
    margin-top: 10px;
    
    padding: 0px 30px;
    box-sizing: border-box;
    row-gap: 6px;

    &.left {
        justify-content: flex-end;
    }
`;

const CareerItemTagItem = styled.div`
    
    font-size: 12px;
    font-weight: 500;
    color: #005ab7;
    background-color: rgba(0, 123, 255, 0.12);
    border-radius: 999px;
    padding: 4px 8px;
    box-sizing: border-box;
`;


function Career() {
    const careerItems = [
        {
            time: "2016.01",
            title: "김정은 살빼기",
            category: "게임",
            description: "초등학생 시절 게임 개발을 접하고, GML을 독학하며 모바일 게임을 개발 및 출시",
            tags: ["GML"]
        },
        {
            time: "2020.02 - 2021.08",
            title: "마일드티니 개발자",
            category: "게임",
            description: "모바일 게임 '마일드티니'의 실시간 멀티플레이 파트 개발 등 다수 게임 시스템 개발 참여",
            tags: ["GML", "MongoDB", "Node.js", "AWS"]
        },
        {
            time: "2022.03 - 2022.11",
            title: "명지대학교 입학",
            category: "학업",
            description: "명지대학교 기계산업경영공학부 입학 및 멋쟁이사자처럼 백엔드 트랙 수료",
            tags: ["Node.js"]
        },
        {
            time: "2022.11 - 2023.02",
            title: "크몽 전문가",
            category: "응용 프로그램",
            description: "크몽에서 전문가로 활동하며 파이썬을 이용해 웹 크롤링, 데이터 분석, 간단한 웹 서비스 개발 등 다양한 프로젝트 수행",
            tags: ["Python", "SQLite", "Playwright", "BeautifulSoup", "ETC."]
        },
        {
            time: "2023.03 - 현재",
            title: "한국 외국어대학교 입학",
            category: "학업",
            description: "한국 외국어대학교 정보통신공학과 입학",
            tags: []
        },
        {
            time: "2023.03 - 2023.11",
            title: "짠샵 개발자",
            category: "웹 서비스",
            description: "기존에 운영하던 웹사이트 리팩토링 및 신규 기능 다수 개발 등 웹 서비스 개발 전반 참여, 웹뷰 형식의 모바일 앱 개발 및 출시",
            tags: ["PHP", "MySQL", "AWS", "Flutter"]
        }
    ]

    return (
        <div id="career">
            <Container>
                <Title>이력</Title>
                <CareerContainer>
                    <CareerItemContainer>
                        {careerItems.map((item, index) => {
                            const isRight = index % 2 === 0;
                            return isRight ? (
                                <CareerItemRight key={index}>
                                    <CareerTimeline>
                                        <CareerTimelineDot />
                                        <CareerTimelineLine className={index === careerItems.length - 1 ? "last" : ""} />
                                    </CareerTimeline>
                                    <CareerItemTime>{item.time} </CareerItemTime>
                                    <CareerItemTitle>{item.title} <CareerItemTitleCategory>{item.category}</CareerItemTitleCategory></CareerItemTitle>
                                    <CareerItemDescription>{item.description}</CareerItemDescription>
                                    <CareerItemTagContainer>
                                        {item.tags.map((tag, tagIndex) => (
                                            <CareerItemTagItem key={tagIndex}>{tag}</CareerItemTagItem>
                                        ))}
                                    </CareerItemTagContainer>
                                </CareerItemRight>
                            ) : (
                                <CareerItemLeft key={index}>
                                    <CareerTimeline className="left">
                                        <CareerTimelineDot />
                                        <CareerTimelineLine className={index === careerItems.length - 1 ? "last" : ""} />
                                    </CareerTimeline>
                                    <CareerItemTime className="left">{item.time}</CareerItemTime>

                                    <CareerItemTitle className="left">{item.title} <CareerItemTitleCategory>{item.category}</CareerItemTitleCategory></CareerItemTitle>
                                    <CareerItemDescription className="left">{item.description}</CareerItemDescription>
                                    <CareerItemTagContainer className="left">
                                        {item.tags.map((tag, tagIndex) => (
                                            <CareerItemTagItem key={tagIndex}>{tag}</CareerItemTagItem>
                                        ))}
                                    </CareerItemTagContainer>
                                </CareerItemLeft>
                            )
                        })}
                    </CareerItemContainer>

                </CareerContainer>
            </Container>
        </div>
    )
}

export default Career;