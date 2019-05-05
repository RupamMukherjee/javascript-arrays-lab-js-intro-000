var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
var array = new Array()
array = kittens

function destructivelyAppendKitten(name)
{
  kittens = [...kittens, name]
  return kittens
}
kittens = array
function destructivelyPrependKitten(name)
{
  kittens = [name, ...array]
  return kittens
}

function destructivelyRemoveLastKitten() {
  var array = new Array()
  array = kittens
  array = array.slice(0, array.length-1)
  return array
}

function destructivelyRemoveFirstKitten(){
  var array = new Array()
  array = kittens
  array = array.slice(1)
  return array
}

function appendKitten(name){
  return [...kittens, name]
}
