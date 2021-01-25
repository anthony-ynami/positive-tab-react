function changeColor() {
    let hue = 360 - Math.floor(Math.random() * 360); //gen hue between 0 and 360
    let saturation = 100 - Math.floor(Math.random() * 80); //full saturation
    let lightness = Math.floor(Math.random() * 75); //half lightness
    //putting it all together
    let hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    console.log(hsl)

    document.getElementById('body').style.backgroundColor = hsl;

}
changeColor();