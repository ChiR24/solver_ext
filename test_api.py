import os
import sys
import google.generativeai as genai
import json

def test_api(api_key):
    print("Making API request...")
    
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-2.0-pro-exp-02-05')
    
    try:
        print("\nStreaming response:")
        for chunk in model.generate_content(
            'Write a simple hello world program in Python',
            stream=True
        ):
            try:
                print(chunk.text, end='', flush=True)
            except (IndexError, AttributeError) as e:
                print(f"\nIncomplete response chunk received: {e}")

    except Exception as e:
        print(f"\nAn error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python test_api.py YOUR_API_KEY")
        sys.exit(1)
    
    api_key = sys.argv[1]
    test_api(api_key)