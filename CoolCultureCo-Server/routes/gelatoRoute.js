const express = require('express');
const router = express();
const Gelatos = require('../models/gelato')
const Ingredients = require('../models/ingredients')

// Get all Gelatos
router.get('/api/gelatos/', async (req, res) => {
    const gelatos = await Gelatos.find();
    res.send(gelatos);
});

router.get("/api/gelato/:id", async (req, res) => {
    const gelato = await Gelatos.findById(req.params.id);
    res.json(gelato);
});

//get by location
router.get('/api/gelatos/:id', async (req, res) => {
    const gelato = await Gelatos.find({
        location: req.params.id
    });
    res.send(gelato);
});

//create gelato
router.get('/api/creategelato/:id', async (req, res) => {
    // console.log(req.params);

    const gelato = await Gelatos.findById(req.params.id);


    console.log(gelato._id)

    // const ingredients = await Ingredients.find({
    //     location: gelato.location
    // });

    // for (let i = 0; i < ingredients.length; i++) {
    //     const element = ingredients[i];
    //     let quantity = element.quantity - 1
    //     for (let t = 0; t < gelato.ingredients.length; t++) {
    //         const element2 = gelato.ingredients[t];
    //         const ingredient = await Ingredients.updateOne(
    //             {
    //                 location: gelato._id,
    //                 name: element2.name
    //             },
    //             {
    //                 $set: {
    //                     quantity: quantity,
    //                 }
    //             }
    //         )
    //         console.log(ingredient)
    //     }
    // }
    gelato.quantity = gelato.quantity + 1
    gelato.save()

    // console.log(ingredients);

    res.send("Done");
});

//get by location by category
router.get('/api/gelatos/:id/:category', async (req, res) => {
    const gelato = await Gelatos.find({
        location: req.params.id
    });

    let catGelato = [];

    for (let i = 0; i < gelato.length; i++) {
        if (req.params.category == "cerealChurn") {
            if (gelato[i].cerealChurn) {
                catGelato.push(gelato[i])
            }
        }

        if (req.params.category == "originalChurn") {
            if (gelato[i].originalChurn) {
                catGelato.push(gelato[i])
            }
        }

        if (req.params.category == "candyChurn") {
            if (gelato[i].candyChurn) {
                catGelato.push(gelato[i])
            }
        }

    }

    res.send(catGelato);
});


//Add a ingredient
router.post('/api/addgelato', (req, res) => {
    console.log(req.body);
    const gelatos = new Gelatos({
        name: req.body.name,
        quantity: req.body.quantity,
        image: req.body.image,
        ingredients: req.body.ingredients,
        location: req.body.location,
        cerealChurn: req.body.cerealChurn,
        originalChurn: req.body.originalChurn,
        candyChurn: req.body.candyChurn,
    });


    gelatos.save()
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error", err });
        });
});

router.patch('/api/updategelato/:id', async (req, res) => {
    console.log(req.params)
    console.log(req.body)

    const gelatos = await Gelatos.updateOne(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                quantity: req.body.quantity,
                image: req.body.image,
                ingredients: req.body.ingredients,
                location: req.body.location,
                cerealChurn: req.body.cerealChurn,
                originalChurn: req.body.originalChurn,
                candyChurn: req.body.candyChurn,
            }
        }
    )

    res.json(gelatos);
});

module.exports = router;