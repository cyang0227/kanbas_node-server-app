import * as dao from "./dao.js";

let currentQuiz = null;

export default function QuizRoutesDatabase(app) {
    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };
    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };
    const findQuizById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.quizId);
        res.json(quiz);
    };
    const findQuizzesByCourse = async (req, res) => {
        const quizzes = await dao.findQuizzesByCourse(req.params.course);
        res.json(quizzes);
    }
    const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.updateQuiz(quizId, req.body);
        currentQuiz = await dao.findQuizById(quizId);
        res.json(status);
    };
    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };
}

app.post("/api/courses/:cid/quizzes", createQuiz);
app.get("/api/quizzes", findAllQuizzes);
app.get("/api/quizzes/:quizId", findQuizById);
app.get("/api/courses/:course/quizzes", findQuizzesByCourse);
app.put("/api/quizzes/:quizId", updateQuiz);
app.delete("/api/quizzes/:quizId", deleteQuiz);
