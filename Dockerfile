# FROM nginx:alpine

# COPY ./html /usr/share/nginx/html

# EXPOSE 80



FROM nginx:alpine

# Install curl and unzip
RUN apk add --no-cache curl unzip

# Set working directory
WORKDIR /usr/share/nginx/html

# Download and unzip the Carvilla template into the web root
RUN curl -L -o carvilla.zip https://www.free-css.com/assets/files/free-css-templates/download/page296/carvilla.zip && \
    unzip carvilla.zip && \
    cp -r carvilla-v1.0/* . && \
    rm -rf carvilla.zip carvilla-v1.0

# Expose port 80
EXPOSE 80

# Start NGINX (default command is already correct in base image)
