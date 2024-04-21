import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    try {
      const quiz = await dao.createQuiz(req.body);
      res.status(201).json(quiz);
    } catch (error) {
      console.error("Failed to create a quiz:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const findAllQuizzes = async (req, res) => {
    try {
      const quizzes = await dao.findAllQuizzes();
      res.json(quizzes);
    } catch (error) {
      console.error("Failed to get all quizzes:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const findQuizById = async (req, res) => {
    try {
      const quiz = await dao.findQuizById(req.params.quizId);
      if (!quiz) {
        res.status(404).json({ error: "Quiz not found" });
      } else {
        res.json(quiz);
      }
    } catch (error) {
      console.error("Failed to get a quiz:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const findQuizzesByCourse = async (req, res) => {
    try {
      const quizzes = await dao.findQuizzesByCourse(req.params.course);
      res.json(quizzes);
    } catch (error) {
      console.error("Failed to get quizzes by course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const updateQuiz = async (req, res) => {
    try {
      const quizId = req.params.quizId;
      const quiz = req.body;
      const updatedQuiz = await dao.updateQuiz(quizId, quiz);
      res.json(updatedQuiz);
    }
    catch (error) {
      console.error("Failed to update a quiz:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const deleteQuiz = async (req, res) => {
    try {
      await dao.deleteQuiz(req.params.quizId);
      res.sendStatus(200);
    } catch (error) {
      console.error("Failed to delete a quiz:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  app.post("/api/quizzes", createQuiz);
  app.get("/api/quizzes", findAllQuizzes);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.get("/api/courses/:course/quizzes", findQuizzesByCourse);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
}