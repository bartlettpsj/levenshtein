const dl = require("damerau-levenshtein-js");
const args = process.argv;

if (args.length == 4) {
    const i = dl.distance(args[2], args[3]);
    console.log(`Distance "${args[2]}" from "${args[3]}" is ${i}`);
} else {
    console.error('Wrong number of arguments - expect 2');
}