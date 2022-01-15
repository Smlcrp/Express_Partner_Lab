
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
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));
app.use(methodOverride('_method'))

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
    res.render("index.ejs", {Fruit: allFruit})
})

app.get('/fruit/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        if (error) {
            console.log(req.params)
            console.log(error);
            const context = { error: error };
            return res.status(404).render("404", context);
        }
        res.render('show.ejs', {Fruit: foundFruit});
    });
});

app.delete('/fruit/:id', (req, res) => {
    Fruit.findByIdAndDelete(req.params.id, (error, deleteFruit) => {
        if(error) {
            console.log(error);
            res.send(error);
        }

        console.log(deleteFruit);
        res.redirect('/fruit')
    })
})

// app.get('/fruit/:id/edit', (req, res) => {
//     Fruit.findById(req.params.id, (error, updatedFruit) => {
//         if(error) console.log(error);

//         console.log(updatedFruit);
//         res.render('edit.ejs', { Fruit: updatedFruit})
//     })
// })

// app.put('/fruit/:id', (req, res) => {
//     console.log(`The request is ${req}`)
//     // console.log(`The request's body is ${req.body}`)

//     Fruit.findByIdAndUpdate(req.params.id, req.body,(error, updatedFruit) => {
//         if (error) return console.log(error);

//         console.log(updatedFruit);

//         return res.redirect(`/fruit`);
//     });
// });

app.listen(PORT, function() {
    console.log(`I am listening on port ${PORT}`)
});