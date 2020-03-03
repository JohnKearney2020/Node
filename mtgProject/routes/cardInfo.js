const express = require('express');
const router = express.Router();

let data = require('../data/data.json'); //right now this index.js file is in the routes folder, so we need to go up and then down into data.

//========================================
//             Base URL
//========================================
router.get('/cardinfo', (req,res) => {
    // console.log('test');
    // console.log(data.speakers[0].artwork);
    // let pagePhotos = [];
    // data.cards.forEach((cardObj) => {
    //     pagePhotos = pagePhotos.concat(cardObj.cardart);
    // })
    // console.log(pagePhotos);
    res.render('cardInfo.ejs', {
        // cardimages: pagePhotos //here we can send the array of images to the index.ejs file
    });
})

//========================================
//            Card Number URL
//========================================
router.get('/cardinfo/:cardnumber', (req, res) => {
    let cardname = '';
    let manacost = '';
    let cmc = '';
    let types = '';
    let cardtext = '';
    let loyalty = '';
    let pt = '';
    let expansion = '';
    let rarity = '';
    let cardnumber = '';
    let cardartfilename = '';
    let artist = '';
    //find the corresponding card in the data.json file by looping thru them all.
    data.cards.forEach((cardObj)=>{
        if(cardObj.cardnumber == req.params.cardnumber) { //if the card number after the slash in the URL matches the card number in data.json pull that cards data
            cardname = cardObj.cardname;
            manacost = cardObj.manacost;
            cmc = cardObj.cmc;
            types = cardObj.types;
            cardtext = cardObj.cardtext;
            loyalty = cardObj.loyalty;
            pt = cardObj.pt;
            expansion = cardObj.expansion;
            rarity = cardObj.rarity;
            cardnumber = cardObj.cardnumber;
            cardartfilename = cardObj.cardartfilename;
            artist = cardObj.artist;
        }
    })

    res.render('cardinfo.ejs', {
        cardname: cardname,
        manacost: manacost,
        cmc: cmc,
        types: types,
        cardtext: cardtext,
        loyalty: loyalty,
        pt: pt,
        expansion: expansion,
        rarity: rarity,
        cardnumber: cardnumber,
        cardartfilename: cardartfilename,
        artist: artist
    });
})

module.exports = router;