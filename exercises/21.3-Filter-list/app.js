let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
var filterByName = (arreglo, busqueda) =>{
    var filtrados=[]
    for (let i= 0; i < arreglo.length ; i++){
        let nombreenminusculas = arreglo[i].toLowerCase()
       // console.log(nombreenminusculas);
        if (nombreenminusculas.includes(busqueda)) filtrados.push(arreglo[i]);
        }
return filtrados;
}

console.log(filterByName(names, 'am'));