import e from "cors";
import db from "../Database/index.js";

function QuizRoutes(app) {
    // Get all quizzes of a course
    app.get("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const quizzes = db.quizzes.filter((quiz) => quiz.course === cid);
        res.send(quizzes);
    });
    // create a new quiz
    app.post("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const newQuiz = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.quizzes.push(newQuiz);
        res.send(newQuiz);
    });
    // delete a quiz
    app.delete("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        db.quizzes = db.quizzes.filter((quiz) => quiz._id !== qid);
        res.sendStatus(200);
    });
    
    // update a quiz
    app.put("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        const quizIndex = db.quizzes.findIndex((quiz) => quiz._id === qid);
        db.quizzes[quizIndex] = {
            ...db.quizzes[quizIndex],
            ...req.body,
        };
        res.sendStatus(204);
    });
}
export default QuizRoutes;