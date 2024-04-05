import express from "express"
import { test,updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { deleteUser,signout } from "../controller/auth.controller.js";



const router =express.Router();




router.get("/test",test)
router.put("/update/:userId",verifyToken,updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);

export default router;