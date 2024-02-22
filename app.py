import subprocess
import time

# Install requests if not already installed
try:
    import requests
except ImportError:
    print("requests library not found. Installing...")
    subprocess.run(["pip", "install", "requests"], check=True)
    import requests

def send_message():
    message = "YOUR BOT HAS BEEN HACKED!!!"
    url = f"https://api.telegram.org/bot7173431479:AAG9huy5YQGtYCemdwUbQJw3avs-zRz4jno/sendMessage?parse_mode=markdown&chat_id=7130934056&text={message}"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        print("Message sent successfully:", response.json())
    except requests.exceptions.RequestException as e:
        print("Error sending message:", e)

# Send the message every 1 second
while True:
    send_message()
    time.sleep(1)  # Sleep for 1 second before sending the next message
