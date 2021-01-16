let counter = 0;
const tasks = [];

class Task {

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
        const index = Task.find(id);
        console.log("the index is:" +index);
        if (index < 0){
            res.sendStatus(404);
            return;
        }
        task[index].title = title.req.body;
        return sendStatus(204);
    }

    static delete (req, res) {
        const id = parseInt(req.params.id);
        const index = Task.find(id);
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

    module.exports = Task;





// let counter = 0;
// const tasks = [];

// class Tasks {
    
//    static getAll(req, res) {
//         res.json(tasks);
//     }

//     static create(req, res) {
//         const {title} = req.body;
//         if (!title || typeof title !== "string"){
//             return false;
//         }
//         const newTask ={
//             id: counter,
//             title
//         };
//         counter++;
//         tasks.push(newTask);
//         res.sendStatus(201);
//     }

//     static delete(req, res){
//         const id = parseInt(req.params.id);
//         const index = tasks.findIndex(t => t.id=== id);
//         if (index < 0) {
//             res.sendStatus(404);
//             return;

//         } 
//          tasks.splice(index, 1);
//         res.sendStatus(204);
//     }

// }

// module.exports = Tasks;