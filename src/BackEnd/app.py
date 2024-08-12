from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pickle
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load the trained model
model_data = pickle.load(open('agriTech_model.pkl', 'rb'))
model = model_data['model']
label_encoder = model_data['label_encoder']
scaler = model_data['scaler']

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array([data['Nitrogen'], data['Phosphorus'], data['Potassium'], 
                         data['Temperature'], data['Humidity'], data['pH_Value'], 
                         data['Rainfall']]).reshape(1, -1)
    features = scaler.transform(features)
    prediction = model.predict(features)
    predicted_crop = label_encoder.inverse_transform(prediction)[0]

    # Path to the image folder
    image_folder = 'insights'
    image_filename = f"{predicted_crop}.png"
    image_path = os.path.join(image_folder, image_filename)

    if os.path.exists(image_path):
        response = {
            'predicted_crop': predicted_crop,
            'image_url': f"/insights/{predicted_crop}"
        }
    else:
        response = {
            'predicted_crop': predicted_crop,
            'error': 'Image not found'
        }

    return jsonify(response)

@app.route('/insights/<crop_name>', methods=['GET'])
def get_image(crop_name):
    image_folder = 'insights'
    image_filename = f"{crop_name}.png"
    return send_from_directory(image_folder, image_filename)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Use PORT from environment if available, else default to 5000
    app.run(host='0.0.0.0', port=port, debug=True)
