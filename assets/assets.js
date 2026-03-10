import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import python from './python.png';
import aws from './aws.png';
import ml_icon from './ml_icon.png';
import analysis_icon from './analysis_icon.png';
import dashboard_icon from './dashboard_icon.png';
import ai_solution_icon from './ai_solution_icon.png';
import backend_icon from './backend_icon.png';
import { time } from 'motion';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    python, aws,
    ml_icon,
    ai_solution_icon,
    analysis_icon,
    dashboard_icon,
    backend_icon
};

export const workData = [
    {
        title: 'Scalable Customer Data Platform (CDP)',
        description: 'Data Engineering (DE), Data Science (DS), and MLOps requirements.',
        bgImage: '/work-1.png',
        link: 'https://github.com/thanhtan2210/Scalable-Customer-Data-Platform-CDP'
    },
    {
        title: 'Sentiment Analysis System',
        description: 'NLP',
        bgImage: '/work-2.png',
        link: 'https://github.com/thanhtan2210/Semtiment_Analysis'
    },
    {
        title: 'Sales Dashboard: Enterprise Data Platform',
        description: 'Data Visualization & BI, ELT pipeline',
        bgImage: '/work-4.png',
        link: 'https://github.com/thanhtan2210/Sales_Dashboard'
    },
    {
        title: 'Power Hub',
        description: 'build an IOT web page',
        bgImage: './PowerHub.png',
        link: 'https://github.com/thanhtan2210/PowerHub'
    },
    {
        title: 'AI agent chess',
        description: 'Machine Learning basic',
        bgImage: './AI_agent.jpg',
        link: 'https://github.com/thanhtan2210/ai-agent-chess'
    },
    {
        title: 'Hotel Management System',
        description: 'Web Development',
        bgImage: './Hotel_managment.png',
        link: 'https://github.com/thanhtan2210/hotel-management-system'
    }
]

export const serviceData = [
    {
        icon: assets.dashboard_icon, // Đổi icon cho phù hợp (ví dụ: database, server)
        title: 'Data Pipeline & Infrastructure Engineering',
        description: 'Designing and building robust ETL pipelines and scalable data architectures. I transform, clean, and consolidate raw data into reliable databases to fuel applications and analytics.',
        link: ''
    },
    {
        icon: assets.backend_icon, // Đổi icon (ví dụ: api, code)
        title: 'Scalable Backend & Software Systems',
        description: 'Architecting high-performance backend systems and APIs. I bridge the gap between complex databases and applications to deliver secure, scalable, and seamless software solutions.',
        link: ''
    },
    {
        icon: assets.ml_icon, // Đổi icon (ví dụ: gear, cloud)
        title: 'Machine Learning Engineering & MLOps',
        description: 'Bridging the gap between data science and production. I optimize, scale, and deploy machine learning models into live environments, ensuring reliable performance and automated workflows.',
        link: ''
    },
    {
        icon: assets.ai_solution_icon,
        title: 'End-to-End AI Integration',
        description: 'Developing and seamlessly integrating AI capabilities into existing software ecosystems. From intelligent APIs to automated data platforms, I build solutions that drive real business value.',
        link: ''
    },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, R, C++, JavaScript, React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const toolsData = [
    assets.vscode, assets.aws, assets.mongodb, assets.git, assets.python
];