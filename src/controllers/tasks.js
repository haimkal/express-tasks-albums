let counter = 0;
const tasks = [];

class Tasks {

    static getAll (req, res) {
        res.json(tasks);
    }

    static create (req, res) {
        const {title} = req.body;
        if (!title || typeof title !== "string"){
            return false;
        }
        const newTask = {
            id: counter,
            title
        }
        tasks.push(newTask);
        counter ++;
        res.sendStatus(201);
    }

    static edit (req, res) {
        const id = parseInt(req.params.id);
        const index = Tasks.find(id);
        if (index < 0){
            res.sendStatus(404);
            return;
        }
        tasks[index].title = req.body.title;
        return res.sendStatus(204);
    }

    static delete (req, res) {
        const id = parseInt(req.params.id);
        const index = Tasks.find(id);
        if(index < 0){
            res.sendStatus(404);
            return;
        }else{
            tasks.splice(index,1);
            return res.sendStatus(204);
        }
    }

    static find(taskId) {
        return tasks.findIndex(t=> t.id === taskId);
    }
}

    module.exports = Tasks;



