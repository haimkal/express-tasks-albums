
const albums = [];
let counter= 0;
class Albums {

    static getAll (req, res) {
       res.json (albums);
    }

    static create(req, res) {
		counter++;
		albums.push({
            id: counter,
            date: Date.now(),
            title: req.body.title  
        });
        // var d = new Date(Date.now()); - using in frontend for introducing dates properly
        // d.toString()
        
		res.sendStatus(201);
	}

	static delete(req, res) {
		const id = parseInt(req.params.id);
		const index = Albums.find(id);
		if(index < 0) {
			res.sendStatus(404);
			return;
		}
		albums.splice(index, 1);
		res.sendStatus(204);
	}

	static edit(req, res) {
		const id = parseInt(req.params.id);
		const index = Albums.find(id);
		if(index < 0) {
			res.sendStatus(404);
			return;
        }
        albums[index].title = req.body.title;
		res.sendStatus(204);
	}

	static find(albumId) {
		return albums.findIndex(a => a.id === albumId);
	}

}

module.exports = Albums;