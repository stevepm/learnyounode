args = process.argv.splice(2,process.argv.length);
var count = 0;
for(var number in args){
    count = count + +args[number];
}
console.log(count);