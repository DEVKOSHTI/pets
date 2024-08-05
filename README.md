Pet Listing Website
A React.js-based Pet Listing website with error handling, state management, ESLint, and Vite.

Features
List pets with details
Search pets by animal type, location, and breed
Error handling and loading states
Responsive design
Project Setup
Initialize Project

Create a new Vite project with React template.
Navigate to the project directory.
Install necessary dependencies.
Set Up ESLint and Prettier

Install ESLint, Prettier, and related plugins.
Vite Configuration

Configure Vite in vite.config.js with React plugin.
Project Structure
```bash
pets/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── PetDetails.jsx
│   │   ├── PetList.jsx
│   │   └── SearchForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── PetDetailsPage.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.js
├── .prettierrc
├── package.json
└── vite.config.js
APIs Used
List of Pets: http://pets-v2.dev-apis.com/pets
Pets by ID: http://pets-v2.dev-apis.com/pets?id=${id}
Breed by Animal Type: http://pets-v2.dev-apis.com/breeds?animal=${animal}
Search API: http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
State Management
Used useState, useEffect, and useContext hooks.
No global state management library used for simplicity.
Error Handling
ErrorBoundary component for catching errors.
Error handling in API calls.
Routing
Used react-router-dom for navigation.
Fetching Data
Service layer in services/api.js for API calls using axios.
Loading and error states implemented.
How to Run
Clone the repository.
Navigate to the project directory.
Install dependencies.
Start the development server.
Open your browser and navigate to http://localhost:3000.
Contributing
Contributions are welcome! Please submit a Pull Request.
