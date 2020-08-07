var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
  ];

  const bubbleSort = (arr = [], props) => {
      for(let i = arr.length-1; i > 0; i--){
          for(let j = 0; j < i; j++){
              if(arr[j][props] < arr[j+1][props]){
                  let temp = arr[j]
                  arr[j] = arr[j+1]
                  arr[j+1] = temp
              }
          }
      }
      return arr
  }

  console.log(bubbleSort(arrProduct, 'stock'))