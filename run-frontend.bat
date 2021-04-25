cd /D %~dp0cooking-web
docker build -t cooking-web-standalone --build-arg ENV=dev .