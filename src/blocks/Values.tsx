import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;

    margin-top: 100px;
    padding: 0px 10px;
`;

const Title = styled.div`
    font-size: 14px;
    color: #007BFF;
`;

const ValuesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 20px 0px;
    box-sizing: border-box;
    column-gap: 20px;

    @media screen and (max-width: 550px) {
        flex-direction: column;
        row-gap: 20px;
    }
`;

const ValueContainer = styled.div`
    flex: 1;
    max-width: 250px;
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 550px) {
        max-width: none;
        width: 100%;
        padding: 0px 15px;
        box-sizing: border-box;
    }
`;

const ValueTitle = styled.div`
    font-size: 18px;
    font-weight: 700;  

    text-align: center;
    width: 100%;
    
    @media screen and (max-width: 550px) {
        font-size: 16px;
        text-align: left;
    }
`;

const ValueDescription = styled.div`
    flex: 1;
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
    width: 100%;

    color: rgba(0, 0, 0, 0.7);
    line-height: 130%;
    text-align: justify;

    text-justify: inter-word;

    

    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

function Values() {
    return (
        <div id="values">
            <Container>
                <Title>
                    가치관
                </Title>
                <ValuesContainer>
                    <ValueContainer>
                        <ValueTitle>소통 Driven Develop</ValueTitle>
                        <ValueDescription>
                            한 명의 천재보다 위대한 것은  정교하게 설계된 시스템입니다.

                            현대 프로세서가 멀티코어 스케줄링과 IPC 개선으로 한계를 돌파하듯, 개발의 핵심 또한 개별 코어의 성능을 넘어 '협업의 최적화'로 나아가고 있습니다.</ValueDescription>
                    </ValueContainer>
                    <ValueContainer>
                        <ValueTitle>Accelerated Intelligence</ValueTitle>
                        <ValueDescription>
                            인공지능이 인간의 지능을 가속화하는 시대에, 개발자는 단순한 도구 제작자가 아니라 '지능 가속의 설계자'로서, 인간과 기계가 함께 진화하는 미래를 만들어가야 합니다.
                        </ValueDescription>
                    </ValueContainer>
                    <ValueContainer>
                        <ValueTitle>Zero 기술부채</ValueTitle>
                        <ValueDescription>AI에 대한 과도한 의존은 소스의 원천을 흐리고, 감당할 수 없는 기술 부채를 남깁니다. 지금은 많은 이들이 '바이브 코딩'으로 결과물을 쏟아내고 있지만, 결국 시스템을 지배하는 건 그 근본을 깊이 이해하는 사람입니다. <b>이 사이트도 대부분은 손코딩으로 개발되었습니다!</b></ValueDescription>
                    </ValueContainer>

                </ValuesContainer>
            </Container>
        </div>
    )
}

export default Values;