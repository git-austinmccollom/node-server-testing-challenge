const db = require("./database/connection.js");

module.exports = {
  addParty,
  find,
  findById,
};

async function addParty(party) {
  try {
    const id = await db("parties").insert(party);
    return findById(id[0]);
  } catch (error) {
    throw error;
  }
}

function find() {
  return db("parties");
}

function findById(id) {
  return db("parties").where({ id }).first();
}
