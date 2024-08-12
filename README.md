
# AgriTech
A project completed during Intel® Unnati Industrial Training Program 2024.

## Introduction
In today's data-centric world, organizations face the challenge of not only storing vast amounts of structured data but also extracting meaningful insights to drive decision-making. This project aims to address this challenge by developing an AI-based solution capable of effectively analyzing and interpreting structured data.

### Objectives
1. **Represent Knowledge:** Use advanced techniques to structure and highlight critical information and relationships within the data.
2. **Generate Insights:** Analyze the data to identify patterns, trends, and anomalies, offering valuable insights that are not easily recognized through manual analysis.
3. **Aid Decision-Making:** Present the generated insights in a user-friendly manner to enable stakeholders to make informed decisions based on accurate and comprehensive data analysis.

### Team Members
- Vishawjeet Singh
- Manjot Kaur
- Parmeet Kaur
- Arshdeep Singh
- Ratanveer Singh

### Dataset Description
**Source:** [Kaggle Crop Recommendation Dataset](https://www.kaggle.com/datasets/varshitanalluri/crop-recommendation-dataset)
### Methodology
- **Data Cleaning:** Ensured no missing values or duplicates.
- **EDA:** Visualized data distribution and relationships.
- **Preprocessing:** Label encoding and feature scaling.
- **Model Training:** Random Forest Classifier, evaluated with accuracy scores, and tuned with RandomizedSearchCV.

### Tools Used
- **Libraries:** Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn,
- **Platforms:** Google Colab, Next.js, Flask, Vercel

### Results
- High accuracy in crop prediction.
- Visualizations: Histograms, boxplots, heatmaps, bar plots, and confusion matrix.
- Insights on optimal crop conditions and critical features.
- Predict best crop according to user soil and weather conditions.

## Run App on your computer
Simply visit **https://agritechai.vercel.app/** or follow following methods to run app on your computer.
### Backend (Flutter)
- Open folder **/src/Backend** in your code editor.
- Create new python environment:
    ##### ***python -m venv env***
- Activate environmet by command:
    ##### ***.\env\Scripts\activate***
- Install required packages or Scripts:
    ##### ***pip install -r .\requirements.txt***
- Run Flask backend using command"
    ##### ***flask --app app run***

### FrontEnd (Next JS)
- Install Node js on your machine. https://nodejs.org/en
- Open folder **/src/FrontEnd** in your code editor.
- In terminal run follwing commands:
    ##### ***npm install***
- In file **/src/FrontEnd/configurations/address.ts**, Replace "https://agritechbackendflask.onrender.com" with "http://127.0.0.1:5000".
- Run your app with command:
    ##### ***npm run dev***





