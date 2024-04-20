import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ["Practice Quiz", "Graded Quiz", "Ungraded Survey"],
      default: "Graded Quiz",
    },
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Projects"],
      default: "Quizzes",
    },
    course: { type: String, required: true },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    showCorrectAnswers: { type: Boolean, default: false },
    showCorrectAnswersAt: { type: Date },
    accessCode: { type: String },
    oneQuestionAtATime: { type: Boolean, default: true },
    webCamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: { type: Date },
    availableDate: { type: Date },
    untilDate: { type: Date },
  },
  { collection: "quizzes" }
);
export default quizSchema;
