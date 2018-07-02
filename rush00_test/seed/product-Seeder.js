var Product = require('../models/products');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shooping');

var products = [
    new Product({
        imagePath : "https://i.pinimg.com/736x/5c/6b/87/5c6b87e532acc17534b9d8e307fa213d--cream-music-hyuna.jpg",
        title  : 'Hyuna 1',
        description : "awesome disc, your ears will die with this majestic album",
        price : 10
    }),
    new Product({
        imagePath : "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Hyunachange.jpg/220px-Hyunachange.jpg",
        title  : 'Hyuna 2',
        description : "awesome disc, random test because i'm testing these thigns",
        price : 20
    }),
    new Product({
        imagePath : "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Hyunachange.jpg/220px-Hyunachange.jpg",
        title  : 'Hyuna 3',
        description : "awesome disc, random test because i'm testing these thigns",
        price : 20
    }),
    new Product({
        imagePath : "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Hyunachange.jpg/220px-Hyunachange.jpg",
        title  : 'Hyuna 2',
        description : "awesome disc, random test because i'm testing these thigns",
        price : 20
    })
];


function exit() {
    mongoose.disconnect();
}

var done = 0;

for (var i = 0; i < products.length ; ++i) {
    products[i].save(function (err, result) {
       done++;
       if (done === products.length) {
          exit(); 
       }
    });
}
