import express from "express";
const route = express.Router();
import StuController from "../controllers/studentControllers.js";
route.get("/info", StuController.studentInfo);
route.get("/display", StuController.studentDisplay);
route.post("/insert", StuController.studentInsert);
route.get("/datadisplay", StuController.StudentDataDiplay);




export default route;