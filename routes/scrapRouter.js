const express = require('express');

const {
    getParticularAmazonProductDetails,
    getReviewOfAParticularAmazonProductDetails,
    offersOfAnAmazonProductDetails,
    searchForAParticularProduct
} = require('../controllers/scrapControllers');


const router = express.Router();


router.get('/products/:productId', getParticularAmazonProductDetails);


router.get('/products/:productId/reviews', getReviewOfAParticularAmazonProductDetails);


router.get('/products/:productId/offers', offersOfAnAmazonProductDetails);


router.get('/search/:searchQuery', searchForAParticularProduct);


module.exports = router;