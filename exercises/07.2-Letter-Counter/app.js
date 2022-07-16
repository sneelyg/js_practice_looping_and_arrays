let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};


// your code here
for (const letra of par) {
    let aux = letra.toLowerCase();
    // console.log(aux);

    /*if (aux != ' ') {
        if (aux in counts) { counts.aux += 1 }
        else counts.aux = 1
    }*/

   if (aux != ' ') {
        if (aux in counts) { counts[aux] += 1 }
        else counts[aux] = 1
    }

}


console.log(counts);