import os
import openai 

client = OpenAI(
    api_key = os.getenv('210620'),
)
response = client.audio.speech.create(
    model = 'tts-1',
    voice = 'alloy',
    input ='cavalo'
)
response = write_to_file('speech.mp3')
