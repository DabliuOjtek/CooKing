cd /D %~dp0cooking-e2e
docker build -t cooking-e2e .
@REM docker run --name cooking-e2e --network cooking_default cypress/included:7.0.1
docker run --name cypress --network host cooking-e2e .