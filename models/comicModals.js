const mongoose = require('mongoose');

//Define the Scheme for comic groups
const comicGroupScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:['komikslar', 'animelar','tarjima animelar','tarjima mangalar'],
        required:true
    },
    komiks_img:{
        type:String,
        required:true
    },
    holati:{
        type:String,
    },
    janri:{
        type:String
    },
    muallif: {
        type: String, // Author's name
    },
    muallif_img: {
        type: String, // Path or URL to the author's image
    },
    davlat: {
        type: String, // e.g., "Uzbekistan"
    },
    yili: {
        type: String, // e.g., "2013-yildan chiqa boshlagan"
    },
    boblar: {
        type: String, // e.g., "9+" (number of chapters)
    },
    boblar_pdf: [{
        type: String, // Array of chapter PDF paths or URLs
    }]
},{timestamps:true});

const ComicGroup = mongoose.model('ComicGroup', comicGroupScheme);
module.exports = ComicGroup;