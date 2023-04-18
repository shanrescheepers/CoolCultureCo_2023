const express = require('express');
const router = express();
const Ingredients = require('../models/ingredients')


// Get all Ingredients
router.get('/api/ingredients/', async (req, res) => {
    const ingredients = await Ingredients.find();
    res.send(ingredients);
});

router.get('/api/ingredients/:id', async (req, res) => {
    const ingredients = await Ingredients.find({
        location: req.params.id
    });
    res.send(ingredients);
});

router.get("/api/ingredient/:id", async (req, res) => {
    const ingredient = await Ingredients.findById(req.params.id);
    res.json(ingredient);
});



//Add a ingredient
router.post('/api/addingredient', (req, res) => {

    console.log(req.body);
    const ingredient = new Ingredients({
        name: req.body.name,
        quantity: req.body.quantity,
        image: req.body.image,
        location: req.body.location,
    });


    ingredient.save()
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error", err });
        });
});

router.patch('/api/updateingredient/:id', async (req, res) => {
    console.log(req.params)
    console.log(req.body)

    const ingredient = await Ingredients.updateOne(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                quantity: req.body.quantity,
                image: req.body.image,
                location: req.body.location,
            }
        }
    )

    res.json(ingredient);
});


module.exports = router;