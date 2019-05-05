var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name)
{
  var array = new Array()
  array = kittens
  array = [...array, name]
  return array
}

function destructivelyPrependKitten(name)
{
  var array = new Array()
  array = kittens
  array = [name, ...array]
  return array
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

}
