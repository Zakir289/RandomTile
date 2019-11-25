

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default function generateTiles() {
    let tiles = [];
    for (let i = 0; i < 30; i++) {
        tiles.push({
            width: 200,
            height: Math.floor(Math.random() * Math.floor(300)),
            backgroundColor: getRandomColor()
        })
        localStorage.setItem('tiles',JSON.stringify(tiles));
    }
}
