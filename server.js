const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.get('/drones', (req, res) => {
    return db.Drone.findAll()
        .then((drones) => res.send(drones))
        .catch((err) => {
            console.log('There was an error querying drones', JSON.stringify(err))
            return res.send(err)
        });
});

app.post('/drones', (req, res) => {
    const { customer_image, customer_name, customer_address, battery, max_speed, average_speed, status, current_fly } = req.body
    return db.Drone.create({ customer_image, customer_name, customer_address, battery, max_speed, average_speed, status, current_fly })
        .then((drone) => res.send(drone))
        .catch((err) => {
            console.log('***There was an error creating a drone', JSON.stringify(drone))
            return res.status(400).send(err)
        })
});

app.delete('/drones/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.Drone.findByPk(id)
        .then((drone) => drone.destroy())
        .then(() => res.send({ id }))
        .catch((err) => {
            console.log('***Error deleting drone', JSON.stringify(err))
            res.status(400).send(err)
        })
});

app.put('/drones/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return db.Drone.findByPk(id)
        .then((drone) => {
            const { customer_image, customer_name, customer_address, battery, max_speed, average_speed, status, current_fly } = req.body
            return drone.update({ customer_image, customer_name, customer_address, battery, max_speed, average_speed, status, current_fly })
                .then(() => res.send(drone))
                .catch((err) => {
                    console.log('***Error updating drone', JSON.stringify(err))
                    res.status(400).send(err)
                })
        })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});