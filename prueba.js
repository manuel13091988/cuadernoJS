//metodo funcional de Armando 
function bubbleSort(array) {
    let intercambio;
    do {
      intercambio = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          intercambio = true;
        }
      }
    } while (intercambio);
    return array;
    }

// modelo funcional de percy 
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let i = 0;
  let ordenar = array.length ;
  // itera con 
  while (ordenar > 0 ) {

      if(array[i] > array[i+1]){
        console.log(array)
          let a = array[i+1];
          array[i+1] = array[i]
          array[i] = a;

      } console.log(array)
        i++
          if(i == ordenar){
           ordenar--;
           i = 0;
        }
      }
      return array;
}
var array= [4,51,7,5,8,5,7,6,7,3,1,9] 
console.log(bubbleSort(array))

// prototipo 1;
function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let ordenar = array.lenght-1;
    for (let i = 0; i < ordenar;i++) {
    if(array[i] < array[i+1]) {
      let a = array[i];
      array[i] = array[i+1] 
      array[i+1] = a;
    } else if (!array[i+1]) {
      ordenar--;
      while (ordenar < 0) {
      if (array[i] < 0) {
        a = array[i+1];
      }
    }
  }
  }
  }

 // modelo funcional del metodo margeSort
  function margeSort(arr){
    if (arr.length === 1){
        return arr; 
    }
    
    const middle = Math.floor(arr.length /2)
    const left = arr.slice(0, middle);
    const rigth = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(rigth));
}    
    function merge(left, rigth){
    let result = [];
    let leftIndex = 0;
    let rigthIndex = 0;

    while(leftIndex < left.length && rigthIndex < rigth.length){
        if(left[leftIndex] < rigth[rigthIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(rigth[rigthIndex]);
            rigthIndex++;
        }    

    }
    return [...result, ...left.slice(leftIndex), ...rigth.slice(rigthIndex)];
  }

  //modelo de felipe
  function bubbleSort(arr){
  var fñag = true;
  while(flag){
    flag = false
    for(let i = 0; i < arr.lenght; i++){
      if(array[i] > arr[i+1]){
        var aux = arr[i];
        array[i] = arr[i+1];
        array[i+1] = aux;
        flag = true;
        }
      }
    }
  return array;
  } 

  function insertionSort(arr){
  for(let i =1; i < arr.lenght; i++){
    var currentValue = array[i];
    let j
    for(let j = i-1; j >= 0 && array[j] > currentValue; j--){
      array[j+1] = array[j];
  }
    array[j+1] = currentValue;
  }
  return array;
  }

  function selectionSort(array){
   for(let i = 0; i < array.lenght -1; i++){ 
  let min = i;
  for (let j = i +1; j < array.lenght; j++){
    if(array[j] < array[min]){
    min = j;
    }
   
  if(i !== min){
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  }
  return array;
}
}

 
//quickSort
function divdeSegmentoQS(i, d){
  if (i < d) {
    return -1;
  }
  if (i > d) {
    return 1;
  }
  return 0; 
}

const quickSort = (
  unsortedArray,
  sortingAlgorithm = defaultSortingAlgorithm
) => {
  // immutable version
  const sortedArray = [...unsortedArray];

  const swapArrayElements = (arrayToSwap, i, j) => {
    const a = arrayToSwap[i];
    arrayToSwap[i] = arrayToSwap[j];
    arrayToSwap[j] = a;
  };

  const partition = (arrayToDivide, start, end) => {
    const pivot = arrayToDivide[end];
    let splitIndex = start;
    for (let j = start; j <= end - 1; j++) {
      const sortValue = sortingAlgorithm(arrayToDivide[j], pivot);
      if (sortValue === -1) {
        swapArrayElements(arrayToDivide, splitIndex, j);
        splitIndex++;
      }
    }
    swapArrayElements(arrayToDivide, splitIndex, end);
    return splitIndex;
  };

  // Recursively sort sub-arrays.
  const recursiveSort = (arraytoSort, start, end) => {
    // stop condition
    if (start < end) {
      const pivotPosition = partition(arraytoSort, start, end);
      recursiveSort(arraytoSort, start, pivotPosition - 1);
      recursiveSort(arraytoSort, pivotPosition + 1, end);
    }
  };

  // Sort the entire array.
  recursiveSort(sortedArray, 0, unsortedArray.length - 1);
  return sortedArray;
};

// idea de tranformar un LE en un arra 
// accesedemos al dato de la lista enlasada completa con el dato array.head
//  lista.head.value nos permite acceder al valor de head
// y para acceder al valor del node siguente lista1.head.next.value


function CmdLEenArray(lKlist){
  var array = [];
    let current = lKlist.head;
while(current !== null){
if(lKlist.head.value >= 0 && lKlist.head.next.value >= 0) {
  array.push(lKlist.head.value);
  array.push(lKlist.head.next.value);
} 
  if(lKlist.head.value <= 0 && lKlist.head.next.value === null) {
    array.push(lKlist.head.value);
  }
}
return array; 
}
 