import { v4 as uuidv4 } from 'uuid';

const exampleData = {
    color1: "rgb(182, 232, 255)",
    color2: "rgb(249, 241, 149)",
    imgName: "",
    imgSrc: "",
    info: [
        {
            name: "Full Name",
            text: "林涵琪"
        },
        {
            name: "E-mail",
            text: "grtj1417@gmail.com"
        },
        {
            name: "Phone number",
            text: "0912-345-678"
        },
        {
            name: "Link to portfolio",
            text: "https://github.com/grtj1417"
        }
    ],
    educations: [
        {
            id: uuidv4(),
            school: "台北科技大學",
            degree: "工業設計系學士",
            startDate: "2019/09",
            endDate: "2024/06"
        }
    ],
    experiences: [
        {
            id: uuidv4(),
            company: "Software Engineer",
            positionTitle: "Genshin Impact",
            startDate: "2020/01",
            endDate: "2022/08",
            description: "I worked on the company's software development plans including all aspects of the SDLC in collaboration with peer programmers. My daily workflow here consisted of performing error analysis, assisting with IT issues and building/accessing databases including NoSQL and Node.js. I, together with my team of peers, developed 25+ Java Applications in the time of my employment."
        },
        {
            id: uuidv4(),
            company: "Black Mesa Labs",
            positionTitle: "UX Research Assistant",
            startDate: "2018/04",
            endDate: "2019/02",
            description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
        }
    ],
    skills: [
        {
            id: uuidv4(),
            text: "React"
        },
        {
            id: uuidv4(),
            text: "JavaScript"
        },
        {
            id: uuidv4(),
            text: "Webpack"
        },
        {
            id: uuidv4(),
            text: "Git"
        },
        {
            id: uuidv4(),
            text: "3ds Max"
        }
    ]
}

export default exampleData;