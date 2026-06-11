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
        description: 'Data Engineering, MLOps, 50M User Target',
        bgImage: '/work-3.png',
        link: 'https://github.com/thanhtan2210/Scalable-Customer-Data-Platform-CDP',
        slug: 'scalable-cdp',
        longDescription: 'A high-performance Customer Data Platform designed to process and analyze data for up to 50 million users. It implements advanced ETL workflows, automated data cleaning, and schema normalization to ensure data quality (SLA). The system integrates MLflow for experiment tracking and FastAPI for serving predictive models like churn analysis.',
        technologies: ['Python', 'Docker', 'FastAPI', 'MinIO', 'MLflow', 'Streamlit', 'Parquet'],
        features: [
            'Optimized for 50M user scale processing',
            'Automated data cleaning and SLA validation',
            'Unified CLI for project lifecycle management',
            'ML Lifecycle tracking with MLflow',
            'Hybrid Execution (Docker or Local Mode)'
        ]
    },
    {
        title: 'Real-time Sentiment Analysis Pipeline',
        description: 'Big Data, Spark Streaming, Kafka',
        bgImage: '/work-4.png',
        link: 'https://github.com/thanhtan2210/Sentiment-Analysis-System',
        slug: 'sentiment-analysis',
        longDescription: 'An industrial-grade sentiment analysis pipeline designed for real-time social media monitoring. Built with a decoupled architecture, it uses Kafka for data ingestion and Apache Spark Streaming for vectorized inference. It achieves 40%+ reduction in processing latency through optimized data structures and runtime schema validation with Pydantic.',
        technologies: ['Python', 'Apache Spark', 'Kafka', 'HuggingFace', 'FastAPI', 'Docker'],
        features: [
            'Real-time vectorized inference with Spark Streaming',
            '40%+ reduction in processing latency',
            'Robust data governance with Pydantic validation',
            'Scalable Kafka-based ingestion layer',
            'Decoupled, modular architecture for fault tolerance'
        ]
    },
    {
        title: 'Movie Recommendation MLOps System',
        description: 'MLOps, RAG, LLM, Groq, Vector Search',
        bgImage: '/work-5.png',
        link: 'https://github.com/thanhtan2210/Big-Data-MLOps-System',
        slug: 'movie-mlops',
        longDescription: 'An end-to-end MLOps pipeline for personalized movie recommendations using RAG architecture. Features a multi-stage retrieval system with vector search and a Pseudo-Tower reranker for precision optimization. Integrates an LLM Agent powered by Groq/Llama-3.3-70B for natural language interaction. Full ML lifecycle tracked via MLflow, with data stored on DagsHub and Cloudflare R2. Deployed as an interactive Streamlit app on Hugging Face Spaces.',
        technologies: ['Python', 'RAG', 'Groq', 'Llama-3.3-70B', 'MLflow', 'DagsHub', 'Cloudflare R2', 'Streamlit', 'HuggingFace'],
        features: [
            'Multi-stage retrieval system with vector search',
            'Pseudo-Tower reranker for precision optimization',
            'LLM Agent powered by Groq/Llama-3.3-70B',
            'MLflow lifecycle tracking',
            'DagsHub + Cloudflare R2 scalable storage',
            'Interactive Streamlit + Hugging Face deployment'
        ]
    },
    {
        title: 'NYC Data Warehouse & DSS',
        description: 'Data Warehouse, BigQuery, Star Schema, XGBoost',
        bgImage: '/work-6.png',
        link: 'https://github.com/thanhtan2210/DW-and-DSS-for-Travel-Demand-Predicttion',
        slug: 'nyc-data-warehouse',
        longDescription: 'A production-grade data warehouse for NYC travel demand prediction, built on Google BigQuery using Kimball star schema methodology. Features a Polars-based ETL pipeline processing multi-source NYC datasets, OLAP-optimized fact/dimension tables, and an XGBoost forecasting model achieving R²=0.96. Includes lag features, cyclical time encoding, and model comparison across XGBoost, Random Forest, and LSTM.',
        technologies: ['Python', 'Polars', 'BigQuery', 'XGBoost', 'Kimball Modeling', 'OLAP', 'dbt'],
        features: [
            'Kimball star schema design for OLAP optimization',
            'Polars-based high-performance ETL pipeline',
            'R²=0.96 accuracy with XGBoost forecasting',
            'OLAP-optimized fact and dimension tables',
            'Multi-model comparison (XGBoost, Random Forest, LSTM)',
            'Lag features and cyclical time encoding'
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
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages & Tools', description: 'Python, SQL, Polars, Airflow, BigQuery, MLflow' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 5+ data engineering and MLOps projects' }
];

export const toolsData = [
    assets.vscode, assets.aws, assets.mongodb, assets.git, assets.python
];