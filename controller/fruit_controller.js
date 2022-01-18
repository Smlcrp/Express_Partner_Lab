const express = require('express');
const router = express.Router();
const Fruit = require('../Model/fruit_model.js')


router.get('/', (req, res) => {
    
    const allFruit = Fruit.find();
    const context = { Fruit: allFruit };
    res.render('index.ejs', context);

});


router.get('/fruit/:id', (req, res) => {
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

router.delete('/fruit/:id', (req, res) => {
    Fruit.findByIdAndDelete(req.params.id, (error, deleteFruit) => {
        if(error) {
            console.log(error);
            res.send(error);
        }

        console.log(deleteFruit);
        res.redirect('/fruit')
    })
})

router.get('/fruit/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (error, updatedFruit) => {
        if(error) console.log(error);

        console.log(updatedFruit);
        res.render('edit.ejs', { Fruit: updatedFruit})
    })
})

router.put('/fruit/:id', (req, res) => {
    console.log(`The request is ${req}`)
    // console.log(`The request's body is ${req.body}`)

    Fruit.findByIdAndUpdate(req.params.id, req.body,(error, updatedFruit) => {
        if (error) return console.log(error);

        console.log(updatedFruit);

        return res.redirect(`/fruit`);
    });
});

module.exports = router;