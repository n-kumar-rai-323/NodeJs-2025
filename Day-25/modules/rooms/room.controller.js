const Model = require("./room.model");
//CRUD

//Create
const create = async (payload) => {
  return Model.create(payload);
};

//Read list
const list = async () => {
  return Model.find();
};

// Read One
const getById = async (roomnumber) => {
  return Model.findOne({ number: roomnumber });
};

// update by id
const updateById = async (id, payload) => {
  return Model.updateOne({ _id: id }, payload);
};

// update room
const updateStatus = async (id) => {
  const room = await Model.findOne({ _id: id });
  if (!room) throw new Error("Room not found!");
  const { isFilled } = room;
  return Model.updateOne({ _id: id }, { isFilled: !isFilled });
};

// delete
const remove = async (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = { create, list, getById, updateById, updateStatus, remove };
