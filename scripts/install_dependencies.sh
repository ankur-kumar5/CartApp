#!/bin/bash

echo "Installing nginx"

sudo apt update
sudo apt install -y nginx

sudo rm -rf /var/www/html/*
sudo cp -r /var/www/react-app/* /var/www/html/