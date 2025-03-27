# 🚀 User Management App (React + API)

## 📌 Description
This project is a simple React application that integrates with a local API (`order-management-api`), which is already available in one of my GitHub repositories. The application allows users to register, list, and delete users by interacting with the API.

## ✨ Features
- **📝 User Registration:** Users can enter their name and age, then submit the form to store the data via a `POST` request.
- **📋 User Listing:** Fetch and display all users stored in the API through a `GET` request.
- **🗑️ User Deletion:** Remove users from the list with a `DELETE` request.
- **🔄 Navigation:** Seamless navigation between the registration page and the user list page using `react-router-dom`.

## 🛠️ Tech Stack
- **⚛️ React** (Hooks: `useState`, `useEffect`, `useRef`, `useNavigate`)
- **🔗 Axios** (for handling API requests)
- **🛤️ React Router** (for navigation)
- **🎨 Styled Components** (for styling)

## ⚙️ Installation and Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/CamilleGS/react-studies.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react-studies
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Ensure the `order-management-api` is running locally on `http://localhost:3001`.
   If you haven't cloned it yet, you can find it in my GitHub repository: [order-management-api](https://github.com/CamilleGS/order-management-api)
5. Start the React app:
   ```sh
   npm start
   ```

## 🔍 Usage
1. Open `http://localhost:3000` in your browser.
2. Add a new user by entering a name and age, then clicking the "Cadastrar" button.
3. Navigate to the users list to view all registered users.
4. Delete a user by clicking the trash icon.

## 📜 License
This project is open-source and available under the MIT License.

