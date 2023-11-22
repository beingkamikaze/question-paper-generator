// utils/questionPaperGenerator.js
const Question = require("../models/question");

async function generateQuestionPaper(totalMarks, distribution) {
  let questionPaper = [];

  let easyLimit = distribution["Easy"] / 10;
  if (easyLimit != 0) {
    const questions1 = await Question.find({ difficulty: "easy" }).limit(
      easyLimit
    );
    questionPaper = questionPaper.concat(questions1);
  }

  let mediumLimit = distribution["Medium"] / 20;
  if (mediumLimit != 0) {
    const questions2 = await Question.find({ difficulty: "medium" }).limit(
      mediumLimit
    );
    questionPaper = questionPaper.concat(questions2);
  }

  let hardLimit = distribution["Hard"] / 50;
  if (hardLimit != 0) {
    const questions3 = await Question.find({ difficulty: "hard" }).limit(
      hardLimit
    );
    questionPaper = questionPaper.concat(questions3);
  }

  return questionPaper;
}

module.exports = generateQuestionPaper;
