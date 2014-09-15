lyn6 = require('./lyn6/module');
dir = process.argv[2];
filter = process.argv[3];

lyn6(dir, filter, function (err, files) {
    if (err) {
        return console.error('There was an error:', err);
    }
    files.forEach(function(file){
       console.log(file);
    });
});

