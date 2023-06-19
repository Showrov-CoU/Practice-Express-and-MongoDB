const express = require("express");
const { default: mongoose } = require("mongoose");
const todoSchema = require("../todoSchema/todoSchema");
const router = express.Router();

const Todo = new mongoose.model("Todo", todoSchema);

router.get("/", (req, res) => {});
router.get("/:id", (req, res) => {});
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).json({
      message: "Todo was inserted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.post("/many", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({
        message: "Todo was inserted successfully",
      });
  } catch (error) {
    res.status(500).json({
        message: error.message,
      });
  }
});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
