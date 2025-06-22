const imageKienTreList = [
    './Editable Portfolio Website_files/KienTre/1.JPG',
    './Editable Portfolio Website_files/KienTre/2.JPG',
    './Editable Portfolio Website_files/KienTre/3.JPG',
    './Editable Portfolio Website_files/KienTre/4.JPG',
    './Editable Portfolio Website_files/KienTre/5.png',
];
const projectKienTre = imageKienTreList?.map(image => ({
    image: image
}));

const imageBayPreschoolList = [
    './Editable Portfolio Website_files/Video/BayPreschool.mp4',
    './Editable Portfolio Website_files/BayPreschool/1.JPG',
    './Editable Portfolio Website_files/BayPreschool/2.JPG',
    './Editable Portfolio Website_files/BayPreschool/3.JPG',
    './Editable Portfolio Website_files/BayPreschool/5.JPG',
    './Editable Portfolio Website_files/BayPreschool/6.JPG',
];
const projectBaySchool = imageBayPreschoolList?.map(image => ({
    image: image,
}));

const ARKList = [
    './Editable Portfolio Website_files/Video/ARK.mp4',
];
const projectARK = ARKList?.map(image => (
    {
        image: image,
    }));
const cupidList = [
    './Editable Portfolio Website_files/Video/cupid.mp4',
];
const projectCupid = cupidList?.map(image => (
    {
        image: image,
    }));


const tutuList = [
    './Editable Portfolio Website_files/Video/tutu.mp4',
];
const projectTutu = tutuList?.map(image => (
    {
        image: image,
    }));

// Collect all project data from the existing project cards
const allProjects = [
    {
        type: 'project',
        name: 'Kiến Trẻ',
        description: 'Presenting my work, skills and personal info.',
        image: './Editable Portfolio Website_files/Themenail/KienTre.JPG',
        logo: './Editable Portfolio Website_files/project logo 1.png',
        data: projectKienTre
    },
    {
        type: 'project',
        name: 'Bay Preschool',
        description: 'Presenting my work, skills and personal info.',
        image: './Editable Portfolio Website_files/Themenail/baypreschool.jpg',
        logo: './Editable Portfolio Website_files/project logo 2.png',
        data: projectBaySchool
    },
    {
        type: 'video',
        name: 'REVIEW ADIDAS X SPEEDPORTAL...',
        description: 'To display some of my information',
        image: './Editable Portfolio Website_files/Themenail/adidas.jpg',
        logo: './Editable Portfolio Website_files/project logo 5.png',
        videoUrl: 'https://www.youtube.com/watch?v=UyV2kj2IHDE',
    },
    {
        type: 'video',
        name: 'REVIEW NIKE MERCURIAL VAPOR ...',
        description: 'To display some of my information',
        image: './Editable Portfolio Website_files/Themenail/nike.jpg',
        logo: './Editable Portfolio Website_files/project logo 5.png',
        videoUrl: 'https://www.youtube.com/watch?v=8Ti7u-e0hRQ',
    },
    {
        type: 'design',
        name: 'AFK FOREVER',
        description: 'AFK FOREVER - FINAL AR BOOK',
        image: './Editable Portfolio Website_files/Themenail/afk_forever.png',
        logo: './Editable Portfolio Website_files/project logo 5.png',
        data: projectARK
    },
    {
        type: 'design',
        name: 'Cupid MV Lyrics',
        description: 'To display some of my information',
        image: './Editable Portfolio Website_files/Themenail/Cupid.jpg',
        logo: './Editable Portfolio Website_files/project logo 5.png',
        data: projectCupid
    },
    {
        type: 'design',
        name: 'TỪ TỪ FINAL ANIMATION',
        description: 'To display some of my information',
        image: './Editable Portfolio Website_files/Themenail/tutu.png',
        logo: './Editable Portfolio Website_files/project logo 5.png',
        data: projectTutu
    }
];
