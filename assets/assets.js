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
import right_arrow_bold from './right-arrow-bold.png';
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
    right_arrow_bold,
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
        challenges: 'Low-volume zones are poorly predicted in relative terms (EWR: WAPE 75–81%). 25.5M FHV trips have no pickup zone and are left out of the mart. A possible double count between yellow and Uber trips was checked on one day only.',
        stats: [
            { value: '376M', label: 'trip records' },
            { value: '263', label: 'taxi zones' },
            { value: '−40%', label: 'MAE vs same-hour-last-week baseline (39.8–40.9%)' },
            { value: '9.6–10.4%', label: 'WAPE (baseline 16.1–17.6%)' }
        ],
        pipeline: [
            { title: 'TLC parquet', note: '376M rows, 4 services' },
            { title: 'DuckDB star schema', note: 'two columns read per file' },
            { title: 'Hourly zone mart', note: '2,688,912 zone-hours' },
            { title: 'XGBoost', note: 'next-hour forecast' },
            { title: 'Streamlit', note: '3 pages' }
        ],
        chart: {
            type: 'pairedBars',
            title: 'MAE per test month (trips per zone-hour, lower is better)',
            caption: 'Test months May–July 2026, each predicted once. Baseline: the same zone at the same hour one week earlier.',
            sourceUrl: 'https://github.com/thanhtan2210/nyc-taxi-demand-forecasting/blob/main/README.md?plain=1#L27-L34',
            sourceLabel: 'README.md, forecast accuracy table',
            data: {
                unit: '',
                series: [
                    { name: 'Same hour last week', role: 'baseline' },
                    { name: 'XGBoost', role: 'main' }
                ],
                groups: [
                    { label: 'May 2026', values: [21.94, 13.00] },
                    { label: 'Jun 2026', values: [22.48, 13.54] },
                    { label: 'Jul 2026', values: [22.44, 13.25] }
                ]
            }
        }
    },
    {
        title: 'Airline Tweet Sentiment Stream',
        description: 'Kafka → Spark → MongoDB, checked tweet by tweet against the offline model',
        bgImage: '/work/sentiment.png',
        link: 'https://github.com/thanhtan2210/realtime-sentiment-streaming',
        slug: 'realtime-sentiment-streaming',
        longDescription: 'A customer-care team wants to see, hour by hour, when the tweets aimed at an airline turn negative, while there is still time to react. Tweets go through Kafka into a Spark Structured Streaming job that labels each one negative, neutral or positive with a TF-IDF + logistic regression model and counts the labels per airline and hour; MongoDB stores both and a Streamlit dashboard reads them. The data is 14,640 labelled tweets about six US airlines from February 2015: the model is trained on the earlier days, and the stream replays the last two, which the model never saw.',
        technologies: ['Python', 'Apache Kafka', 'Spark Structured Streaming', 'MongoDB', 'scikit-learn', 'Streamlit', 'Docker Compose', 'GitHub Actions'],
        features: [
            'Event time in Spark: a 30-minute watermark, deduplication on tweet_id within the watermark and 1-hour windows per airline',
            'Idempotent sinks: predictions are keyed by tweet_id and windows by airline and hour, so a re-run micro-batch overwrites instead of adding',
            'Replay of the 4,196 test tweets: 4,196 predictions, 198 airline-hour windows, 0 rows dropped by the watermark',
            'Model scored once on the last two days; hyper-parameters chosen by time-ordered cross-validation on the training tweets only',
            'Benchmark workflow on GitHub Actions; a pandas_udf scored 10.64 times faster than a row-by-row udf'
        ],
        impact: 'On the 4,196 test tweets the model reaches macro-F1 0.7107 [0.6945, 0.7276] against 0.2555 for always answering "negative", and the stream gives the same label as the offline model for all 4,196 tweets. In a burst of 20,980 tweets on a 2-vCPU GitHub Actions runner the stack handled 1,264.6 tweets per second, with a median of 6.076 s from send to write.',
        challenges: 'The data covers 8 days in 2015 and nothing is connected to Twitter: the stream replays old tweets. Neutral is the weakest class (F1 0.599). For this much data Spark is more machinery than the job needs; it is used to show event time, a watermark and checkpoints. The benchmark is a burst on one runner, not latency at a steady rate.',
        stats: [
            { value: '0.711', label: 'macro-F1 on unseen days (always "negative": 0.256)' },
            { value: '100%', label: 'stream labels match the offline model (4,196 of 4,196)' },
            { value: '1,264.6', label: 'tweets per second in a burst on a 2-vCPU runner' },
            { value: '10.6×', label: 'faster scoring with pandas_udf than a row-by-row udf' }
        ],
        pipeline: [
            { title: 'Replay producer', note: 'test-set tweets' },
            { title: 'Kafka', note: '3 partitions, key = tweet_id' },
            { title: 'Spark Structured Streaming', note: 'pandas_udf model, watermark, 1-hour windows' },
            { title: 'MongoDB', note: 'idempotent upserts by _id' },
            { title: 'Streamlit', note: 'live or replay dashboard' }
        ],
        chart: {
            type: 'intervals',
            title: 'Macro-F1 on the 4,196 test tweets, 95% bootstrap intervals',
            caption: 'Dot: value. Bar: 95% paired-bootstrap interval (1,000 resamples). The test tweets are the last two days, scored once.',
            sourceUrl: 'https://github.com/thanhtan2210/realtime-sentiment-streaming/blob/main/models/metrics.json',
            sourceLabel: 'models/metrics.json',
            data: {
                unit: '',
                digits: 3,
                labelWidth: 132,
                metricHeader: 'Metric',
                rowHeader: 'Classifier',
                axis: { min: 0, max: 0.8, ticks: [0, 0.2, 0.4, 0.6, 0.8], labeled: [0, 0.2, 0.4, 0.6, 0.8], digits: 1 },
                metrics: [
                    {
                        label: 'Macro-F1',
                        rows: [
                            { name: 'TF-IDF + LR', role: 'main', value: 0.7107, low: 0.6945, high: 0.7276 },
                            { name: 'Always "negative"', role: 'baseline', value: 0.2555, low: 0.2519, high: 0.2591 }
                        ]
                    }
                ]
            }
        }
    },
    {
        title: 'Churn Predictor: Leakage Audit and Rebuild',
        description: 'A reported ROC-AUC of 0.999, traced to leakage and rebuilt',
        bgImage: '/work/churn.png',
        link: 'https://github.com/thanhtan2210/automl-churn-prediction',
        slug: 'automl-churn-prediction',
        longDescription: 'An older AutoML churn pipeline reported ROC-AUC 0.999 on IBM Telco. Re-running its protocol one fix at a time showed why: three columns leak the answer (Churn Reason, Churn Score, Churn Label) and SMOTE ran before cross-validation. The rebuilt app profiles every column on the training split and flags likely leaks, tunes one LightGBM with Optuna inside a scikit-learn Pipeline, compares it with a logistic-regression baseline on a test split scored once, and explains each customer\'s risk.',
        technologies: ['Python', 'pandas', 'scikit-learn', 'LightGBM', 'Optuna', 'MLflow', 'FastAPI', 'SQLite', 'Next.js', 'GitHub Actions'],
        features: [
            'Leakage audit of the old protocol, one fix per step: dropping Churn Reason takes test ROC-AUC from 1.000 to 0.980, dropping Churn Score and CLTV takes it to 0.841',
            'On clean features, SMOTE before cross-validation raised the CV AUC from 0.849 to 0.928 while test ROC-AUC stayed at 0.841: it inflated the estimate, not the model',
            'Column profiler measured on the training split only: single-column AUC and missingness flag likely leaks, and flagged columns are unticked by default',
            'Every learned step inside one scikit-learn Pipeline; LightGBM tuned by Optuna on 5-fold CV of the training split',
            'FastAPI + Next.js app (Upload, Profile, Model, Predict) that gives each customer up to three reasons from LightGBM pred_contrib'
        ],
        impact: 'On the held-out test split (95% bootstrap CIs, 1,000 paired resamples): IBM Telco LightGBM ROC-AUC 0.859 [0.837, 0.879] against 0.849 [0.825, 0.870] for logistic regression, a small edge of +0.010 [0.003, 0.017]; UCI Iranian 0.988 [0.978, 0.995] against 0.927 [0.899, 0.949].',
        challenges: 'The Telco test split was already scored during the audit, so it is not pristine. The profiler only catches statistical leakage: it cannot know when a column was recorded. The F1 threshold flags 566 of 1,409 Telco test customers (40%). Neither dataset has dates, so the split is random, and the app runs locally for one user with no deployment.',
        stats: [
            { value: '0.859', label: 'clean IBM Telco test ROC-AUC (old pipeline reported 0.999)' },
            { value: '3', label: 'leaking columns found and removed' },
            { value: '+0.010', label: 'ROC-AUC vs logistic regression (95% CI +0.003 to +0.017)' },
            { value: '0.988', label: 'UCI Iranian test ROC-AUC (logistic regression 0.927)' }
        ],
        pipeline: [
            { title: 'Upload', note: 'CSV/XLSX, duplicates removed, 80/20 split' },
            { title: 'Profile', note: 'training split only, leakage flags' },
            { title: 'LightGBM + Optuna', note: 'one Pipeline, vs LR baseline' },
            { title: 'Test once', note: 'paired bootstrap CIs' },
            { title: 'Predict', note: 'risk and top reasons per customer' }
        ],
        chart: {
            type: 'intervals',
            title: 'ROC-AUC on the held-out test split, 95% bootstrap intervals',
            caption: 'Dot: value. Bar: 95% bootstrap interval (1,000 paired resamples). On Telco the two intervals overlap, but the paired difference, +0.010 [0.003, 0.017], stays above 0.',
            sourceUrl: 'https://github.com/thanhtan2210/automl-churn-prediction/blob/main/README.md?plain=1#L42-L53',
            sourceLabel: 'README.md, clean results table',
            data: {
                unit: '',
                digits: 3,
                labelWidth: 128,
                metricHeader: 'Dataset',
                rowHeader: 'Model',
                axis: { min: 0.8, max: 1, ticks: [0.8, 0.85, 0.9, 0.95, 1], labeled: [0.8, 0.85, 0.9, 0.95, 1], digits: 2 },
                metrics: [
                    {
                        label: 'IBM Telco (1,409 test rows)',
                        rows: [
                            { name: 'LightGBM', role: 'main', value: 0.859, low: 0.837, high: 0.879 },
                            { name: 'Logistic regression', role: 'baseline', value: 0.849, low: 0.825, high: 0.870 }
                        ]
                    },
                    {
                        label: 'UCI Iranian (570 test rows)',
                        rows: [
                            { name: 'LightGBM', role: 'main', value: 0.988, low: 0.978, high: 0.995 },
                            { name: 'Logistic regression', role: 'baseline', value: 0.927, low: 0.899, high: 0.949 }
                        ]
                    }
                ]
            }
        }
    },
    {
        title: 'Movie Recommender MLOps',
        description: 'Monthly retraining with a statistical promotion gate',
        bgImage: '/work/movie.png',
        // Square crop of a 1440x760 screenshot: keeps the registry table from the Version to the Aliases column
        bgPosition: '40% center',
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
        challenges: 'Accuracy costs variety: the champion recommends 439 distinct movies across 1,475 users. Plain PureSVD did not beat popularity at first; the training window did most of the work. Evaluating each month\'s champion over several months is still planned.',
        stats: [
            { value: '1,475', label: 'users in the untouched July 2019 test' },
            { value: '27.7%', label: 'HitRate@10 (popularity 22.4%)' },
            { value: '+0.0121', label: 'NDCG@10 vs popularity (95% CI +0.0044 to +0.0193)' },
            { value: '~5 ms', label: 'median API latency' }
        ],
        pipeline: [
            { title: 'MovieLens on R2', note: 'raw and prepared data' },
            { title: 'Prepare', note: 'time split' },
            { title: 'Gate', note: 'challenger vs champion, 95% CI' },
            { title: 'MLflow registry', note: 'champion alias' },
            { title: 'FastAPI in Docker', note: 'serves the champion' }
        ],
        chart: {
            type: 'intervals',
            title: 'July 2019, 1,475 users, 95% bootstrap intervals',
            caption: 'Dot: value. Bar: 95% bootstrap interval over users (1,000 resamples). July 2019 was not used for any modelling decision.',
            sourceUrl: 'https://github.com/thanhtan2210/movie-recommender-mlops/blob/main/reports/2019-07-01/production.json',
            sourceLabel: 'reports/2019-07-01/production.json',
            data: {
                unit: '%',
                axis: { min: 0, max: 35, ticks: [0, 5, 10, 15, 20, 25, 30, 35] },
                metrics: [
                    {
                        label: 'HitRate@10',
                        rows: [
                            { name: 'Champion', role: 'main', value: 27.7, low: 25.4, high: 30.1 },
                            { name: 'Popularity', role: 'baseline', value: 22.4, low: 20.3, high: 24.5 }
                        ]
                    },
                    {
                        label: 'Long-tail share',
                        rows: [
                            { name: 'Champion', role: 'main', value: 26.5, low: 25.0, high: 27.9 },
                            { name: 'Popularity', role: 'baseline', value: 17.2, low: 16.8, high: 17.6 }
                        ]
                    }
                ]
            }
        }
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
        challenges: 'Confounding: across airlines, the Jet Airways fare without a meal looks dearer, but on the same airline and route it is 3,436 INR cheaper (95% CI 1,830 to 6,132; only 6 groups). April has only 1,078 flights, and airlines with fewer than 30 flights are not analysed.',
        stats: [
            { value: '0.872', label: 'R² on test' },
            { value: '678 INR', label: 'MAE' },
            { value: '78.8%', label: 'inside the 80% range' },
            { value: '+3,038 INR', label: 'median one-stop premium' }
        ],
        pipeline: [
            { title: 'Raw CSV', note: '10,462 fares after cleaning' },
            { title: 'clean_raw + build_features', note: 'one function for train and serving' },
            { title: 'XGBoost price + quantile models', note: 'CQR, 80% price range' },
            { title: 'assess_quote', note: 'cheap, fair or expensive' },
            { title: 'Streamlit app', note: 'predict and assess a quote' }
        ],
        chart: {
            type: 'coverage',
            title: 'Share of test fares inside the 80% price range, by price quartile',
            caption: 'Two XGBoost quantile models calibrated with conformalized quantile regression. Dashed line: 80% target.',
            sourceUrl: 'https://github.com/thanhtan2210/flight-price-prediction/blob/main/models/interval_metrics.json',
            sourceLabel: 'models/interval_metrics.json',
            data: {
                unit: '%',
                target: 80,
                xTitle: 'Test price range (INR)',
                bars: [
                    { from: '1,759', to: '5,192', value: 82.1, n: 525 },
                    { from: '5,192', to: '8,040', value: 74.5, n: 526 },
                    { from: '8,040', to: '11,934', value: 79.4, n: 519 },
                    { from: '11,934', to: '54,826', value: 79.2, n: 523 }
                ]
            }
        }
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