
const express = require('express');
const app = express();
const Fruit = require('./Model/fruit_model.js')
const methodOverride = require('method-override');
const allFruit = Fruit.find();

// My variables
const PORT = 4000;

// Set our app
app.set('view engine', 'ejs');

// App.use for adding 
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));
// app.use(methodOverride('_method'))

// app.use('/fruit')

// app.use((req, res, next) => {    
//     console.log("I'm running for another new route")   
// 	next();
// });

// Routes
app.get("/", function(req, res) {
    res.send("This is working! :)")
})

app.get("/fruit", function(req, res) {
    console.log(Fruit)
    res.render("index.ejs", {Fruit: allFruit})
})

app.listen(PORT, function() {
    console.log(`I am listening on port ${PORT}`)
});