function rgb(r, g, b){
function hex(meaning) {
if (meaning  > 255) {
meaning = 255;
} else if (meaning < 0) {
meaning = 0;
}
return meaning.toString(16).padStart(2, 0).toUpperCase();
}
return hex(r) + hex(g) + hex(b);
}
console.log(rgb(148, 0, 211))
console.log(rgb(255, 255, 255))
console.log(rgb(0,0,0))
