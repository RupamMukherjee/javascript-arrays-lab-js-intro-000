var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(array, ele)
{
  array = [...array, ele]
  return array
}

function destructivelyPrependKitten(array, ele)
{
  array.unshift(ele)
  return array
}

function destructivelyRemoveLastKitten(array) {
  array.pop()
  return array
}

function destructivelyRemoveFirstKitten(array){
  array
}
