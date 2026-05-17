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
        link: 'https://github.com/thanhtan2210/Scalable-Customer-Data-Platform-CDP',
        slug: 'scalable-cdp',
        longDescription: 'A comprehensive platform designed for large-scale customer data processing (target: 50M users), catering to Data Engineering (DE), Data Science (DS), and MLOps requirements. The project features automated data cleaning, schema normalization, and Data Quality (SLA) validation.',
        technologies: ['Python', 'Docker', 'FastAPI', 'MinIO', 'MLflow', 'Streamlit', 'Parquet'],
        features: [
            'Unified CLI for project lifecycle management',
            'Hybrid Execution (Docker or Local Mode)',
            'Robust ETL with automated cleaning and SLA validation',
            'ML Lifecycle tracking with MLflow',
            'Interactive Business Dashboard with Streamlit'
        ]
    },
    {
        title: 'Sentiment Analysis System',
        description: 'NLP',
        bgImage: '/work-2.png',
        link: 'https://github.com/thanhtan2210/Semtiment_Analysis',
        slug: 'sentiment-analysis',
        longDescription: 'An end-to-end NLP system for sentiment analysis on large datasets. It includes data preprocessing, model training using state-of-the- art techniques, and deployment as a scalable service.',
        technologies: ['Python', 'PyTorch', 'HuggingFace', 'FastAPI', 'Docker'],
        features: [
            'Custom NLP preprocessing pipeline',
            'Deep Learning model training and evaluation',
            'RESTful API for real-time sentiment prediction',
            'Containerized deployment for scalability'
        ]
    },
    {
        title: 'Sales Dashboard: Enterprise Data Platform',
        description: 'Data Visualization & BI, ELT pipeline',
        bgImage: '/work-4.png',
        link: 'https://github.com/thanhtan2210/Sales_Dashboard',
        slug: 'sales-dashboard',
        longDescription: 'A comprehensive Enterprise Data Platform featuring a robust ELT pipeline and interactive BI dashboards. It provides deep insights into sales performance and customer trends.',
        technologies: ['Python', 'PostgreSQL', 'Streamlit', 'Pandas', 'Docker'],
        features: [
            'Automated ELT pipeline from raw data to storage',
            'Interactive BI Dashboards with real-time updates',
            'Comprehensive data visualization using Matplotlib/Seaborn',
            'Optimized database schema for fast querying'
        ]
    },
    {
        title: 'Power Hub',
        description: 'build an IOT web page',
        bgImage: './PowerHub.png', // Note: keep original relative paths if they work, or use public
        link: 'https://github.com/thanhtan2210/PowerHub',
        slug: 'power-hub',
        longDescription: 'An IoT management platform designed to monitor and control smart power devices. It features real-time data streaming and a responsive user interface for energy consumption tracking.',
        technologies: ['TypeScript', 'C#', '.NET', 'React', 'MQTT'],
        features: [
            'Real-time IoT device monitoring',
            'Energy consumption analytics and reporting',
            'Responsive web interface for mobile and desktop',
            'Secure device authentication and management'
        ]
    },
    {
        title: 'AI agent chess',
        description: 'Machine Learning basic',
        bgImage: './AI_agent.jpg',
        link: 'https://github.com/thanhtan2210/ai-agent-chess',
        slug: 'ai-chess',
        longDescription: 'An AI-powered chess engine built to demonstrate core Machine Learning and Search algorithm concepts. It includes various difficulty levels and an interactive board.',
        technologies: ['Python', 'Minimax', 'Alpha-Beta Pruning', 'Pygame'],
        features: [
            'Minimax algorithm with Alpha-Beta pruning',
            'Interactive graphical user interface',
            'Multiple difficulty levels',
            'Move validation and game state management'
        ]
    },
    {
        title: 'Hotel Management System',
        description: 'Web Development',
        bgImage: './Hotel_managment.png',
        link: 'https://github.com/thanhtan2210/hotel-management-system',
        slug: 'hotel-management',
        longDescription: 'A full-featured management system for hotels, streamlining booking, room management, and guest services. Built with a focus on usability and scalability.',
        technologies: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL'],
        features: [
            'Comprehensive booking and reservation system',
            'Room availability and status tracking',
            'Guest profile and history management',
            'Automated billing and invoice generation'
        ]
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