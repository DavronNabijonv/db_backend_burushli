const express = require('express');
const ComicGroup = require('../models/comicModals');

const router = express.Router();

// POST route to add a new comic group
router.post('/create', async (req, res) => {
    const {
        name, type, komiks_img, holati, janri, muallif, muallif_img, davlat, yili, boblar, boblar_pdf
    } = req.body;

    try {
        // Create a new comic group
        const newComicGroup = new ComicGroup({
            name,
            type,
            komiks_img,
            holati,
            janri,
            muallif,
            muallif_img,
            davlat,
            yili,
            boblar,
            boblar_pdf
        });

        // Save to the database
        await newComicGroup.save();

        res.status(201).json(newComicGroup);
    } catch (error) {
        res.status(500).json({ message: 'Error creating comic group', error });
    }
});

module.exports = router;
