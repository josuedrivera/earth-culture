// const About = require('../models/about');
// const About = require('../routes/about');


module.exports.renderAbout = (req, res) => {
    res.render('../about');
}




// module.exports.renderAbout =  (req, res,) => {
// module.exports.showProduct = async (req, res,) => {
    // const about = await About.findById(req.params.id).populate({
    //     path: 'reviews',
    //     populate: {
    //         path: 'author'
    //     }
    // }).populate('author');
    // if (!product) {
    //     req.flash('error', 'Cannot find that product!');
    //     return res.redirect('/products');
    // }
    // res.render('about/about');
// }
