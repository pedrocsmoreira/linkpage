const express = require('express');
const router = express.Router();

const mylinks = require('./links.json');
const urls = require('./urls.json');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/teste', function(req, res) {
    const socials = mylinks.socials;
    const links = mylinks.links;
    res.render('test', {socials: socials, links: links});
});

router.get('/:linkID', function(req, res) {
    var link =  urls.links.find(
        (l) => {
          return l.name === req.params.linkID;
        }
    );

    if(link == null) {
        return;
    }

    res.redirect(link.url);
});

module.exports = router;
