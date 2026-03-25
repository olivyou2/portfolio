import type { techStackType } from "../types/techStackType";

export const techStacks: techStackType[] = [
    {
        name: "Nginx",
        icon: "https://www.svgrepo.com/show/373924/nginx.svg"
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
        name: "C#",
        icon: "https://www.svgrepo.com/show/452184/csharp.svg"
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
        name: "JavaScript",
        icon: "https://i.namu.wiki/i/frKAvVxYL4lLkhPOL4A6oXecju4K3ocjWh8Ww7rlcULvFxL7n-tHPHmCwhp-uWQLiRt3W86uTqKK7UfGLSiZMkmqOBMlYGyjNtr4RL9ay7I0dVD0fwPxrBvdUlMrlhylwV83SM88MnrXDl6oK0OYdg.svg"
    },
    {
        name: "TypeScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    },
    {
        name: "Dart",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg"
    },
    {
        name: "Verilog",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/verilog-code-file-icon.png"
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        name: "Svelte",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
    },
    {
        name: "NextJS",
        icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg"
    },
    {
        name: "Electron",
        icon: "https://www.svgrepo.com/show/443033/brand-electron.svg"
    },
    {
        name: "Spring",
        icon: "https://www.svgrepo.com/show/354380/spring-icon.svg"
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        name: "Django",
        icon: "https://www.svgrepo.com/show/353657/django-icon.svg"
    },
    {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
    },
    {
        name: "FastAPI",
        icon: "https://www.svgrepo.com/show/330413/fastapi.svg"
    },
    {
        name: "Bun",
        icon: "https://icon.icepanel.io/Technology/svg/Bun.svg"
    },
    {
        name: "Raspberry Pi",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
    },
    {
        name: "Arduino",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
    },
    {
        name: "FPGA",
        icon: "https://companieslogo.com/img/orig/XLNX-e61d7a44.png"
    },
    {
        name: "Espressif",
        icon: "https://www.svgrepo.com/show/330385/espressif.svg"
    },
    {
        name: "ATMEL",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Atmel_logo.svg"
    },
    {
        name: "AWS",
        icon: "https://www.svgrepo.com/show/448266/aws.svg"
    },
    {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
    },
    {
        name: "GCP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
    },
    {
        name: "OCI",
        icon: "https://www.svgrepo.com/show/448245/oracle.svg"
    },
    {
        name: "Vast.AI",
        icon: "https://wikia.schneedc.com/cloudservice/vast-logo.svg"
    },
    {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
        name: "Jenkins",
        icon: "https://www.svgrepo.com/show/373699/jenkins.svg"
    },
    {
        name: "GitHub",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
    },
    {
        name: "GitLab",
        icon: "https://www.svgrepo.com/show/373625/gitlab.svg"
    },
    {
        name: "MySQL",
        icon: "https://www.svgrepo.com/show/373848/mysql.svg"
    },
    {
        name: "PostgreSQL",
        icon: "https://www.svgrepo.com/show/354200/postgresql.svg"
    },
    {
        name: "MongoDB",
        icon: "https://www.svgrepo.com/show/331488/mongodb.svg"
    },
    {
        name: "Redis",
        icon: "https://www.svgrepo.com/show/354272/redis.svg"
    }
]

export const getTechStack = (name: string): techStackType | undefined => {
    return techStacks.find(stack => stack.name === name);
}
