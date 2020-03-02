const express = require('express');
const router = express.Router();
let data = require('../data/data.json');

router.get('/speakers', (req,res) => {
    let pagePhotos = [];
    data.speakers.forEach((speakerObj) => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork);
    })
    res.render('speakers.ejs', {
        pageTitle: 'Speaker List',
        artist: '',
        artwork: pagePhotos,
        allSpeakers: data.speakers,
        pageID: 'speakerList'
    });
})

router.get('/speakers/:speakerid', (req, res) => {
    let pagePhotos = [];
    let pageSpeakers = [];

    data.speakers.forEach((speakerObj)=>{
        if(speakerObj.shortname == req.params.speakerid) { //if the speaker shortanem matches the after /
            pageSpeakers.push(speakerObj);
            pagePhotos = speakerObj.artwork; //array of photo filenames
        }
    })

    res.render('speakers.ejs', {
        pageTitle: 'Speaker Details',
        artistName: pageSpeakers[0].artistName,
        artwork: pagePhotos,
        allSpeakers: pageSpeakers,
        pageID: 'pageSpeakers'
    });
})

module.exports = router;