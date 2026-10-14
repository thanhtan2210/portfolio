import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
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
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import python from './python.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
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
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    python
};

export const workData = [
    {
        title: 'NYC Taxi Demand Forecasting',
        description: 'Next-hour pickups for 263 zones from 376M trip records',
        bgImage: '/work/nyc.png',
        link: 'https://github.com/thanhtan2210/nyc-taxi-demand-forecasting',
        demoLink: 'https://nyc-taxi-demand-forecasting-t.streamlit.app/',
        slug: 'nyc-taxi-demand-forecasting',
        longDescription: 'A fleet dispatcher or a transport agency wants to know, one hour ahead, how many rides will be picked up in each of the 263 NYC taxi zones. DuckDB reads 376 million public TLC trip records from four services (yellow, green, FHV and high-volume FHV, June 2025 – July 2026) straight from the TLC URLs, builds a star schema and an hourly zone mart, and one global XGBoost model forecasts the next hour from lagged demand and calendar features.',
        technologies: ['Python', 'DuckDB', 'SQL', 'XGBoost', 'Streamlit', 'GitHub Actions'],
        features: [
            'Star schema in DuckDB that reads only two columns of each parquet file over HTTP',
            'Data-quality accounting for every file: 350.8M of 376.4M trips (93.2%) could be placed on a zone',
            'Leakage check: lag features recomputed independently in SQL; removing the short-term lags raises validation WAPE from 9.4% to 11.3%',
            'Three-page Streamlit app: Overview, Patterns and Forecast',
            'GitHub Actions workflow, started by hand, that rebuilds one month from the TLC files and compares it with the committed data'
        ],
        impact: 'On three held-out months (May–July 2026) XGBoost lowers MAE by 39.8% to 40.9% against a same-hour-last-week baseline (for example 22.44 → 13.25 trips per zone-hour in July), with WAPE 9.6–10.4% against 16.1–17.6%. Intervals come from a paired block bootstrap over days.',
        challenges: 'Low-volume zones are poorly predicted in relative terms (EWR: WAPE 75–81%). 25.5M FHV trips have no pickup zone and are left out of the mart. A possible double count between yellow and Uber trips was checked on one day only.'
    },
    {
        title: 'Movie Recommender MLOps',
        description: 'Monthly retraining with a statistical promotion gate',
        bgImage: '/work/movie.png',
        link: 'https://github.com/thanhtan2210/movie-recommender-mlops',
        slug: 'movie-recommender-mlops',
        longDescription: 'MovieLens 25M, split by time. A truncated SVD of the user × movie "liked" matrix, blended with recent popularity, is compared with popularity alone. One command runs a monthly cycle: prepare the data, compare challenger and champion on the last 30 days of training data, promote only if the challenger is better with 95% confidence, refit the winner, register it in MLflow and score it on the following 30 days. The champion is served by FastAPI in a Docker image.',
        technologies: ['Python', 'scikit-learn', 'MLflow', 'DagsHub', 'Cloudflare R2', 'FastAPI', 'Docker', 'GitHub Actions'],
        features: [
            'Promotion gate: the challenger replaces the champion only if the lower bound of the 95% interval of the NDCG@10 difference is above 0',
            'MLflow on DagsHub: runs, metrics with interval bounds and a model registry with a champion alias',
            'Raw and processed data on Cloudflare R2',
            'Docker image that holds the model and no credentials'
        ],
        impact: 'On July 2019, a month no modelling decision had looked at: HitRate@10 27.7% against 22.4% for popularity, NDCG@10 0.0831 against 0.0711 (paired difference +0.0121, 95% CI [+0.0044, +0.0193], 1,475 users). The API answers in about 5 ms (median, measured from the client).',
        challenges: 'Accuracy costs variety: the champion recommends 439 distinct movies across 1,475 users. Plain PureSVD did not beat popularity at first; the training window did most of the work. Evaluating each month\'s champion over several months is still planned.'
    },
    {
        title: 'Flight Price Prediction & Quote Assessment',
        description: 'Is this fare cheap, fair or expensive?',
        bgImage: '/work/flight.png',
        link: 'https://github.com/thanhtan2210/flight-price-prediction',
        demoLink: 'https://flight-price-prediction-t.streamlit.app/',
        slug: 'flight-price-prediction',
        longDescription: 'A travel-agency employee holds a quote for a domestic flight in India and needs to know whether the price is cheap, fair or expensive compared with similar flights. A case study on 10,462 fares for March–June 2019 on five routes: one preprocessing function feeds an XGBoost price model and two quantile models that give a calibrated 80% price range, and price comparisons hold airline, route and stops constant.',
        technologies: ['Python', 'pandas', 'XGBoost', 'Conformalized quantile regression', 'Streamlit'],
        features: [
            'One feature function shared by training and serving, which fixed a bug in the old CLI that always predicted with a flight duration of 0; a test checks that both paths give the same features',
            'Duplicates removed before the split; outlier fences learned on the training set only',
            'Model chosen by 5-fold cross-validation; the test set is used once',
            '80% price range from two XGBoost quantile models calibrated with conformalized quantile regression'
        ],
        impact: 'R² 0.872 and MAE 678 INR on a hold-out test set; the 80% price range contains 78.8% of test prices. On the same airline and route, a one-stop flight cost a median 3,038 INR more than a non-stop one (95% CI 964 to 4,410; 10 groups).',
        challenges: 'Confounding: across airlines, the Jet Airways fare without a meal looks dearer, but on the same airline and route it is 3,436 INR cheaper (95% CI 1,830 to 6,132; only 6 groups). April has only 1,078 flights, and airlines with fewer than 30 flights are not analysed.'
    }
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages & Tools', description: 'Python, SQL, DuckDB, XGBoost, MLflow, Docker' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc. Computer Science, HCMUT (2022–2027)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: 'Backend Developer Intern, MyTegami.win (2025)' }
];

export const toolsData = [
    assets.vscode, assets.git, assets.python
];