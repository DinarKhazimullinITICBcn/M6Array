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
    document.write("at() ->");
    document.write(" Retorna l'element d'un array en una posició determinada. ->");
    document.write(" Exemple: colors.at(2) -> " + colors.at(2) + "<br>");
    // concat()
    document.write("concat() ->");
    document.write(" Uneix arrays i retorna un array amb els arrays units. ->");
    document.write(" Exemple: colors.concat(['marró', 'rosa']) ->" + colors.concat(["marró", "rosa"]) + "<br>");
    // constructor
    document.write("constructor ->");
    document.write(" Retorna la funció que va crear el prototip de l'objecte Array. ->");
    document.write(" Exemple: colors.constructor -> " + colors.constructor + "<br>");
    // copyWithin()
    document.write("copyWithin() ->");
    document.write(" Copia elements d'un array dins del mateix array, des i cap a posicions especificades. ->");
    document.write(" Exemple: colors.copyWithin(0, 3, 5) -> " + colors.copyWithin(0, 3, 5) + "<br>");
    // entries()
    document.write("entries() ->");
    document.write(" Retorna un objecte d'iteració d'array amb parells clau/valor. ->");
    document.write(" Exemple: colors.entries() -> " + colors.entries() + "<br>");
    // every() 
    document.write("every() ->");
    document.write(" Comprova si tots els elements d'un array passen una prova. ->");
    document.write(" Exemple: colors.every(color => color.length > 3) -> " + colors.every(color => color.length > 3) + "<br>");
    // fill()
    document.write("fill() ->");
    document.write(" Omple els elements d'un array amb un valor estàtic. ->");
    document.write(" Exemple: colors.fill('gris') -> " + colors.fill('gris') + "<br>");
    // filter()
    document.write("filter() ->");
    document.write(" Crea un nou array amb cada element d'un array que passa una prova. ->");
    document.write(" Exemple: colors.filter(color => color < 'marró') -> " + colors.filter(color => color < 'marró') + "<br>");
    // find()
    document.write("find() ->");
    document.write(" Retorna el valor del primer element d'un array que passa una prova. ->");
    document.write(" Exemple: colors.find(color => color.startsWith('v')) -> " + colors.find(color => color.startsWith('v')) + "<br>");
    // findIndex()
    document.write("findIndex() ->");
    document.write(" Retorna l'índex del primer element d'un array que passa una prova. ->");
    document.write(" Exemple: colors.findIndex(color => color.endsWith('l')) -> " + colors.findIndex(color => color.endsWith('l')) + "<br>");
    // flat() 
    document.write("flat() ->");
    document.write(" Concatena els elements dels sub-arrays. ->");
    document.write(" Exemple: [colors, ['marró', 'rosa']].flat() -> " + [colors, ['marró', 'rosa']].flat() + "<br>");
    // flatMap()
    document.write("flatMap() ->");
    document.write(" Mapeja tots els elements d'un array i crea un nou array pla. ->");
    document.write(" Exemple: colors.flatMap(color => [color, color.toUpperCase()]) -> " + colors.flatMap(color => [color, color.toUpperCase()]) + "<br>");
    // forEach() 
    document.write("forEach() ->");
    document.write(" Crida una funció per a cada element d'un array. ->");
    document.write(" Exemple: colors.forEach(color => document.write(color + ' ')) -> ");
    colors.forEach(color => document.write(color + ' '));
    document.write("<br>");
    // from()
    document.write("from() ->");
    document.write(" Crea un array a partir d'un objecte. ->");
    document.write(" Exemple: Array.from('Hola') -> " + Array.from('Hola') + "<br>");
    // includes()
    document.write("includes() ->");
    document.write(" Comprova si un array conté l'element especificat. ->");
    document.write(" Exemple: colors.includes('vermell') -> " + colors.includes('vermell') + "<br>");
    // indexOf()
    document.write("indexOf() ->");
    document.write(" Cerca l'array per a un element i retorna la seva posició. ->");
    document.write(" Exemple: colors.indexOf('blau') -> " + colors.indexOf('blau') + "<br>");
    // isArray()
    document.write("isArray() ->");
    document.write(" Comprova si un objecte és un array. ->");
    document.write(" Exemple: Array.isArray(colors) -> " + Array.isArray(colors) + "<br>");
    // join()
    document.write("join() ->");
    document.write(" Uneix tots els elements d'un array en una cadena. ->");
    document.write(" Exemple: colors.join(', ') -> " + colors.join(', ') + "<br>");
    // keys()
    document.write("keys() ->");
    document.write(" Retorna un objecte d'iteració d'array, que conté les claus de l'array original. ->");
    document.write(" Exemple: colors.keys() -> " + colors.keys() + "<br>");
    // lastIndexOf()
    document.write("lastIndexOf() ->");
    document.write(" Cerca l'array per a un element, començant pel final, i retorna la seva posició. ->");
    document.write(" Exemple: colors.lastIndexOf('gris') -> " + colors.lastIndexOf('gris') + "<br>");
    // length 
    document.write("length ->");
    document.write(" Estableix o retorna el nombre d'elements d'un array. ->");
    document.write(" Exemple: colors.length -> " + colors.length + "<br>");
    // map() 
    document.write("map() ->");
    document.write(" Crea un nou array amb el resultat de cridar una funció per a cada element d'un array. ->");
    document.write(" Exemple: colors.map(color => color.length) -> " + colors.map(color => color.length) + "<br>");
    // pop()
    document.write("pop() ->");
    document.write(" Elimina l'últim element d'un array, i retorna aquest element. ->");
    document.write(" Exemple: colors.pop() -> " + colors.pop() + "<br>");
    // prototype
    document.write("prototype ->");
    document.write(" Permet afegir propietats i mètodes a un objecte Array. ->");
    document.write(" Exemple: Array.prototype.first = function() { return this[0]; }; colors.first() -> ");
    Array.prototype.first = function() { return this[0]; };
    document.write(colors.first() + "<br>");
    // push()
    document.write("push() ->");
    document.write(" Afegeix nous elements al final d'un array, i retorna la nova longitud. ->");
    document.write(" Exemple: colors.push('turquesa') -> " + colors.push('turquesa') + "<br>");
    // reduce() 
    document.write("reduce() ->");
    document.write(" Redueix els valors d'un array a un sol valor (anant d'esquerra a dreta). ->");
    document.write(" Exemple: colors.reduce((a, b) => a + b) -> " + colors.reduce((a, b) => a + b) + "<br>");
    // reduceRight()
    document.write("reduceRight() ->");
    document.write(" Redueix els valors d'un array a un sol valor (anant de dreta a esquerra). ->");
    document.write(" Exemple: colors.reduceRight((a, b) => a + b) -> " + colors.reduceRight((a, b) => a + b) + "<br>");
    // reverse()
    document.write("reverse() ->");
    document.write(" Inverteix l'ordre dels elements d'un array. ->");
    document.write(" Exemple: colors.reverse() -> " + colors.reverse() + "<br>");
    // shift()
    document.write("shift() ->");
    document.write(" Elimina el primer element d'un array, i retorna aquest element. ->");
    document.write(" Exemple: colors.shift() -> " + colors.shift() + "<br>");
    // slice() 
    document.write("slice() ->");
    document.write(" Selecciona una part d'un array, i retorna el nou array. ->");
    document.write(" Exemple: colors.slice(1, 3) -> " + colors.slice(1, 3) + "<br>");
    // some() 
    document.write("some() ->");
    document.write(" Comprova si algun dels elements d'un array passa una prova. ->");
    document.write(" Exemple: colors.some(color => color.length < 4) -> " + colors.some(color => color.length < 4) + "<br>");
    // sort() 
    document.write("sort() ->");
    document.write(" Ordena els elements d'un array. ->");
    document.write(" Exemple: colors.sort() -> " + colors.sort() + "<br>");
    // splice() 
    document.write("splice() ->");
    document.write(" Afegeix/Elimina elements d'un array. ->");
    document.write(" Exemple: colors.splice(2, 1, 'lila') -> " + colors.splice(2, 1, 'lila') + "<br>");
    // toString() 
    document.write("toString() ->");
    document.write(" Converteix un array en una cadena, i retorna el resultat. ->");
    document.write(" Exemple: colors.toString() -> " + colors.toString() + "<br>");
    // unshift() 
    document.write("unshift() ->");
    document.write(" Afegeix nous elements al principi d'un array, i retorna la nova longitud. ->");
    document.write(" Exemple: colors.unshift('taronja') -> " + colors.unshift('taronja') + "<br>");
    // valueOf() 
    document.write("valueOf() ->");
    document.write(" Retorna el valor primitiu d'un array. ->");
    document.write(" Exemple: colors.valueOf() -> " + colors.valueOf() + "<br>");
}