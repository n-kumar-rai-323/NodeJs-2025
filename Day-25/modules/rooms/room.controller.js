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
const updateById = async (roomNumber, payload) => {
  return Model.updateOne({ number: roomNumber }, payload);
};

// update room
const updateStatus = async (roomNumber) => {
  const room = await Model.findOne({ number: roomNumber });
  if (!room) throw new Error("Room not found!");
  const { isFilled } = room;
  return Model.updateOne({ number: roomNumber }, { isFilled: !isFilled });
};

// delete
const remove = async (roomNum) => {
  return Model.deleteOne({ number: roomNum });
};

module.exports = { create, list, getById, updateById, updateStatus, remove };
