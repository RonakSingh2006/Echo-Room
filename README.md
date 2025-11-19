# 📢 Echo Room

Echo Room is a real-time chat application that allows users to create and join specific chat rooms. Built with a **Spring Boot** backend and a **React (Vite)** frontend, it utilizes **WebSockets** for instant messaging and **MongoDB** for persistence.

## 🚀 Features

* **Real-time Messaging:** Instant message delivery using WebSocket (Stomp & SockJS).
* **Room Management:** Users can create new unique rooms or join existing ones.
* **Chat History:** Messages are persisted in MongoDB, allowing users to see previous conversations upon joining.
* **Modern UI:** Responsive design built with React and Tailwind CSS (Dark Mode enabled).
* **User Feedback:** Interactive notifications (Toasts) for connection status and errors.

## 🛠️ Tech Stack

### Backend
* **Language:** Java 21
* **Framework:** Spring Boot 3.5.4
* **Database:** MongoDB
* **Communication:** WebSocket (STOMP protocol), REST API
* **Build Tool:** Maven

### Frontend
* **Framework:** React 19 (Vite)
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios
* **WebSocket Client:** SockJS-client, @stomp/stompjs
* **Routing:** React Router

---

## ⚙️ Prerequisites

Ensure you have the following installed:
1.  **Java Development Kit (JDK) 21**
2.  **Node.js** (v18 or higher)
3.  **MongoDB** (Running locally on port `27017` or a cloud URI)

---

## 🏃‍♂️ Getting Started

### 1. Backend Setup (`chat-backend`)

The backend handles room logic, persistence, and WebSocket connections.

1.  Navigate to the backend directory:
    ```bash
    cd chat-backend
    ```

2.  **Configuration:**
    Open `src/main/resources/application.yml`. By default, it connects to localhost MongoDB and expects the frontend on port 5173.
    ```yaml
    spring:
      data:
        mongodb:
          uri: mongodb://localhost:27017/chatapp
    frontend:
      urls: http://localhost:5173/
    ```

3.  Run the application using the Maven Wrapper:
    ```bash
    # Windows
    ./mvnw.cmd spring-boot:run

    # Mac/Linux
    ./mvnw spring-boot:run
    ```
    The server will start on `http://localhost:8080`.

### 2. Frontend Setup (`frontend-chat`)

The frontend is a React application served via Vite.

1.  Navigate to the frontend directory:
    ```bash
    cd frontend-chat
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  **Configuration (Optional):**
    If your backend is not running on `localhost:8080`, create a `.env` file in the `frontend-chat` root:
    ```env
    VITE_BACKEND_URL=http://your-backend-ip:port
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:5173`.

---

## 🔌 API Documentation

### REST Endpoints

| Method | Endpoint | Description | Body (Content-Type) |
| :--- | :--- | :--- | :--- |
| `POST` | `/rooms` | Create a new room | `text/plain` (Room ID) |
| `GET` | `/rooms/{roomId}` | Join/Validate a room | N/A |
| `GET` | `/rooms/{roomId}/message` | Get chat history | N/A |

### WebSocket Configuration

* **Endpoint:** `/chat` (SockJS fallback enabled)
* **Subscribe URL:** `/topic/room/{roomId}` (To receive messages)
* **Send URL:** `/app/sendMessage/{roomId}` (To send messages)

**Message Payload Format:**
```json
{
  "sender": "UserName",
  "content": "Hello World",
  "roomId": "Room123"
}
```

📂 Project Structure
```
Echo-Room/
├── chat-backend/             # Spring Boot Application
│   ├── src/main/java/.../    # Controllers, Services, Entities, Repos
│   └── src/main/resources/   # application.yml
│
└── frontend-chat/            # React Application
    ├── src/
    │   ├── components/       # Chat.jsx, JoinCreateChat.jsx
    │   ├── config/           # Axios and Helper functions
    │   ├── services/         # API calls
    │   ├── store/            # Context API (ChatProvider)
    │   └── ...
    └── ...
```
## 🧪 Testing

### Backend
Run unit tests using Maven:
```bash
cd chat-backend
./mvnw test
```

### Frontend
```bash
cd frontend-chat
npm run lint
