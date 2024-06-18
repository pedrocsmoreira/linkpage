const express = require('express');
const router = express.Router();

const mylinks = require('./links.json');
const urls = require('./urls.json');

router.get('/', function(req, res) {
    const socials = mylinks.socials;
    const links = mylinks.links;
    res.render('index', {socials: socials, links: links});
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
