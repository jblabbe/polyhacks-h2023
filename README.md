# polyhacks-h2023

Clone the repo

``git clone git@github.com:jblabbe/polyhacks-h2023.git``

Navigate into cloned directory

``cd polyhacks-h2023``

## Client setup

Create python venv

``cd api/ && python -m venv venv``

Activate the virtual environment

``venv/Scripts/activate``

Install the server dependencies

``pip install -r requirements.txt``

## Server setup

Navigate back to the root of the repo

``cd ..``

Install the client dependencies

``npm ci``

## Start the server

In a first terminal start the server

``npm serve``

## Start the client

In a second terminal start the client

``npm start``

The setup should be done. The server run on localhost:5000 and the client on localhost:3000
