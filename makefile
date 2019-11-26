dist.zip: web_modules
	zip dist.zip index.html index.css index.js hooks/* views/* components/* audio/*
web_modules: node_modules
	node_modules/.bin/pika install
node_modules:
	npm i