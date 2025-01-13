function randomNumbers(range) {
    let numArr = [];
    for (let i = 0; i < 12; i++) {
      let randomNum = Math.floor(Math.random() * range + 1);
      if (!numArr.includes(randomNum)) {
        numArr.push(randomNum);
      } else {
        while (numArr.includes(randomNum)) {
          randomNum = Math.floor(Math.random() * range + 1);
        }
        numArr.push(randomNum);
      }
    }
    return numArr;
  }
  
  export default randomNumbers;