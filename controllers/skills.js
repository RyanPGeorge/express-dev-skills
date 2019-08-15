var Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  Todo.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  var todo = Todo.getOne(req.params.id);
  res.render('skills/edit', {
    todo,
    todoIdx: req.params.id
  });
}

function deleteSkill(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
}

function show(req, res) {
  res.render('skills/show', {
    todo: Todo.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1
  });
}

function index(req, res) {
  res.render('skills/index', {
    todos: Todo.getAll(),
    time: req.time
  });
}