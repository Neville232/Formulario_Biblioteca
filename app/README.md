# My Node App

This project is a simple user registration application built with Node.js, Express, and MySQL. It allows users to register by filling out a form, which stores their information in a MySQL database.

## Project Structure

```
my-node-app
├── src
│   ├── public
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   └── scripts.js
│   │   └── index.html
│   ├── routes
│   │   └── users.js
│   ├── app.js
│   └── db.js
├── package.json
├── .env
└── README.md
```

## Technologies Used

- Node.js
- Express
- MySQL
- HTML
- CSS
- JavaScript

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-node-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the database:**
   - Create a MySQL database and user.
   - Update the `.env` file with your database connection details:
     ```
     DB_HOST=localhost
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_NAME=your_database_name
     ```

4. **Run the application:**
   ```
   node src/app.js
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` to view the registration form.

## Usage

- Fill out the registration form with your username, email, and password.
- Submit the form to register a new user.
- The user information will be stored in the MySQL database.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.