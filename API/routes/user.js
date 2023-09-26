import express from "express";
import userController from "../controllers/user.js";

const routerUser = express.Router();
routerUser.post("/user/", userController.create);
routerUser.get("/user", userController.getall);
routerUser.post("/login", userController.login);
  
export default routerUser;
