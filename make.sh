#!/bin/bash

sudo mkdir ./log
sudo touch ./log/mongod.log
sudo chmod 777 ./log/*
./docker-compose up -d
