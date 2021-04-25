cd /D %~dp0cooking
docker build -t cooking-server-standalone --build-arg ENV=dev .