# Velytrix - API Client

Velytrix is a lightweight and intuitive API client built using Next.js. It enables developers to test APIs effortlessly with features such as dynamic API method selection, request body input and response display. The client also stores previous API calls using SQLite for easy reference.

## Features

- **Send API Requests:**

  - Supports `GET`, `POST`, `PUT`, and `DELETE` methods.
  - Dynamic input fields for API URL and request body.

- **Response Display:**

  - View API responses in a clean and readable format.

- **Stored API Calls:**

  - Automatically stores API calls in an SQLite database.
  - Fetch and display previous API calls for quick reference.

- **Modern Design:**
  - Clean and responsive UI with interactive elements.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/velytrix.git
   cd velytrix
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

### Database Setup

Velytrix uses SQLite to store API call history. The database will be automatically initialized when you run the application for the first time.

To ensure the database is set up correctly:

- Check that a `database.db` file is created in the root of the project after the first run.
- The database schema includes an `api_calls` table to store API request and response data.

## File Structure

```plaintext
velytrix/
├── .prettierrc               # Code formatting rules
├── next.config.mjs           # Next.js configuration
├── components/
│   └── apiClient/
│       ├── ApiClient.module.css  # Styles for the API Client
│       └── ApiClient.js          # API Client React component
├── db.js                     # SQLite database connection and initialization
├── app/
│   ├── api/
│   │   ├── storeApiCall.js   # API route to store API calls
│   │   └── getApiCalls.js    # API route to retrieve stored API calls
│   ├── layout.js             # Main layout for the app
│   └── page.js               # Home page for the API client
├── package.json              # Project dependencies and scripts
├── jsconfig.json             # JavaScript configuration
├── README.md                 # Project documentation
└── database.db               # SQLite database file (generated on first run)
```

## Usage

### Sending an API Request

1. Enter the API URL in the input field.
2. Select the HTTP method (`GET`, `POST`, `PUT`, `DELETE`) from the dropdown.
3. If required, enter the request body in JSON format for `POST` or `PUT` requests.
4. Click the `Send Request` button to execute the API call.
5. View the API response displayed below the form.

### Viewing Stored API Calls

Stored API calls can be accessed from the database and displayed on the client. These calls include:

- URL
- HTTP Method
- Request Body (if any)
- Response
- Timestamp

### Customization

You can customize the API client by editing the following:

- **UI Styling:** Modify `ApiClient.module.css`.
- **Database Schema:** Update the schema in `db.js` to store additional fields.
- **API Routes:** Adjust `storeApiCall.js` and `getApiCalls.js` to handle custom logic.

## Technologies Used

- **Frontend:** React with Next.js
- **Backend:** Node.js and SQLite
- **Styling:** CSS Modules

## Future Improvements

- Add authentication support for API requests.
- Export and import stored API calls.
- Enable request headers customization.
- Add support for additional HTTP methods (e.g., PATCH, OPTIONS).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
