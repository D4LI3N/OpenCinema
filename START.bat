@echo off
start mongod
timeout /t 5
start node server
start ng serve --open --host 0.0.0.0