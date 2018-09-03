const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message:'All Order fetched'
    });
});

router.post('/',(req,res,next) => {
    res.status(201).json({
        message:'New Order created'
    });
});


router.get('/:orderID',(req,res,next) => {
    res.status(200).json({
        message:'Get specific Order',
        id: req.params.orderID
    
    });
});



router.delete('/:orderID',(req,res,next) => {
    res.status(200).json({
        message:'Order Deleted Successfully',
        id: req.params.orderID
    });
});

module.exports = router;