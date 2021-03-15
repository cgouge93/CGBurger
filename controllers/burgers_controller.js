const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll(data0 => {
        const obj = {
            burgers: data
        }
        console.log(obj);
        res.render('index', obj);
    });
});

router.post('/api/burgers', (req, res) => {
    console.log(res.body)
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(result) {
        console.log(result)
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    }
    );
});

module.exports = router;