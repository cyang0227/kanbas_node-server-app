import mongoose from "mongoose";

const optionSchema = new mongoose.Schema(
  {
    value: { type: String, default: ""} ,
    isCorrect: { type: Boolean, default: false },
  },
  { _id: false }
);

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: {
    type: String,
    enum: ["Multiple Choice", "True False", "Fill in the Blank"],
    default: "Multiple Choice",
  },
  options: [optionSchema],
  correctAnswer: { type: String },
  points: { type: Number, default: 0 },
}, {_id: false});

const quizSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    points: { type: Number, default: 0 },
    published: { type: Boolean, default: false},
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
    viewResponse: {
      type: String,
      enum: ["Immediately", "After Due Date", "After All Attempts"],
      default: "Immediately",
    },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    showCorrectAnswers: { type: Boolean, default: false },
    showCorrectAnswersAt: { type: Date },
    accessCode: { type: String },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: { type: Date },
    availableDate: { type: Date },
    untilDate: { type: Date },
    questions: [questionSchema],
  },
  { collection: "quizzes" }
);
export default quizSchema;
