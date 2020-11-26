const express = require('express');
const router = express.Router();

const createRouter = require('./create');
const readRouter = require('./read');
const readDetailRouter = require('./read_detail');
const updateRouter = require('./update');
const deleteRouter = require('./delete');
const hitRouter = require('./hit');

router.use('/create', createRouter);
router.use('/read', readRouter);
router.use('/read-detail', readDetailRouter);
router.use('/update', updateRouter);
router.use('/delete', deleteRouter);
router.use('/hit', hitRouter);

router.get('/', (req, res) => {
    res.status(200).send({
        stat : 'Success',
        title : 'URL /bulletin-boards is connected'
    });
})

module.exports = router;