// Add your code here



var lyricsGenerator = (arr) => {

    var aux = 0;
    var lyric = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            aux = 0;
            lyric += "Boom ";
        }
        else if (arr[i] == 1 && aux != 2) {
            aux++;
            lyric += "Drop the Base ";
        }

        else if (arr[i] == 1 && aux == 2) {
            aux=0;
            lyric += "!!!Break the Base!!!";
        }

    }
    return lyric;
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))