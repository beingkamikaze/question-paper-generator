// utils/questionPaperGenerator.js
const express = require("express");
const router = express.Router();
const generateQuestionPaper = require("../utils/questionPaperGenerator");

// API endpoint to generate a question paper with specified difficulty distribution
router.get("/generate-question-paper", async (req, res) => {
  const totalMarksParam = req.query.totalMarks;
  const totalMarks = parseFloat(totalMarksParam); // Example total marks
  const actualMarks = totalMarks / 100;
  // Parse difficulty distribution from query parameters
  const { easy, medium, hard } = req.query;
  let distribution = {
    Easy: easy * actualMarks,
    Medium: medium * actualMarks,
    Hard: hard * actualMarks,
  };
  try {
    const questionPaper = await generateQuestionPaper(totalMarks, distribution);
    res.json(questionPaper);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
