const db = require('../../data/db-config');

module.exports = {
  find,
  findByTitle,
  findById,
  add,
  edit,
  remove
}

function find() {
  return db('lists');
}

function findByTitle(title) {
  return db('lists').where(title);
}

function findById(id) {
  return db('lists').where({ id });
}

async function add(list) {
  const [id] = await db('lists').insert(list);
  return findById(id);
}

// function add(list) {
//   return db('lists')
//     .insert(list, 'id')
//     .then(ids => {
//       return findById(ids[0]);
//     });
// }

function edit(id, title) {
  return db('lists')
    .where({ id })
    .update(title);
}

function remove(id) {
  return db('lists')
    .where({ id })
    .del();
}
