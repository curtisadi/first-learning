const express = require('express');
const router = express.Router();

router.get('/', (req,res, next) => {
    res.status(200).json({
        message:'Handeling Get Req'
    });
});

router.post('/', (req,res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message:'Handeling POST Req',
        creatProduct: product
    });
});


router.get('/:productId',(req,res,next) => {
    const id = req.params.productId;
    if(id === 'adi'){
        res.status(200).json({
            message: 'you find a book',
            id: id
        });
    }else{
        res.status(200).json({
            message:'book found'
        });
    }
});


router.patch('/:productId',(req,res,next) => {
    res.status(200).json({
        message:'updated Product'
    });
});

router.delete('/:productId',(req,res,next) => {
    res.status(200).json({
        message:'Deleted Product'
    });
});


module.exports = router;