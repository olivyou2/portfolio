import styled from "styled-components";
import type { techStackType } from "../types/techStackType";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

const Container = styled.div`
    padding: 40px 30px 50px 30px;
    
    
    @media screen and (max-width: 550px) {
    padding: 40px 20px 50px 20px;
    }
`;

const Title = styled.div`
    margin-top: 10px;
    width: 100%;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
`;

const Imgs = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 200px;
    overflow: hidden;

    /* 스크롤바 제거! */
    &::-webkit-scrollbar {
        display: none;
    }
`;

const ImgsContainer = styled.div`
    display: flex;
    min-width: 0px;
    column-gap: 10px;
`;

const Img = styled.img`
    height: 200px;
    display: block;
    transition: opacity 0.2s ease;

    border-radius: 8px;
    border: 1px solid rgba(200,200,200);
    box-sizing: border-box;
`;

const ImgSkeleton = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 2px;
    background-color: rgba(220, 220, 220);
    position: absolute;
`;

const Description = styled.div`
    margin-top: 30px;
`;

const DescriptionTitle = styled.div`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.4);
    text-align: left;
    font-weight: 500;

    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

const DescriptionContent = styled.div`
    margin-top: 5px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    text-align: left;
    font-weight: 600;
    line-height: 1.5;

    @media screen and (max-width: 550px) {
        font-size: 13px;
    }
`;

const TechStacks = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 7px;
`;

const TechStackContainer = styled.div`
    display: flex;
    column-gap: 8px;
    flex-wrap: wrap;
`;

const TechStacksTitle = styled.div`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.4);
    text-align: left;
    font-weight: 500;
    
    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

const TechStackItem = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    align-items: center;
    justify-content: center;
    height: 40px;
    position: relative;
    transform: scale(1);
    transition: transform 0.2s ease;

    & > .title {
        height: 0px;
        opacity: 0;

        transition: height 0.2s, opacity 0.2s;
    }

    &:hover > .title {
        height: 15px;
        opacity: 1;
    }
    &:hover {
        transform: scale(1.1);
    }
`;

const TechStackIconSkeleton = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 2px;
    background-color: rgba(220, 220, 220);
    position: absolute;
`;

const TechStackIcon = styled.img`
    width: 30px;
    height: 30px;
`;

const TechStackNameDummy = styled.div`
`;

const TechStackName = styled.div`
    /* width: 10px; */
    position: absolute;
    top: 32px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    user-select: none;
    
    @media screen and (max-width: 550px) {
        font-size: 10px;
    }
`;

const InfoContainer = styled.div`
    margin-top: 30px;
    display: flex;
    column-gap: 30px;
`;

const InfoContainerItem = styled.div`
    display: flex;
    flex-direction: column; 
    row-gap: 5px;
`;

const InfoContainerItemTitle = styled.div`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.4);
    text-align: left;
    font-weight: 500;
    
    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

const InfoContainerItemContent = styled.div`
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    text-align: left;
    font-weight: 600;
    line-height: 1.5;
    
    @media screen and (max-width: 550px) {
        font-size: 13px;
    }
`;

const HorizontalLine = styled.hr`
    margin-top: 30px;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

const DetailsItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const DetailsItemTitle = styled.div`
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    
    
    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;

const DetailsItemContent = styled.ul`
    margin: 10px 0px 10px 0px;
    padding-left: 14px;
`;

const DetailsItemContentItem = styled.li`
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    
    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
`;



function TechStackImage({ src, alt }: { src: string, alt: string }) {
    const [loaded, setLoaded] = useState(true);

    return (
        <>
            {!loaded && <TechStackIconSkeleton />}
            <TechStackIcon
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
            />
        </>
    );
}


function PopupImage({ src, alt }: { src: string, alt: string }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {!loaded && <ImgSkeleton />}
            <Img
                src={src}
                alt={alt}
                onLoad={() => {
                    setLoaded(true);
                }}
                onError={() => setLoaded(true)} />
        </>
    );
}


function PortfolioPopup({
    name,
    imgs,
    description,
    stacks,
    people,
    date,
    links,
    details

}: {
    name: string,
    imgs: string[],
    description: string,
    stacks: techStackType[],
    people: number,
    date: string,
    links: { name: string, url: string }[],

    details: {
        title: string,
        content: string[]
    }[]
}) {
    const [emblaRef] = useEmblaCarousel();

    return (
        <Container>
            <Title>{name}</Title>
            <Imgs ref={emblaRef}>
                <ImgsContainer>
                    {
                        imgs.map((img, index) => (
                            <PopupImage key={index} src={img} alt={`${name} ${index + 1}`} />
                        ))
                    }
                </ImgsContainer>
            </Imgs>
            <Description>
                <DescriptionTitle>프로젝트 설명</DescriptionTitle>
                <DescriptionContent>{description}</DescriptionContent>
            </Description>
            <TechStacks>
                <TechStacksTitle>사용 기술 스택</TechStacksTitle>
                <TechStackContainer>
                    {
                        stacks.map((stack, index) => (
                            <TechStackItem key={index}>
                                <TechStackImage src={stack.icon} alt={stack.name} />
                                <TechStackNameDummy className="title" />
                                <TechStackName className="title">{stack.name}</TechStackName>
                            </TechStackItem>
                        ))
                    }
                </TechStackContainer>
            </TechStacks>
            <InfoContainer>
                <InfoContainerItem>
                    <InfoContainerItemTitle>참여 인원</InfoContainerItemTitle>
                    <InfoContainerItemContent>{people}명</InfoContainerItemContent>
                </InfoContainerItem>
                <InfoContainerItem>
                    <InfoContainerItemTitle>진행 기간</InfoContainerItemTitle>
                    <InfoContainerItemContent>{date}</InfoContainerItemContent>
                </InfoContainerItem>
                {
                    links.length > 0 && (
                        <InfoContainerItem>
                            <InfoContainerItemTitle>관련 링크</InfoContainerItemTitle>
                            <InfoContainerItemContent>
                                {
                                    links.map((link, index) => (
                                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                                            {link.name}
                                        </a>
                                    ))
                                }
                            </InfoContainerItemContent>
                        </InfoContainerItem>
                    )
                }
            </InfoContainer>
            <HorizontalLine />
            <DetailsContainer>
                {details.map((detail, index) => (
                    <DetailsItem key={index}>
                        <DetailsItemTitle>{detail.title}</DetailsItemTitle>
                        <DetailsItemContent>
                            {
                                detail.content.map((content, index) => (
                                    <DetailsItemContentItem key={index}>{content}</DetailsItemContentItem>
                                ))
                            }
                        </DetailsItemContent>
                    </DetailsItem>
                ))}

            </DetailsContainer>

        </Container>
    );
}

export default PortfolioPopup;