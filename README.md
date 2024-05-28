# MERN Stack TodoList Application

This is a comprehensive TodoList application built using the MERN (MongoDB, Express, React, Node.js) stack. It supports full CRUD (Create, Read, Update, Delete) operations, allowing users to add, update, and delete todos. The application showcases modern web development practices and serves as a solid foundation for building scalable and maintainable web applications.

## Features

- **Add Todo**: Users can add new todos to the list.
- **Update Todo**: Existing todos can be edited to update their content.
- **Delete Todo**: Todos can be removed from the list.
- **Responsive UI**: The application is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.
- **RESTful API**: The backend API is built using Express and follows REST principles.
- **MongoDB**: Utilizes MongoDB for data storage, providing a flexible and scalable NoSQL database.
- **React**: The frontend is built with React, offering a dynamic and interactive user interface.
- **Node.js**: The backend server is powered by Node.js, ensuring efficient handling of asynchronous operations.

## Technologies Used

- **Frontend**:

  - React
  - Axios (for HTTP requests)
  - CSS (for styling)

- **Backend**:
  - Node.js
  - Express
  - MongoDB (via Mongoose)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/mern-todolist.git
   cd MERN-TodoList
   ```

2. **Install dependencies**:

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

   - For the frontend:
     ```bash
     cd ../todo
     npm install
     ```

3. **Set up environment variables**:

   Create a `.env` file in the `backend` directory with the following content:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the application**:

   - Start the backend server:

     ```bash
     cd server
     npm start
     ```

   - Start the frontend development server:
     ```bash
     cd ../frontend
     npm run dev
     ```

   The application should now be running at `http://localhost:3000`.

## Usage

- **Adding a Todo**: Use the input field to type a new todo and press enter or click the "Add" button.
- **Updating a Todo**: Click on a todo to edit its content and press enter to save changes.
- **Deleting a Todo**: Click the "Delete" button next to a todo to remove it from the list.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to customize this description to better fit your project's specifics.
