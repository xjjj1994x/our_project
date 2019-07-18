const express = require('express')
const app = express()
const port = 3000


// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/1jbootstrap', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/1jbootstrap.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/1kbootstrap', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/1kbootstrap.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/2jutilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/2jutilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/2kutilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/2kutilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/3jutilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/3jutilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/3jutilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/3kutilities.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/4jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/4jgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/4kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/4kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/5jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/5jgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/5kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/5kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/6jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/6jgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/6kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/6kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/7jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/7jgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/7kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/7kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/8jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/8grid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/8kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/8kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/9jgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/9jgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/9kgrid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/9kgrid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/10jgridexam', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/10jgridexam.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/10kgridexam', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/10kgridexam.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/11jgridexam', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/11jgridexam.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/11kgridexam', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/11kgridexam.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/12jtypography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/12jtypography.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/12ktypography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/12ktypography.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/13jtypography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/13jtypography.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/13ktypography', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/13ktypography.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/14jtable', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/14jtable.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/14ktable', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/14ktable.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/15jtable', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/15jtable.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/15ktable', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/15ktable.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/16jimage', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/16jimage.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/16kimage', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/16kimage.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/17jbuttons', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/17jbuttons.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/17kbuttons', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/17kbuttons.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/18jbuttons', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/18jbuttons.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/18kbuttons', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/18kbuttons.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/19jcollapse', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/19jcollapse.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/19kcollapse', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/19kcollpase.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/20jcarousel', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/20jcarousel.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/20kcarousel', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/20kcarousel.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/21jproject', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/21jproject.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/21kproject', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/21kproject.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/22jdropdown', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/22jdropdown.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/22kdropdown', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/22kdropdown.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/23jnavbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/23jnavbar.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/23knavbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/23knavbar.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/25jnavbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/25jformgroup.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/25kformgroup', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/25kformgroup.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/26jnavbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/JJJ/26jformgroup.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/26kformgroup', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/KDH/26kformgroup.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/enter', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.email+', '+req.query.password+', '+req.query.optcheck1+', '+req.query.optcheck2+', '+req.query.optradio+', '+req.query.select)
});

router.get('/detail', function (req, res) {
    console.log(req.query.email);
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))