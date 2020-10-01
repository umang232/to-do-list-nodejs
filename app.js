const express = require('express');
const bodyParser = require('body-parser');


const app = express();

var items = ['Eat','Hustle','Sleep']
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',function(req,res){

	var today = new Date();

	var options ={
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	var day = today.toLocaleDateString("en-US",options)

	res.render("list",{
		kindOfDay: day, newListItem: items
	});
});

app.post('/',function(req,res){
	var item = req.body.listItem
	console.log(item);
	items.push(item);
	res.redirect('/');

})


app.listen(3000,function(){
	console.log('Server is running on port 3000');
})