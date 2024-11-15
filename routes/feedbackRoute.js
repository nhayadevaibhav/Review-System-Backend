import {isAdmin} from "..//middleware/Middleware.js" ;
import { createAdmin,createAlumni, createStudent ,getAllUsers} from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/companyController.js";
import { createReview ,getAllReviews} from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likesController.js"
import { isAdmin } from "../middleware/Middleware.js";
import express from express;
import { Router } from "express";
express.Router()

app.post("/admin/create",createAdmin);

app.post("/Alumni/create",createAlumni);

app.post("/Student/create",createStudent);

app.post("/comapny/create",isAdmin,createCompany);

app.post("/review/create",createReview);


app.post("/like/add",likeReviews);

app.get("/user/get",getAllUsers);

app.get("/company/get",getCompanies);

app.get("/review/get",getAllReviews);
export default Router;

