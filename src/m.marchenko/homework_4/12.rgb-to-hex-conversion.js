function rgb(r, g, b){
	return hex(r) + hex(g) + hex(b)
}

function hex(index) {
    if (index > 255) {
        return "FF"
    }
    if (index < 0) {
        return "00"
    }
    return ("0" + (Number(index).toString(16))).slice(-2).toUpperCase()
}

console.log(rgb(300,255,255));
console.log(rgb(173,255,47));