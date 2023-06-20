const express = require("express");
const { default: mongoose } = require("mongoose");
const todoSchema = require("../todoSchema/todoSchema");
const router = express.Router();

const Todo = new mongoose.model("Todo", todoSchema);

//! Read all Todos
router.get("/", async (req, res) => {
  try {
    const data = await Todo.find(); //* .limit(3) show first 3 data
    res.status(200).json({
      message: "All Todos...",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
//! Read single Todo
router.get("/:id", async (req, res) => {
  try {
    const singleData = await Todo.findOne(
      { _id: req.params.id },
      { _id: 0, __v: 0 }
    );
    res.status(200).json({
      message: "Find Single Todo",
      data: singleData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
//! Create single Todo
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
//! Create multiple Todos
router.post("/many", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({
      message: "Todos were inserted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
//! Update single Todo
router.put("/:id", async (req, res) => {
  try {
    const updateData = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: { status: "active" },
      },
      { new: true }
    );
    res.status(200).json({
      message: "Todo was updated successfully",
      data: updateData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
//! Update multiple Todos
router.put("/", async (req, res) => {
  try {
    await Todo.updateMany(
      { status: "inactive" },
      {
        $set: {
          status: "active",
        },
      }
    );
    res.status(200).json({
      message: "Todos were updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
//! Delete Todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Todo was deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
