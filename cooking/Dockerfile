FROM gradle:6.8.3-jdk11 AS builder
ARG ENV
COPY --chown=gradle:gradle . /app
WORKDIR /app
RUN gradle build -Pspring.profiles.active=$${ENV}

FROM openjdk:11-jre-slim
COPY --from=builder app/build/libs/*.jar cooking.jar
CMD ["java", "-jar", "-Dspring.profiles.active=$${ENV}", "cooking.jar"]
