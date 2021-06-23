const fs = require('fs')

fs.readFile('./file/word_wrap.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err)
    }
    let start = 0;
    let wrap = 80;

    [...data].forEach((char, index, arry) => {


        let text = arry.slice(start, wrapFunction(wrap, arry));

        fs.appendFile('./test.txt', text.join('') + '\n', function (err) {
            if (err) throw err;

        });

        start += 80;
        wrap += 80;

    })

    function wrapFunction(wrap, arry) {
        if (wrap >= arry.length || start >= arry.length){
            --wrap;
            --start
        }

        if (arry[wrap] === ' ') {
            wrap--;
            wrapFunction(wrap, arry)

        } else {
            return wrap + 1
        }
    }
})
