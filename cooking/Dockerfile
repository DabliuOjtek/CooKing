FROM gradle:6.8.3-jdk11 AS builder
COPY --chown=gradle:gradle . /app
WORKDIR /app
RUN gradle build

FROM openjdk:11-jre-slim
COPY --from=builder app/build/libs/*.jar cooking.jar
CMD ["java", "-jar", "cooking.jar"]
