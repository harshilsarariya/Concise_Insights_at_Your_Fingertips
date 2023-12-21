import torch
from transformers import BartForConditionalGeneration, BartTokenizer
import requests
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Load the pre-trained BART model and tokenizer
model_name = "facebook/bart-large-cnn"
model = BartForConditionalGeneration.from_pretrained(model_name)
tokenizer = BartTokenizer.from_pretrained(model_name)

# Function to generate summary using the BART model
def generate_summary(text):
    inputs = tokenizer.encode("summarize: " + text, return_tensors="pt", max_length=1024, truncation=True)
    summary_ids = model.generate(inputs, max_length=250, length_penalty=2.0, min_length=75, num_beams=4, early_stopping=True)

    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary

# Step 1: Fetch News Data from News API
api_key = os.getenv('NEWS_API_KEY')
news_api_url = 'https://newsapi.org/v2/everything'

def fetch_news_data(topic):
    try:
        response = requests.get(news_api_url, params={'q': topic, 'apiKey': api_key})
        response.raise_for_status()

        # Extract relevant data from the response
        articles = [{'title': article['title'], 'description': article['description'], 'url': article['url']} for article in response.json()['articles']]
        return articles
    except requests.exceptions.RequestException as e:
        print(f"Error fetching news data: {e}")
        raise

def summarize_topic(topic):
    # Example usage
    lang_chain_input_topic = topic 
    news_data = fetch_news_data(lang_chain_input_topic)

    # Concatenate text from all news articles
    all_text = ". ".join([f"{article.get('title', '')}. {article.get('description', '')}" for article in news_data])

    # Generate summary for all concatenated text
    combined_summary = generate_summary(all_text)

    return combined_summary

