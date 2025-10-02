import subprocess
import webbrowser
import time

subprocess.Popen(["python", "api.py"])
time.sleep(2)
webbrowser.open("index.html")


