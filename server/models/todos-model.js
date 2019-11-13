const db = require('../../data/db-config');

module.exports = {
  find,
  findById,
  add,
  edit,
  remove,
  toggleComplete
}

function find() {
  return db('todos');
}

function findById(id) {
  return db('todos').where({ id });
}

async function add(todo) {
  const [id] = await db('todos').insert(todo);
  return findById(id);
}

// function add(list) {
//   return db('todos')
//     .insert(list, 'id')
//     .then(ids => {
//       return findById(ids[0]);
//     });
// }

function edit(id, text) {
  return db('todos')
    .where({ id })
    .update(text);
}

function remove(id) {
  return db('todos')
    .where({ id })
    .del();
}

async function toggleComplete(id) {
  const done = await db('todos')
    .where({ id })
    .select('done');

  return db('todos')
    .where({ id })
    .update(done ? false : true);
}