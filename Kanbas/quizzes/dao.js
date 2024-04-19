import quizModel from "./model";

export const createQuiz = (quiz) => {
  delete quiz._id;
  return quizModel.create(quiz);
};

export const findAllQuizzes = () => quizModel.find();
export const findQuizById = (id) => quizModel.findById(id);
export const findQuizzesByCourse = (course) => quizModel.find({ course: course });

export const updateQuiz = (id, quiz) => quizModel.updateOne({ _id: id }, { $set: quiz });
export const deleteQuiz = (id) => quizModel.deleteOne({ _id: id });