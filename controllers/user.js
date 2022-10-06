const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('user').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const getSingleUSER = async (req, res) => {
  const userName = new ObjectId(req.params.userName);
  const result = await mongodb.getDb().db().collection('user').find({ _id: userName });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createUSER = async (req, res) => {
  const vhs = {
    userName: req.body.userName,
    password: req.body.password,
    age: req.body.age
  };
  const response = await mongodb.getDb().db().collection('user').insertOne(user);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the user.');
  }
};

const updateUSER = async (req, res) => {
  const vhsId = new ObjectId(req.params.id);
  const vhs = {
    userName: req.body.userName,
    password: req.body.password,
    age: req.body.age
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('user')
    .replaceOne({ _id: userId }, user);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the user.');
  }
};

const deleteUSERNAME = async (req, res) => {
  const userName = new ObjectId(req.params.userName);
  const response = await mongodb.getDb().db().collection('user').remove({ _id: userName }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the user.');
  }
};
const deleteUSER = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('user').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the vhs.');
  }
};

module.exports = {
  getAll,
  getSingle,
  getSingleUSER,
  createUSER,
  updateUSER,
  deleteUSERNAME,
  deleteUSER
};