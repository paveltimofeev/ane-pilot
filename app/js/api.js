// temp data
var data = {
	boxes = 
		[
			{ 
				"index":1, 
				"email":"Angela.Nevis@e-mail.com",
				"name": "Loren Department", 
				"count":250, 
				"size": 1450 
			},
			{ "index":2, "email":"Shun@e-mail.com","name": "Mate Department", "count":12, "size": 1450 },
			{ "index":3, "email":"Hoar@e-mail.com","name": "Integer Dep", "count":125, "size": 1450 }
		]
};

// GET Mailboxes
exports.mailboxes = function(req, res) {

	res.json({ data.boxes });

};