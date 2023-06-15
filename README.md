# User Card Grid Web Application

This is a simple web application that displays user information in a card grid layout. It retrieves user data from an API and renders it in the UI. The application is built using React.
## Features

- User card grid layout with a navbar displaying the brand name "Tech Sourav".
- "Get Users" button in the navbar to fetch user data from an API.
- Loader displayed while the API fetches data.
- Custom styling using CSS-in-JS with styled components.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/SOURAV416/user-card-grid.git


2. Navigate to the project directory:
   
   ```shell
   cd user-card-grid
   
   
3. Install the dependencies:
   
   ```shell
   npm install

## Usage

1. Start the development server:
   
   ```shell
   npm start

2. Open your web browser and visit http://localhost:3000 to view the application.

3. Click the "Get Users" button in the navbar to fetch user data from the API and display it in the UI. While the data is being fetched, a loader will be displayed to indicate the loading state.


## API Integration

The application integrates with the following API endpoint to fetch user data:

- Endpoint: https://reqres.in/api/users?page=1
- Method: GET

When the "Get Users" button is clicked, an API call is made to the above endpoint to retrieve user data. The application uses the axios library to handle the HTTP request. Upon receiving the response, the user data is displayed in the UI.


## Loader

While the API is fetching the user data, a loader is displayed to provide visual feedback to the user. The loader is a GIF image(../src/assets/loder.gif) displayed on the place of "Get User" button. It shows a custom loader animation to indicate that the data is being fetched.

To customize the loader animation. Replace the src/assets/loader.gif file with your own GIF file. Make sure the file is named loader.gif.

If an error occurs during the API call, an error message will be logged to the console, and the loader will disappear.


## Favicon
The application uses a favicon, which is the small icon displayed in the browser tab. The favicon can be customized to match your brand or application. To replace the default favicon:

Replace the public/favicon.ico file with your own favicon file. The favicon file should be in .ico format.


## Hosted on Netlify
Successfully hosted on Netlify. 
Link: https://sourav-user-card-grid.netlify.app/


## Time 
The time taken to complete this assignment is 1 day.


























