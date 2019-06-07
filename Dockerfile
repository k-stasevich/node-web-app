# Use an official Python runtime as a parent image
FROM node:10.16.0-jessie

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY /server /app
COPY .eslintrc /

RUN npm run lint
RUN npm i

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World
# Set proxy server, replace host:port with values for your servers
ENV http_proxy host:port
ENV https_proxy host:port

# Run app.py when the container launches
CMD ["npm", "run", "dev"]