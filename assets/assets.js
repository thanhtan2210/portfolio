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
        title: 'Scalable Customer Data Platform (CDP) — v2',
        description: 'Decoupling data logic from model code to build truly reusable ML infrastructure.',
        bgImage: '/work-3.png',
        link: 'https://github.com/thanhtan2210/Scalable-Customer-Data-Platform-CDP',
        slug: 'scalable-cdp',
        longDescription: 'Most ML pipelines are built as "one-offs" for specific datasets, making them fragile and hard to scale. After achieving a 263x ROI with a hardcoded v1 pipeline, I am rebuilding the system into a generic, schema-agnostic platform that can ingest any tabular data and automatically generate production-ready insights.',
        technologies: ['Python', 'FastAPI', 'Optuna', 'MLflow', 'Supabase', 'Cloudflare R2', 'Pandera', 'Docker', 'Airflow', 'Streamlit'],
        features: [
            'Generic Profiling Engine: 3-layer profiling system (Statistical, Semantic, and LLM-based)',
            'Automated Feature Engineering: Transform Registry and schema validation using Pandera',
            'AutoML Orchestration: Integrated Optuna for hyperparameter optimization and MLflow tracking',
            'Cloud-Native Storage: Cloudflare R2 for artifacts and Supabase for metadata management'
        ],
        impact: '93.5% Accuracy & 0.99 ROC-AUC on Telco churn (v1 baseline); Estimated 263x ROI; Integrated A/B Testing service.',
        challenges: 'Handling edge cases in "dirty" CSVs. Learned that robust schema validation (Pandera) is more critical for production stability than the ML model itself.'
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
        ],
        impact: '40%+ reduction in processing latency; Robust data governance implemented.',
        challenges: 'Managing real-time data consistency and handling malformed source data at scale.'
    },
    {
        title: 'Big Data MLOps Movie Recommender System',
        description: 'Moving beyond black-box recommendations with Explainable AI and high-scale vector search.',
        bgImage: '/work-5.png',
        link: 'https://github.com/thanhtan2210/Big-Data-MLOps-System',
        slug: 'movie-mlops',
        longDescription: 'Standard recommendation systems often fail the "Why?" test—they suggest items but cannot explain the reasoning. I built a system that combines the speed of vector search (LanceDB) with the reasoning capabilities of LLMs (Llama-3.3) to provide personalized, explainable recommendations at scale.',
        technologies: ['Python', 'LanceDB', 'SentenceTransformer', 'Groq (Llama-3.3-70b)', 'RAG', 'Streamlit', 'Cloudflare R2', 'MLflow'],
        features: [
            'Latent Space Enhancement: Injected [Quality] tokens and ratings into text descriptions before encoding',
            'Pseudo-Tower Personalization: Weighted-average vector calculations for personalized results without complex servers',
            'Hybrid Reranker: Custom scoring logic (60% Similarity + 30% Popularity + 10% Quality)',
            'Zero-Downtime Fallback: Smart router falls back from Groq (LLM) to local LanceDB search during rate limits'
        ],
        impact: 'Processed 25M records from MovieLens; Deployed production-grade RAG system on zero-cost infrastructure.',
        challenges: 'Balancing LLM latency with vector search speed. Learned to use Function Calling to make LLMs act as intelligent routers.',
        demoLink: 'https://huggingface.co/spaces/thanhtanphan/ai-movie-resys'
    },
    {
        title: 'NYC Taxi Data Warehouse & Decision Support System',
        description: 'Architecting high-performance data foundations to turn millions of raw trips into urban mobility insights.',
        bgImage: '/work-6.png',
        link: 'https://github.com/thanhtan2210/DW-and-DSS-for-Travel-Demand-Predicttion',
        slug: 'nyc-data-warehouse',
        longDescription: 'Real-world data is often messy, fragmented, and siloed. This project demonstrates a full end-to-end Data Engineering lifecycle: ingesting millions of NYC Taxi records, restructuring them into an optimized Star Schema, and serving predictive analytics for city planning.',
        technologies: ['Python', 'BigQuery', 'Polars', 'Star Schema', 'XGBoost', 'Random Forest', 'LSTM', 'Streamlit', 'Power BI'],
        features: [
            'Star Schema Optimization: Designed Fact_Trips (~50 columns) and Fact_Demand_Hourly feature store',
            'High-Performance ETL: Built a pipeline using Polars for Parquet processing and BigQuery warehouse',
            'Hybrid Predictive Modeling: Developed and compared XGBoost, Random Forest, and LSTM models',
            'Decision Support System (DSS): Streamlit web app and Power BI OLAP dashboard for visualization'
        ],
        impact: 'Reduced analytical query time by 60%; Created a unified source of truth for automated ML feature syncing.',
        challenges: 'Managing millions of records required moving from Pandas to Polars. Data architecture (Star Schema) is as critical as the algorithm.'
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