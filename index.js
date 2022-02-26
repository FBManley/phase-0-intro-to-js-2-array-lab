const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(broom){
var newCats = [...cats];
newCats.push(broom)
return newCats}
function prependCat(lucky){
    var otherCats = [...cats];
    otherCats.unshift(lucky)
    return otherCats
}
function removeLastCat(){
    return cats.slice(0, 2)
}
function removeFirstCat(){
    return cats.slice(1)
}