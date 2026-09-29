import express from "express";
// import app_lev_md from "./src/middleware/app_lev_md.js";
// import route_lev_md from "./src/middleware/route_lev_md.js";
// import err_hand_md from "./src/middleware/err_hand_md.js";

const app = express();
// -------------------------------------------------
// Application Level Middleware
// app.use(app_lev_md);

// Or

// app.use((req, res, next) => {
//   console.log("Middleware");
//   next();
// })

// app.get("/home", (req, res) => {
//   console.log("Home Page");
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   console.log("About Page");
//   res.send("About Page");
// });

//------------------------------------------------

// Route Leve Middleware

// app.get("/home", (req, res) => {
//   console.log("Home Page");
//   res.send("Home Page");
// });

// app.get("/about", route_lev_md, (req, res) => {
//   console.log("About Page");
//   res.send("About Page");
// });

//------------------------------------------------

// Error Handling Middleware

// app.get("/getAllUsers", (req, res, next) => {
//     try{
//         throw new Error("Database error");
//     }
//     catch(error){
//         next(error);
//     }
// });

//------------------------------------------------
// Built-in Middleware
// app.use(express.json())

// ------------------------------------------------

// Third Part Middleware
// morgan (Helps to create log)

// ------------------------------------------------

app.listen(3000, ()=>{
  console.log("sever started on port 3000");
})