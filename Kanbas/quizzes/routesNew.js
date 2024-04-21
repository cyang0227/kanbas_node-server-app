import * as dao from "./dao.js";

export default function QuizRoutesDatabase(app) {
  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    try {
      const quiz = await dao.createQuiz(req.body);
      res.status(201).json(quiz);
    } catch (error) {
      console.error("Failed to create a quiz :", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/quizzes", async (req, res) => {
    try {
      const quizzes = await dao.findAllQuizzes();
      res.json(quizzes);
    } catch (error) {
      console.error("Failed to get all quizzes:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/quizzes/:quizId", async (req, res) => {
    try {
      const quiz = await dao.findQuizById(req.params.quizId);
      if (!quiz) {
        res.status(404).json({ error: "Quiz not found" });
      } else {
        res.json(quiz);
      }
    } catch (error) {
      console.error("Failed to get a quiz of quizId " + {quizId}, error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/courses/:course/quizzes", async (req, res) => {
    try {
      const quizzes = await dao.findQuizzesByCourse(req.params.course);
      res.json(quizzes);
    } catch (error) {
      console.error("Failed to get quizzes of a course", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.put("/api/quizzes/:quizId", async (req, res) => {
    try {
      const status = await dao.updateQuiz(req.params.quizId, req.body);
      if (!status.modifiedCount) {
        return res
          .status(404)
          .json({ error: "Quiz not found or no change made" });
      }
      const updatedQuiz = await dao.findQuizById(req.params.quizId);
      res.json(updatedQuiz);
    } catch (error) {
      console.error("Failed to update a quiz", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.delete("/api/quizzes/:quizId", async (req, res) => {
    try {
      const status = await dao.deleteQuiz(req.params.quizId);
      if (status.deletedCount === 0) {
        res.status(404).json({ error: "Quiz not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      console.error("Failed to delete a quiz", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}
