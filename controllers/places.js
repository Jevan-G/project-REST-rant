const router = require('express').Router();

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/best-thai-restaurant.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/A-Cat-Cafe.jpg'
}]

router.get('/new', (req, res) => {
    res.render('places/new')
})


router.get('/', (req, res) => {
    res.render('places/index', { data: places });
});

module.exports = router