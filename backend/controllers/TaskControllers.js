const TaskModel = require('../models/TaskModel');


module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find();
    res.send(tasks);

}

module.exports.saveTask = (req, res) => {

    const { task } = req.body;

    TaskModel.create({ task })
        .then((data) => {
            console.log('Saved successfully');
            res.status(201).send(data);
        }).catch((err) => {
            console.error(err);
            res.send({ error: err, message: "Something went wrong..." })
        });
}

module.exports.updateTask = (req, res) => {

    const { id } = req.params;

    const { task } = req.body;

    TaskModel.findByIdAndUpdate(id , {task})
    .then(()=> res.send("Updated Successfully"))
   .catch ((err) => {
        console.error(err);
        res.send({ error: err, message: "Something went wrong..." })
    });
}

module.exports.deleteTask = (req, res) => {

    const { id } = req.params;

    const { task } = req.body;

    TaskModel.findByIdAndDelete(id)
    .then(()=> res.send("Deleted Successfully"))
   .catch ((err) => {
        console.error(err);
        res.send({ error: err, message: "Something went wrong..." })
    });
}