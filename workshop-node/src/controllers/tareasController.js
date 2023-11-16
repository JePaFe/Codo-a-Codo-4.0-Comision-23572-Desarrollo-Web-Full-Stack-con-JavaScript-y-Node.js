let tareas = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: false },
  { id: 3, title: "Tarea 3", completed: false },
  { id: 4, title: "Tarea 4", completed: false },
];

const index = (req, res) => {
  console.log(tareas);
  res.render("index", { tareas });
  // res.render("index", { tareas, layout: "layouts/admin" });
};

const store = (req, res) => {
  const tarea = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };

  tareas.push(tarea);

  res.redirect("/");
};

const update = (req, res) => {
  tareas.forEach((tarea) => {
    if (tarea.id == req.params.id) {
      tarea.completed = !tarea.completed;
    }
  });

  res.redirect("/");
};

const destroy = (req, res) => {
  tareas = tareas.filter((tarea) => tarea.id != req.params.id);

  res.redirect("/");
};

module.exports = {
  index,
  store,
  update,
  destroy,
};
