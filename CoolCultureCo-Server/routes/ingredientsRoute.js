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

router.get('/api/ingredients/:id/:category', async (req, res) => {
    const ingredients = await Ingredients.find({
        location: req.params.id
    });

    let catIngredient = [];

    for (let i = 0; i < ingredients.length; i++) {
        if (req.params.category == "cerealChurn") {
            if (ingredients[i].cerealChurn) {
                catIngredient.push(ingredients[i])
            }
        }

        if (req.params.category == "originalChurn") {
            if (ingredients[i].originalChurn) {
                catIngredient.push(ingredients[i])
            }
        }

        if (req.params.category == "candyChurn") {
            if (ingredients[i].candyChurn) {
                catIngredient.push(ingredients[i])
            }
        }

    }

    res.send(catIngredient);
});


router.get('/api/ingredientsname/:id/:name', async (req, res) => {
    const ingredients = await Ingredients.find({
        location: req.params.id,
        name: req.params.name
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
        cerealChurn: req.body.cerealChurn,
        originalChurn: req.body.originalChurn,
        candyChurn: req.body.candyChurn,
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
                cerealChurn: req.body.cerealChurn,
                originalChurn: req.body.originalChurn,
                candyChurn: req.body.candyChurn,
            }
        }
    )

    res.json(ingredient);
});


module.exports = router;