# WanderNotes

WanderNotes - Travel Note-Taking Application\
WorldWise is an application that allows users to document their travel history and notes. Users can view, add, and modify their travel experiences, with data being stored in a cities.json file that serves as a mock API.

### Features

Create, update, and display travel notes.\
Fetch data from a JSON file and update it based on user actions.\
Responsive UI for a seamless experience.\
Vite for frontend development.\
Mock API with JSON for data storage.

### Getting Started

Follow these instructions to set up the project locally.\

### Prerequisites

Ensure that you have the following installed on your system:

Node.js (v14 or higher)\
Vite\
npm

### Installation

### Clone the Repository

Clone this repository to your local machine using the following command:\

### git clone https://github.com/Manisha01407/WanderNotes.git

### Navigate to the Project Directory

Move into the project folder:\
cd worldwise

### Install Dependencies

Install the necessary packages by running:\
npm install

### Running the Application

To run the application locally, follow these steps:

### Start the JSON Server

The application uses a cities.json file located in the data folder as a mock API. Start the JSON server with:\

### npm run server

By default, this will start a local server at http://localhost:9000 that serves the cities.json file, allowing the application to fetch and modify travel history data.

### Start the Vite Development Server

This command will launch the Vite development environment and serve your frontend UI.\

### npm run dev

By default, this will start the development server on http://localhost:5173/.

### Open the Application

Once both servers are running, open your browser and navigate to:\
http://localhost:5173\
This will load the WanderNotes application.

### Usage

Add New Travel Notes: Click the 'Add' button to input new travel details.\
Modify Notes: Select a travel note and update the necessary information.\
View Travel History: All your travel logs will be displayed in the UI, fetched from the cities.json file.

### JSON API\

The mock API is powered by a cities.json file located in the data/ directory. This file contains all travel notes and is modified based on user actions.\

Example data format:
{
"cities": [
{
"id": "183c",
"cityName": "Hyderabad",
"country": "India",
"emoji": "🇮🇳",
"date": "2024-08-19T11:25:17.866Z",
"notes": "home town",
"position": {
"lat": "17.326382250035145",
"lng": "78.48644835223865"
}
},
{
"id": "7432",
"cityName": "Hassi Messaoud",
"country": "Algeria",
"emoji": "🇩🇿",
"date": "2024-09-21T01:46:39.092Z",
"notes": "good to see this",
"position": {
"lat": "31.18077216847759",
"lng": "6.50390625"
}
}
]
}

### Scripts

npm run dev: Starts the Vite development server on http://localhost:5173/.\
npm run server: Starts the JSON server on http://localhost:9000/ to serve cities.json.\
