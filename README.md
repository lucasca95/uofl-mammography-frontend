# Backend: Mammography analysis
This project consists of the implementation of a web image processing and analysis service provided by the University of Louisville.

This repository contains the code corresponding to the web server that will serve an user, attending their requests, allowing them to upload images that are the result of mammograms, either in .dcom or .png format, to be processed by the work team of the Research and Innovation Laboratory of the University of Louisville Speed School of Engineering.

The system will assign a transaction code to the user once an image is accepted for processing. Using the same code, the user will be able to check the results as soon as they are ready. The sending of an e-mail could be a good way to let the user know an image's result is ready to be seen.

The web application is developed with JavaScript, using the React library.


## Backend project repository
[Check the backend](https://github.com/lucasca95/uofl-mammography-backend)

## Quick start

--- Create/modify .env to have correct environment variable values

--- Install node modules listed in package.json
```bash
npm install
```

--- Start server
```bash
npm start
```
