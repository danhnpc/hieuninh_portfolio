const imageKienTreList = [
    './Editable Portfolio Website_files/KienTre/1.JPG',
    './Editable Portfolio Website_files/KienTre/2.JPG',
    './Editable Portfolio Website_files/KienTre/3.JPG',
    './Editable Portfolio Website_files/KienTre/4.JPG'
];
const projectKienTre = imageKienTreList?.map(image => ({
    type: 'website',
    name: 'Job Kiến Trẻ',
    description: 'Presenting my work, skills and personal info.',
    image: image,
    logo: './Editable Portfolio Website_files/project logo 1.png'
}));

const imageBayPreschoolList = [
    './Editable Portfolio Website_files/BayPreschool/1.JPG',
    './Editable Portfolio Website_files/BayPreschool/2.JPG',
    './Editable Portfolio Website_files/BayPreschool/3.JPG',
    './Editable Portfolio Website_files/BayPreschool/4.JPG',
    './Editable Portfolio Website_files/BayPreschool/5.JPG',
    './Editable Portfolio Website_files/BayPreschool/6.JPG',
    'https://www.youtube.com/watch?v=LChgf5EW4os',
];
const projectBaySchool = imageBayPreschoolList?.map(image => ({
    type: 'website',
    name: 'Bay Preschool',
    description: 'Presenting my work, skills and personal info.',
    image: image,
    logo: './Editable Portfolio Website_files/project logo 1.png'
}));

// Collect all project data from the existing project cards
const allProjects = [
    {
        type: 'website',
        name: 'Kiến Trẻ',
        description: 'Presenting my work, skills and personal info.',
        image: './Editable Portfolio Website_files/Themenail/KienTre.JPG',
        logo: './Editable Portfolio Website_files/project logo 1.png',
        data: projectKienTre
    },
    {
        type: 'website',
        name: 'Bay Preschool',
        description: 'Presenting my work, skills and personal info.',
        image: './Editable Portfolio Website_files/Themenail/baypreschool.jpg',
        logo: './Editable Portfolio Website_files/project logo 2.png',
        data: projectBaySchool
    },
    {
        type: 'video',
        name: 'TỪ TỪ FINAL ANIMATION',
        description: 'To display some of my information',
        image: './Editable Portfolio Website_files/Themenail/tutu.png',
        logo: './Editable Portfolio Website_files/project logo 5.png',
        videoUrl: 'https://www.youtube.com/watch?v=dS089syvOeA'
    },
    {
        type: 'video',
        name: 'Cupid MV Lyrics',
        description: 'To display some of my information',
        image: './Editable Portfolio Website_files/Themenail/Cupid.jpg',
        logo: './Editable Portfolio Website_files/project logo 5.png',
        videoUrl: 'https://www.youtube.com/watch?v=chIACJhPsFA',
    },
        {
        type: 'video',
        name: 'AFK FOREVER - FINAL AR BOOK',
        description: 'To display some of my information',
        image: './Editable Portfolio Website_files/Themenail/afk_forever.png',
        logo: './Editable Portfolio Website_files/project logo 5.png',
        videoUrl: 'https://www.youtube.com/watch?v=LEUUlEcUXbo',
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
        type: 'ui-design',
        name: 'Astro Solve',
        description: 'To display some of my information',
        image: './Editable Portfolio Website_files/project-image6.png',
        logo: './Editable Portfolio Website_files/project logo 6.png',
    }
];
