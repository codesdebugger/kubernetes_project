# FROM nginx:alpine

# COPY ./html /usr/share/nginx/html

# EXPOSE 80



FROM nginx:alpine

# Install curl and unzip
RUN apk add --no-cache curl unzip

# Set working directory
WORKDIR /usr/share/nginx/html

# Download and unzip the Carvilla template into the web root
# RUN curl -L -o carvilla.zip https://www.free-css.com/assets/files/free-css-templates/download/page296/carvilla.zip && \
RUN curl -L -o template.zip https://www.free-css.com/assets/files/free-css-templates/download/page296/healet.zip && \
    unzip template.zip -d temp && \
    cp -r temp/*/* . && \
    rm -rf template.zip temp

# Expose port 80
EXPOSE 80

# Start NGINX (default command is already correct in base image)

