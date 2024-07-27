function lens(arr) {
    return arr.map(string=> string.length )
  }
  
  const inputStrings = ["apple", "banana", "cherry","977"];
  const outputLengths = lens(inputStrings);
  console.log(outputLengths);  
  
  