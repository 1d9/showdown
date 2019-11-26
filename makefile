src_files = $(shell find components hooks views audio -name "*.js")

dist.zip: web_modules makefile
	zip -r dist.zip index.html index.css index.js hooks views components audio web_modules
web_modules: node_modules
	node_modules/.bin/pika install
node_modules:
	npm i