FROM node:alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npx create-react-app .
RUN npm install

COPY . ./

# CMD [ "npm", "start" ]
RUN npm run build


# ---- Stage 2: Serve with Nginx ----
FROM nginx:latest

# WORKDIR /usr/share/nginx/html

# Remove default Nginx static files and copy build files
# RUN rm -rf ./*
COPY --from=build /usr/src/app/build ./usr/share/nginx/html

# Copy custom Nginx config
# COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Set non-root user for security
# RUN chmod -R 777 /var/cache/nginx /var/run /var/log/nginx
# USER nginx

# Expose the Nginx port
EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
