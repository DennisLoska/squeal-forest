# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB=squeal_forest
ENV POSTGRES_USER=prince_charming
ENV POSTGRES_PASSWORD=rapunzel_let_down_your_hair

# Copy initialization scripts
COPY src/init.sql /docker-entrypoint-initdb.d/

