import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder, RobustScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import pickle

# Load dataset
def load_data(file_path):
    return pd.read_csv(file_path)

# Data cleaning
def clean_data(data):
    print(f'Missing values:\n{data.isnull().sum()}')   # Check for missing values
    print('\nDuplicates:', data.duplicated().sum())  # Check for duplicates

# Exploratory Data Analysis
def perform_eda(data):
    print(f'\nNumber of unique values:\n{data.nunique()}\n')  # Check for unique values
    print(data.info())  # Information about the dataset
    print(f'\nStatistical summary:\n{data.describe()}\n')  # Statistical summary

# Preprocessing the data
def preprocess_data(data):
    le = LabelEncoder()
    Y = le.fit_transform(data['Crop'])
    scaler = RobustScaler()
    features = scaler.fit_transform(data.drop('Crop', axis=1))
    return le, scaler, features, Y

# Train the model
def train_model(X, Y):
    xtrain, xtest, ytrain, ytest = train_test_split(X, Y, test_size=0.2, random_state=42)
    rfc = RandomForestClassifier()
    rfc.fit(xtrain, ytrain)
    y_pred = rfc.predict(xtest)
    print(f'Accuracy: {accuracy_score(ytest, y_pred)}\n')
    print(f'Classification Report:\n {classification_report(ytest, y_pred)}')
    cm = confusion_matrix(ytest, y_pred)
    sns.heatmap(cm, annot=True, cbar=True, cmap='Blues', fmt='d')
    plt.xlabel('Predicted values')
    plt.ylabel('True')
    plt.title('Confusion matrix')
    plt.show()
    return rfc

# Save model
def save_model(model, le, scaler, filename):
    with open(filename, 'wb') as file:
        pickle.dump({'model': model, 'label_encoder': le, 'scaler': scaler}, file)

# Main function
def main():
    file_path = 'Crop_Recommendation.csv'
    data = load_data(file_path)
    clean_data(data)
    perform_eda(data)
    le, scaler, X, Y = preprocess_data(data)
    rfc = train_model(X, Y)
    save_model(rfc, le, scaler, 'agriTech_model.pkl')
    print("Model saved successfully!")

if __name__ == "__main__":
    main()
