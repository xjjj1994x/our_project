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




app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))