import mongoose from "mongoose";
import schema from "./schema.js";
const quizModel = mongoose.model("quizModel", schema);
export default quizModel;