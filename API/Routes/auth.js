import  express  from "express";
import  register  from "../Controllers/auth";
const router = express.Router();

router.get("/register", register);

export default router