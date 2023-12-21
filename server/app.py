from flask import Flask,request,jsonify
from helper.main import summarize_topic
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/getSummary', methods=['GET'])
def get_summary():
    # Get the query parameter from the URL
    query = request.args.get('topic')

    # Check if the 'topic' parameter is provided
    if not query:
        return jsonify({'error': 'Missing parameter: topic'}), 400
    
    summary = summarize_topic(query)

    # Perform some operation based on the query (replace this with your logic)
    result = {'summarize_topic': summary}

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
