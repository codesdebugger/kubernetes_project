#!/bin/bash

apt update

apt install docker.io docker-compose -y

sleep 10
systemctl start docker

sleep 10
docker-compose up -d
