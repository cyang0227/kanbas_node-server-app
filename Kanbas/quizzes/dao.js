import quizModel from "./model";

export const createQuiz = async (quiz) => {
  try {
    delete quiz._id;
    const newQuiz = await quizModel.create(quiz);
    return newQuiz;
  } catch (error) {
    console.error("createQuiz:", error.message);
    throw new Error("createQuiz:", error.message);
  }
};

export const findAllQuizzes = async () => {
  try {
    const quizzes = await quizModel.find();
    return quizzes;
  } catch (error) {
    console.error("findAllQuizzes:", error.message);
    throw new Error("findAllQuizzes:", error.message);
  }
};

export const findQuizById = async (id) => {
  try {
    const quiz = await quizModel.findById(id);
    return quiz;
  } catch (error) {
    console.error("findQuizById:", error.message);
    throw new Error("findQuizById:", error.message);
  }
};

export const findQuizByCourse = async (courseId) => {
  try {
    const quizzes = await quizModel.find({ course: courseId });
    return quizzes;
  } catch (error) {
    console.error("findQuizByCourse:", error.message);
    throw new Error("findQuizByCourse:", error.message);
  }
};

export const updateQuiz = async (id, quiz) => {
  try {
    const updatedQuiz = await quizModel.findByIdAndUpdate
    (id, quiz, { new: true });
    return updatedQuiz;
  } catch (error) {
    console.error("updateQuiz:", error.message);
    throw new Error("updateQuiz:", error.message);
  }
};

export const deleteQuiz = async (id) => {
  try {
    await quizModel.findByIdAndDelete(id);
  } catch (error) {
    console.error("deleteQuiz:", error.message);
    throw new Error("deleteQuiz:", error.message);
  }
};