var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(ele)
{
  var array = new Array()
  array = [...array, ele]
  return array
}

function destructivelyPrependKitten(ele)
{
  var array = new Array()
  array = [ele, ...array]
  return array
}

function destructivelyRemoveLastKitten() {
  var array = new Array()
  array = array.slice(0, array.length-1)
  return array
}

function destructivelyRemoveFirstKitten(){
  var array = new Array()
  array = array.slice(1)
  return array
}
