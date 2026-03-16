#!/bin/bash
cd /var/www/react-app
echo "Resetting local changes..."
git reset --hard HEAD

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Restarting server..."
sudo systemctl restart nginx