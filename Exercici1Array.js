function arrayColors() {
    let colors = ["verd", "vermell", "groc", "blau", "negre", "blanc"];

    let menorQueMarro = colors.filter(color => color < "marró");
    let totsMenorsQueMarro = menorQueMarro.length === colors.length;

    let ultimsDosColors = colors.slice(-2);
    colors.push("turquesa");
    let index = colors.indexOf("verd");
    if (index > -1) {
        colors.splice(index, 1);
    }

    document.write("Tots els colors són menors que marró: " + totsMenorsQueMarro + "<br>");
    document.write("Colors que són menors que marró: " + menorQueMarro.join(", ") + "<br>");
    document.write("Els darrers 2 colors: " + ultimsDosColors.join(", ") + "<br>");
    document.write("Colors després d'afegir turquesa i eliminar verd: " + colors.join(", "));
}
function funcionsArray() {
    let colors = ["verd", "vermell", "groc", "blau", "negre", "blanc"];
    document.write("<h1>Exemples de funcions de Arrays</h1>");
    // at()
    document.write('<p>' + "at() ->" + " Retorna l'element d'un array en una posició determinada. ->" + " Exemple: colors.at(2) -> " + colors.at(2) + '</p>');
    // concat()
    document.write('<p>' + "concat() ->" + " Uneix arrays i retorna un array amb els arrays units. ->" + " Exemple: colors.concat(['marró', 'rosa']) ->" + colors.concat(["marró", "rosa"]) + '</p>');
    // constructor
    document.write('<p>' + "constructor ->" + " Retorna la funció que va crear el prototip de l'objecte Array. ->" + " Exemple: colors.constructor -> " + colors.constructor + '</p>');
    // copyWithin()
    document.write('<p>' + "copyWithin() ->" + " Copia elements d'un array dins del mateix array, des i cap a posicions especificades. ->" + " Exemple: colors.copyWithin(0, 3, 5) -> " + colors.copyWithin(0, 3, 5) + '</p>');
    // entries()
    document.write('<p>' + "entries() ->" + " Retorna un objecte d'iteració d'array amb parells clau/valor. ->" + " Exemple: colors.entries() -> " + colors.entries() + '</p>');
    // every() 
    document.write('<p>' + "every() ->" + " Comprova si tots els elements d'un array passen una prova. ->" + " Exemple: colors.every(color => color.length > 3) -> " + colors.every(color => color.length > 3) + '</p>');
    // fill()
    document.write('<p>' + "fill() ->" + " Omple els elements d'un array amb un valor estàtic. ->" + " Exemple: colors.fill('gris') -> " + colors.fill('gris') + '</p>');
    // filter()
    document.write('<p>' + "filter() ->" + " Crea un nou array amb cada element d'un array que passa una prova. ->" + " Exemple: colors.filter(color => color < 'marró') -> " + colors.filter(color => color < 'marró') + '</p>');
    // find()
    document.write('<p>' + "find() ->" + " Retorna el valor del primer element d'un array que passa una prova. ->" + " Exemple: colors.find(color => color.startsWith('v')) -> " + colors.find(color => color.startsWith('v')) + '</p>');
    // findIndex()
    document.write('<p>' + "findIndex() ->" + " Retorna l'índex del primer element d'un array que passa una prova. ->" + " Exemple: colors.findIndex(color => color.endsWith('l')) -> " + colors.findIndex(color => color.endsWith('l')) + '</p>');
    // flat() 
    document.write('<p>' + "flat() ->" + " Concatena els elements dels sub-arrays. ->" + " Exemple: [colors, ['marró', 'rosa']].flat() -> " + [colors, ['marró', 'rosa']].flat() + '</p>');
    // flatMap()
    document.write('<p>' + "flatMap() ->" + " Mapeja tots els elements d'un array i crea un nou array pla. ->" + " Exemple: colors.flatMap(color => [color, color.toUpperCase()]) -> " + colors.flatMap(color => [color, color.toUpperCase()]) + '</p>');
    // forEach() 
    document.write('<p>' + "forEach() ->" + " Crida una funció per a cada element d'un array. ->" + " Exemple: colors.forEach(color => document.write(color + ' ')) -> ");
    colors.forEach(color => document.write(color + ' '));
    document.write('</p>');
    // from()
    document.write('<p>' + "from() ->" + " Crea un array a partir d'un objecte. ->" + " Exemple: Array.from('Hola') -> " + Array.from('Hola') + '</p>');
    // includes()
    document.write('<p>' + "includes() ->" + " Comprova si un array conté l'element especificat. ->" + " Exemple: colors.includes('vermell') -> " + colors.includes('vermell') + '</p>');
    // indexOf()
    document.write('<p>' + "indexOf() ->" + " Cerca l'array per a un element i retorna la seva posició. ->" + " Exemple: colors.indexOf('blau') -> " + colors.indexOf('blau') + '</p>');
    // isArray()
    document.write('<p>' + "isArray() ->" + " Comprova si un objecte és un array. ->" + " Exemple: Array.isArray(colors) -> " + Array.isArray(colors) + '</p>');
    // join()
    document.write('<p>' + "join() ->" + " Uneix tots els elements d'un array en una cadena. ->" + " Exemple: colors.join(', ') -> " + colors.join(', ') + '</p>');
    // keys()
    document.write('<p>' + "keys() ->" + " Retorna un objecte d'iteració d'array, que conté les claus de l'array original. ->" + " Exemple: colors.keys() -> " + colors.keys() + '</p>');
    // lastIndexOf()
    document.write('<p>' + "lastIndexOf() ->" + " Cerca l'array per a un element, començant pel final, i retorna la seva posició. ->" + " Exemple: colors.lastIndexOf('gris') -> " + colors.lastIndexOf('gris') + '</p>');
    // length 
    document.write('<p>' + "length ->" + " Estableix o retorna el nombre d'elements d'un array. ->" + " Exemple: colors.length -> " + colors.length + '</p>');
    // map() 
    document.write('<p>' + "map() ->" + " Crea un nou array amb el resultat de cridar una funció per a cada element d'un array. ->" + " Exemple: colors.map(color => color.length) -> " + colors.map(color => color.length) + '</p>');
    // pop()
    document.write('<p>' + "pop() ->" + " Elimina l'últim element d'un array, i retorna aquest element. ->" + " Exemple: colors.pop() -> " + colors.pop() + '</p>');
    // prototype
    document.write('<p>' + "prototype ->" + " Permet afegir propietats i mètodes a un objecte Array. ->" + " Exemple: Array.prototype.first = function() { return this[0]; }; colors.first() -> ");
    Array.prototype.first = function() { return this[0]; };
    document.write(colors.first() + '</p>');
    // push()
    document.write('<p>' + "push() ->" + " Afegeix nous elements al final d'un array, i retorna la nova longitud. ->" + " Exemple: colors.push('turquesa') -> " + colors.push('turquesa') + '</p>');
    // reduce() 
    document.write('<p>' + "reduce() ->" + " Redueix els valors d'un array a un sol valor (anant d'esquerra a dreta). ->" + " Exemple: colors.reduce((a, b) => a + b) -> " + colors.reduce((a, b) => a + b) + '</p>');
    // reduceRight()
    document.write('<p>' + "reduceRight() ->" + " Redueix els valors d'un array a un sol valor (anant de dreta a esquerra). ->" + " Exemple: colors.reduceRight((a, b) => a + b) -> " + colors.reduceRight((a, b) => a + b) + '</p>');
    // reverse()
    document.write('<p>' + "reverse() ->" + " Inverteix l'ordre dels elements d'un array. ->" + " Exemple: colors.reverse() -> " + colors.reverse() + '</p>');
    // shift()
    document.write('<p>' + "shift() ->" + " Elimina el primer element d'un array, i retorna aquest element. ->" + " Exemple: colors.shift() -> " + colors.shift() + '</p>');
    // slice() 
    document.write('<p>' + "slice() ->" + " Selecciona una part d'un array, i retorna el nou array. ->" + " Exemple: colors.slice(1, 3) -> " + colors.slice(1, 3) + '</p>');
    // some() 
    document.write('<p>' + "some() ->" + " Comprova si algun dels elements d'un array passa una prova. ->" + " Exemple: colors.some(color => color.length < 4) -> " + colors.some(color => color.length < 4) + '</p>');
    // sort() 
    document.write('<p>' + "sort() ->" + " Ordena els elements d'un array. ->" + " Exemple: colors.sort() -> " + colors.sort() + '</p>');
    // splice() 
    document.write('<p>' + "splice() ->" + " Afegeix/Elimina elements d'un array. ->" + " Exemple: colors.splice(2, 1, 'lila') -> " + colors.splice(2, 1, 'lila') + '</p>');
    // toString() 
    document.write('<p>' + "toString() ->" + " Converteix un array en una cadena, i retorna el resultat. ->" + " Exemple: colors.toString() -> " + colors.toString() + '</p>');
    // unshift() 
    document.write('<p>' + "unshift() ->" + " Afegeix nous elements al principi d'un array, i retorna la nova longitud. ->" + " Exemple: colors.unshift('taronja') -> " + colors.unshift('taronja') + '</p>');
    // valueOf() 
    document.write('<p>' + "valueOf() ->" + " Retorna el valor primitiu d'un array. ->" + " Exemple: colors.valueOf() -> " + colors.valueOf() + '</p>');
}