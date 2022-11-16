// function sum(a,b){
// return parseInt(a)+parseInt(b);
// }



function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  export default forEach;