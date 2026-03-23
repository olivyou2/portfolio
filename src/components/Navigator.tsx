import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";



const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #b1b1b1;
    margin-bottom: 10px;

    padding-top: 100px;
    
    @media screen and (max-width: 550px) {
        display: none;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: center;

    position: sticky;
    top: 25px;
    z-index: 10;

    @media screen and (max-width: 550px) {
        display: none;
    }
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(227, 231, 241, 0.5);
    border-radius: 25px;
    backdrop-filter:blur(20px);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));

    padding: 0px 10px;
    column-gap: 4px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* margin: 0px 5px; */
    height: 70%;
    font-size: 14px;
    color: rgb(44, 42, 52);
    font-weight: 500;
    user-select: none;
    cursor: pointer;
    transition: color 0.2s ease, font-weight 0.2s ease, padding 0.2s ease, background-color 0.2s ease;
    width: auto;
    border-radius: 20px;

    padding: 0px 20px;

    &:hover, &.selected {
        color: rgb(26, 26, 26);
        font-weight: 500;
        padding: 0px 22px;
        background-color: white;
    }
`;

function Navigator() {
    const sections = useMemo(() => ["values", "techStacks", "portfolio", "career", "contact"], []);
    const [selectedSection, setSelectedSection] = useState("");
    const navigatorOffset = 110;

    useEffect(() => {
        const updateSelectedSectionByScroll = () => {
            const activationLineY = window.scrollY + window.innerHeight * 0.3;
            let currentSection = sections[0] ?? "";

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (!section) {
                    continue;
                }

                const sectionY = section.getBoundingClientRect().top + window.scrollY;
                if (activationLineY >= sectionY) {
                    currentSection = sectionId;
                }
            }

            setSelectedSection(currentSection);
        };

        updateSelectedSectionByScroll();
        window.addEventListener("scroll", updateSelectedSectionByScroll);
        window.addEventListener("resize", updateSelectedSectionByScroll);

        return () => {
            window.removeEventListener("scroll", updateSelectedSectionByScroll);
            window.removeEventListener("resize", updateSelectedSectionByScroll);
        };
    }, [sections]);

    const onClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            setSelectedSection(sectionId);
            const targetY = Math.max(0, section.getBoundingClientRect().top + window.scrollY - navigatorOffset);
            window.scrollTo({ top: targetY, behavior: "smooth" });
        }
    };

    return (
        <>
            <Title>Shortcut</Title>
            <Container>
                <Box>
                    <Column className={selectedSection === "values" ? "selected" : ""} onClick={() => onClick("values")}>
                        가치관
                    </Column>
                    <Column className={selectedSection === "techStacks" ? "selected" : ""} onClick={() => onClick("techStacks")}>
                        기술 스택
                    </Column>
                    <Column className={selectedSection === "portfolio" ? "selected" : ""} onClick={() => onClick("portfolio")}>
                        포트폴리오
                    </Column>
                    <Column className={selectedSection === "career" ? "selected" : ""} onClick={() => onClick("career")}>
                        이력
                    </Column>
                    <Column className={selectedSection === "contact" ? "selected" : ""} onClick={() => onClick("contact")}>
                        연락
                    </Column>
                </Box>
            </Container>
        </>
    )
}

export default Navigator;