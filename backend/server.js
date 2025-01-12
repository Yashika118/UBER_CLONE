import http from "http";
import app from "./app.js";
import { connectDB } from "./db/db.js";


const port=process.env.PORT || 3000;
const server=http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running on port ${port} successfully`);
    connectDB();
});


// server.js is the entry point for our app therfore
// change in package.json "main":"server.js" instead of "main":"index.js"