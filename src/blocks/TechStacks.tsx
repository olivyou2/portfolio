import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: none;

    padding: 0px 10px;
    width: 100%;
`;

const Title = styled.div`
    font-size: 14px;
    color: #007BFF;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
    box-sizing: border-box;
    column-gap: 20px;
    flex-wrap: wrap;
    row-gap: 10px;
`;

const Menu = styled.div<{ active?: boolean }>`
    font-size: 16px;
    font-weight: 500;
    flex-shrink: 0;
    color: rgba(0, 0, 0, 0.7);
    padding: 10px 20px;
    border-radius: 20px;
    transition: background-color 0.2s ease, color 0.2s ease;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.9);
    }

    ${(props) => props.active && `
        background-color: #007BFF;
        color: white;

        &:hover {
            background-color: #007BFF;
            color: white;
        }
    `}

    
    @media screen and (max-width: 550px) {
        background-color: rgba(0, 0, 0, 0.02);

        font-size: 14px;
        padding: 8px 16px;
    }
`;

const TechStackDetails = styled.div`
    margin-top: 20px;
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;

    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    }
`;

const TechStackItem = styled.div<{ visible: boolean; delay: number }>`
    padding: 10px;
    box-sizing: border-box;
    background-color: white;

    border-radius: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: ${(props => `background-color 0.2s ease, opacity 0.5s ease ${props.delay}ms, transform 0.5s ease ${props.delay}ms;`)};

    opacity: ${(props) => (props.visible ? 1 : 0)};
    transform: ${(props) => (props.visible ? "translateY(0px)" : "translateY(20px)")};
`;

const TechStackItemIcon = styled.img`
    width: 40px;
    height: 40px;
`;

const TechStackItemTitle = styled.div`  
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
`;

function TechStacks() {
    const [selectedStack, setSelectedStack] = useState("전체");
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const techStacks = [
        "언어",
        "프론트엔드",
        "백엔드",
        "하드웨어",
        "클라우드",
        "인프라"
    ];

    const techStackDetails: { [key: string]: { title: string, icon_url: string }[] } = {
        "언어": [

            {
                title: "Python",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                title: "C++",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            },
            {
                title: "C#",
                icon_url: "https://www.svgrepo.com/show/452184/csharp.svg"
            },
            {
                title: "Java",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            },
            {
                title: "JavaScript",
                icon_url: "https://i.namu.wiki/i/frKAvVxYL4lLkhPOL4A6oXecju4K3ocjWh8Ww7rlcULvFxL7n-tHPHmCwhp-uWQLiRt3W86uTqKK7UfGLSiZMkmqOBMlYGyjNtr4RL9ay7I0dVD0fwPxrBvdUlMrlhylwV83SM88MnrXDl6oK0OYdg.svg"
            },
            {
                title: "TypeScript",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            },
            {
                title: "Dart",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg"
            },
            {
                title: "Verilog",
                icon_url: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/verilog-code-file-icon.png"
            }
        ],
        "프론트엔드": [{
            title: "React",
            icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            title: "Svelte",
            icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
        },
        {
            title: "Electron",
            icon_url: "https://www.svgrepo.com/show/443033/brand-electron.svg"
        },
        {
            title: "NextJS",
            icon_url: "https://www.svgrepo.com/show/354113/nextjs-icon.svg"
        }

        ],
        "백엔드": [
            {
                title: "Spring",
                icon_url: "https://www.svgrepo.com/show/354380/spring-icon.svg"
            },
            {
                title: "Node.js",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            },
            {
                title: "Django",
                icon_url: "https://www.svgrepo.com/show/353657/django-icon.svg"
            },
            {
                title: "Flask",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
            },
            {
                title: "FastAPI",
                icon_url: "https://www.svgrepo.com/show/330413/fastapi.svg"
            },
            {
                title: "Bun",
                icon_url: "https://icon.icepanel.io/Technology/svg/Bun.svg"
            }
        ],
        "하드웨어": [{
            title: "Raspberry Pi",
            icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
        },
        {
            title: "Arduino",
            icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        {
            title: "FPGA",
            icon_url: "https://companieslogo.com/img/orig/XLNX-e61d7a44.png"
        },
        {
            title: "Espressif",
            icon_url: "https://www.svgrepo.com/show/330385/espressif.svg"
        },
        {
            title: "ATMEL",
            icon_url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Atmel_logo.svg"
        }

        ],
        "클라우드": [{
            title: "AWS",
            icon_url: "https://www.svgrepo.com/show/448266/aws.svg"
        }, {
            title: "Azure",
            icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        }, {
            title: "GCP",
            icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
        },
        {
            title: "OCI",
            icon_url: "https://www.svgrepo.com/show/448245/oracle.svg"
        },
        {
            title: "Vast.AI",
            icon_url: "https://wikia.schneedc.com/cloudservice/vast-logo.svg"
        }],
        "인프라": [{
            title: "Docker",
            icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        }]
    };

    const visibleStacks = useMemo(() => {
        if (selectedStack === "전체") {
            return Object.values(techStackDetails).flat();
        }

        return techStackDetails[selectedStack] ?? [];
    }, [selectedStack]);

    const changeCategory = (category: string) => {
        setSelectedStack(category);
        setIsInView(false);
    };

    useEffect(() => {
        const node = containerRef.current;
        if (!node || isInView) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px"
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [isInView]);



    return (
        <div id="techStacks">
            <Container ref={containerRef}>
                <Title>
                    기술 스택
                </Title>
                <MenuContainer>
                    <Menu active={selectedStack === "전체"} onClick={() => changeCategory("전체")}>전체</Menu>
                    {techStacks.map((stack) => (
                        <Menu key={stack} active={selectedStack === stack} onClick={() => changeCategory(stack)}>{stack}</Menu>
                    ))}
                </MenuContainer>
                <TechStackDetails>
                    {visibleStacks.map((tech, index) => (
                        <TechStackItem key={`${selectedStack}-${index}`} visible={isInView} delay={index * 20}>
                            <TechStackItemIcon src={tech.icon_url} alt={tech.title} />
                            <TechStackItemTitle>{tech.title}</TechStackItemTitle>
                        </TechStackItem>
                    ))}
                </TechStackDetails>

            </Container >
        </div >
    )
}

export default TechStacks;