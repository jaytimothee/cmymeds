const fs = require('fs') // node js file system required to perfom file opperations

//Read in file from path
fs.readFile('./file/word_wrap.txt', 'utf8', (err, data) => {
    //exit early if error
    if (err) {
        return console.log(err)
    }

    let start = 0; //variable to start at begining of file
    let wrap = 80; //number of characters to wrap


    //[start itterating file]

    // spread file data into [] tobe able to use array methods like forEach
    [...data].forEach((char, index, arry) => {

        // loop over text and get the first 80 characters from start positions (start = x)
        let text = arry.slice(start, wrapFunction(wrap, arry));

        //append text into a file and insert new line char
        fs.appendFile('./test.txt', text.join('') + '\n', function (err) {
            if (err) throw err;

        });
        //update start position and wrap counter to default value
        start += 80;
        wrap += 80;

    })

    //[end itteration]


    /**
     * Using reccursion to call a function that will calculate new wrap index and start position
     * @param {int} wrap 
     * @param {Array} arry 
     * @returns {int} calculate wrap index
     */
    function wrapFunction(wrap, arry) {
        //check if wrap index || start is at end of file 
        if (wrap >= arry.length || start >= arry.length) {
            --wrap;
            --start
        }
        // check if wrap index is equal to whitespace 
        if (arry[wrap] === ' ') {
            --wrap; //decrement wrap and so that the word is not broken call function again
            wrapFunction(wrap, arry)

        } else {
            return wrap + 1 // return wrap index 
        }
    }
})
