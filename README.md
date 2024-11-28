
### Step-by-Step Setup

#### 1. **Initialize Node.js Project**
Run the following commands to initialize your project:

```bash
mkdir todo-api
cd todo-api
npm init -y
```

#### 2. **Install Dependencies**
Install **Express**, **Mongoose**, **dotenv**, and **cors** for handling API requests and MongoDB connections:

```bash
npm install express mongoose dotenv cors
```

#### 3. **Create .env File**
Create a `.env` file to store sensitive information like the MongoDB URI and port:

**.env**
```env
MONGO=your_mongo_connection_string
```

#### 4. **Connect to MongoDB**
In your Express app, use Mongoose to connect to your MongoDB instance. The connection string will usually be found in your .env file, which contains the MongoDB URI (either a local MongoDB instance or MongoDB Atlas cloud service).
Mongoose provides a connect() method which will establish the connection to MongoDB.


#### 5. **Define the Data Schema**

With Mongoose, you define a schema for your data. For a Todo app, this could be a schema with fields like title, description, and completed (boolean to mark if the task is done).
Create API Routes to Interact with the Database

#### 6. **Creating Routes**
GET Route: Retrieve all tasks (todos) from the database.
POST Route: Create a new task and save it to the database.
PUT Route: to update the task,
DELETE Route: to remove tasks.
Testing the API

After setting up the routes, you can test the API using tools like Postman or Insomnia. You can test the GET route to see all your tasks and POST route to create new tasks.


#### 4. **Start the Server**
Run the server using:

```bash
node app.js
```

---

### API Endpoints:
- **GET /get**: Get all Todos.  
- **POST /add**: Create new todo.
- **PUT /update/:id**: Update todo.
- **DELETE /delete**: Delete a todo.
  

