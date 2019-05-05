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
  kittens = [name, ...kittens]
  return kittens
}
kittens = array

function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0, kittens.length-1)
  return kittens
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
