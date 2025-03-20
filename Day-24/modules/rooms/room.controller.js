// const roomModel = require("./room.model");

// const create = async (payload) => {
//   const { room_type, ...rest } = payload;
//   const result = await roomModel.create(rest);
//   return result;
// };

// module.exports = { create };

const roomModel = require("./room.model");

const create = async (payload) => {
  try {
    // Ensure `room_type` is included in the payload
    const result = await roomModel.create(payload);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { create };
