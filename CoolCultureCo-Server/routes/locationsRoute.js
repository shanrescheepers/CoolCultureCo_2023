const express = require('express');
const router = express();
const Locations = require('../models/location')


// Get all Locations
router.get('/api/locations/', async (req, res) => {
    const locations = await Locations.find();
    res.send(locations);
});

router.get("/api/location/:id", async (req, res) => {
    const locations = await Locations.findById(req.params.id);
    res.json(locations);
});

//Add a ingredient
router.post('/api/addlocation', (req, res) => {

    console.log(req.body);
    const locations = new Locations({
        name: req.body.name,
        address: req.body.address,
        image: req.body.image,
        managerNumber: req.body.managerNumber,
        email: req.body.email,
    });


    locations.save()
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.status(400).json({ msg: "There is an error", err });
        });
});

router.patch('/api/updatelocation/:id', async (req, res) => {
    console.log(req.params)
    console.log(req.body)

    const locations = await Locations.updateOne(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                address: req.body.address,
                image: req.body.image,
                managerNumber: req.body.managerNumber,
                email: req.body.email,
            }
        }
    )

    res.json(locations);
});


module.exports = router;