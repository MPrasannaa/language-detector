from flask import Flask, request, jsonify
from flask_cors import CORS
from langdetect import detect
import pycountry

app = Flask(__name__)
CORS(app)

def get_language_name(code):
    try:
        language = pycountry.languages.get(alpha_2=code)
        return language.name
    except:
        return "Unknown"

@app.route('/detect', methods=['POST'])
def detect_language():
    data = request.json
    text = data.get('text', '')
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    lang_code = detect(text)
    language = get_language_name(lang_code)
    return jsonify({'language': language})

if __name__ == '__main__':
    app.run(debug=True)
