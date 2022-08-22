const request = require('request-promise');


const apiKey = process.env.SCRAPER_API_KEY;

const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`; 


// GET a particular Amazon Product details
const getParticularAmazonProductDetails = async (req, res) => {

    const { productId } = req.params;

    try {
        
        const response = await request(`${baseURL}&url=https://www.amazon.in/dp/${productId}`);

        res.status(200).json({
            success: true,
            message: `product with ID: ${productId} has been fetched successfully from amazon.`,
            response: JSON.parse(response)
        }); 

    } catch (error) {
        
        res.status(500).json({
            success: false,
            error
        });

    }

};


// GET review of a particular Amazon Product 
const getReviewOfAParticularAmazonProductDetails = async (req, res) => {

    const { productId } = req.params;

    try {
        
        const response = await request(`${baseURL}&url=https://www.amazon.in/product-reviews/${productId}`);

        res.status(200).json({
            success: true,
            message: `product review of the product with ID: ${productId} has been fetched successfully from amazon.`,
            response: JSON.parse(response)
        }); 

    } catch (error) {
        
        res.status(500).json({
            success: false,
            error
        });

    }

};


// GET offers of a particular Amazon Product
const offersOfAnAmazonProductDetails = async (req, res) => {

    const { productId } = req.params;

    try {
        
        const response = await request(`${baseURL}&url=https://www.amazon.in/gp/offer-listing/${productId}`);

        res.status(200).json({
            success: true,
            message: `all the offers of the product with ID: ${productId} has been fetched successfully from amazon. (NOTE:- If you receive response that contains empty data, then, that means that particular product have no current offer).`,
            response: JSON.parse(response)
        }); 

    } catch (error) {
        
        res.status(500).json({
            success: false,
            error
        });

    }

};


// search for a particular prduct in Amazon 
const searchForAParticularProduct = async (req, res) => {

    const { searchQuery } = req.params;

    try {
        
        const response = await request(`${baseURL}&url=https://www.amazon.in/s?k=${searchQuery}`); // in s?k, s stands for search

        res.status(200).json({
            success: true,
            message: `all the products with search query '${searchQuery}' has been fetched successfully from amazon.`,
            response: JSON.parse(response)
        }); 

    } catch (error) {
        
        res.status(500).json({
            success: false,
            error
        });

    }

};


module.exports = {
    getParticularAmazonProductDetails,
    getReviewOfAParticularAmazonProductDetails,
    offersOfAnAmazonProductDetails,
    searchForAParticularProduct
}