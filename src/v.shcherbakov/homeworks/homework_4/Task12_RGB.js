function rgb(r, g, b) {

    function rgb16(color) {
        if (color < 0) {
            color = 0;
        } else if (color > 255) {
            color = 255;
        }
        return color.toString(16).padStart(2, 0).toUpperCase()
    }

    return rgb16(r) + rgb16(g) + rgb16(b);
}

console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));