cd /D %~dp0cooking-e2e
docker build -t cooking-e2e .
docker run --name cypress --network cooking_default cooking-e2e .