const { exampleData } = require("../POST method/example-data");
const { customError } = require("./customErrorClass");
const asyncWrapper = require("./asyncWrapper");
const express = require("express");
const Task = require("./tasks");

const getData = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ id });

  if (!task) {
    return next(customError(`There is no element with the id of ${id}`, 404));
  }
  res.status(200).json({ task });
});

const postData = asyncWrapper(async (req, res) => {
  const entry = await Task.create(req.body);
  res.status(201).json({ entry });
});

const putData = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({ task });
});

const patchData = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
  res.status(201).json({ task });
});

const deleteData = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(customError(`There is no element with the id of ${id}`, 404));
  }
});

module.exports = { getData, getTask, postData, patchData, putData, deleteData };
