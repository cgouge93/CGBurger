const orm = require('../config/orm');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    updateOne(cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    }
};

module.exports = burger