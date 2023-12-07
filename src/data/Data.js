import {faHome, faEnvelope, faUserGraduate, faLaptopFile} from '@fortawesome/free-solid-svg-icons'
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,      
        path: '/'
    },
    {
        id: 2,
        name: 'About',
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Experience',
        icon : faLaptopFile,
        path: '/portfolio'
    },
    {
        id: 4,
        name: 'Contact',
        icon : faEnvelope,
        path: '/Contact'
    },
];


import image1 from '../../src/assets/scala.png'
import image2 from '../../src/assets/java.png'
import image3 from '../../src/assets/python.png'
import image4 from '../../src/assets/php.png'
import image5 from '../../src/assets/js.png'
import image6 from '../../src/assets/ts.png'
export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
    {
        id: 6,
        img: image6,
    },
];


import {faGraduationCap, faLanguage, faCode, faUsers,} from '@fortawesome/free-solid-svg-icons'
export const services = [
    {
        id: 1,
        icon: faGraduationCap,
        des1:'EQF LEVEL 7:',
        des2:'INFORMATICS',
        des3:'ENGINEERING',
        des4:'',
        des5:''
    },
    {
        id: 2,
        icon: faLanguage,
        des1:'PORTUGUESE',
        des2:'ENGLISH (C1)',
        des3:'SPANISH (A1)',
        des4:'',
        des5:'',
    },
    {
        id: 3,
        icon: faCode,
        des1:'JAVA',
        des2:'PYTHON',
        des3:'SCALA',
        des4:'JAVASCRIPT / TYPESCRIPT',
        des5:'PHP'
    },
    {
        id: 4,
        icon: faUsers,
        des1:'TEAM-WORK ORIENTED',
        des2:'GOOD LISTENER',
        des3:'AND COMUNICATOR ',
        des4:'RESPONSIBLE AND',
        des5:'HARD WORKER'
    },
];


import protfoliImg1 from '../../src/assets/p1.jpg'
import protfoliImg2 from '../../src/assets/p2.jpg'
import protfoliImg3 from '../../src/assets/p3.jpg'
import protfoliImg4 from '../../src/assets/p3.jpg'
export const portfolio = [
    {
        id: 1,
        img: protfoliImg1,
        name: 'diconium',
        des1: 'Cloud Engineer  [ 01/07/2023 – Current ]',
        des2: '',
    },
    {
        id: 1,
        img: protfoliImg2,
        name: 'Xpand IT',
        des1: 'Big Data Engineer  [ 26/09/2021 – 23/06/2023 ]',
        des2: 'Developed several cloud-based applications, using Azure technologies, that manage ETL processes to collect and treat data for the analysis and improvement of marketing campaigns. Also developed and maintained a CDC (Change Data Capture) framework, using Azure technologies, that monitors various typesof sources (databases, files and APIs), detects changes and sends these events to Kafka topics or SingleStore tables.',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'BSOLUS- Business Solutions, LDA',
        des1: 'Software Engineer  [ 07/09/2020 – 23/09/2021 ]',
        des2: 'E-commerce platforms maintenance and development of the Marketing Automation system based on microservices workflow orchestration.',
    },
    {
        id: 1,
        img: protfoliImg4,
        name: 'BSOLUS- Business Solutions, LDA',
        des1: 'Web Engineer  [ 23/11/2019 – 23/08/2020 ]',
        des2: 'Professional Internship: Development of a recommendations and data analysis (BI) tool for e-commerce platforms (online stores).',
    },

];


export const others = [
    {
        id: 1,
        name: 'Conference paper',
        link: 'https://link.springer.com/chapter/10.1007/978-3-030-62365-4_47',
        des: 'Improving Performance of Recommendation System Architecture [2020]',      
    },
    {
        id: 2,
        name: '21st International Conference on Intelligent Data Engeneering and Automated Learning',
        link: 'http://islab.di.uminho.pt/ideal2020/',
        des: 'IDEAL 2020',      
    },
    {
        id: 3,
        name: 'Pixels Camp 2017',
        link: 'https://pixels.camp/',   
        des: '(link)',   
    },
    {
        id: 4,
        name: 'Google HashCode 2017',
        link: 'https://codingcompetitions.withgoogle.com/hashcode/',
        des: '(link)',      
    },
    {
        id: 5,
        name: 'Web Summit',
        link: 'https://websummit.com/',
        des: '(link)',      
    },
];