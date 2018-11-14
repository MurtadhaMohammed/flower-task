let fs = require('fs');

fs.readFile('./flower.txt', (error, file) => {
    if (!error) {
        var flowerStr = file.toString();
        var flowers = flowerStr.split('\n');
        row_num = flowers.length;
        S_flowers = flowers.filter(function (flower) {
            return flower[0] == 'S'
        })

        another_flowers = flowers.filter(function (flower) {
            return flower[0] !== 'S'
        })
        
        let result = [
           { 'count flowers': row_num},
           { 'start with letter S': S_flowers},
           { 'not start with letter S': another_flowers},
        ]
        console.log(result)
    }
})

