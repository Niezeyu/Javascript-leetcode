
    var arrUnique = function(arr) {
      let res = []
      for(let i = 0; i < arr.length; i++) {
        if(res.indexOf(arr[i]) === -1) {
          res.push((arr[i]))
        }
      }
      return res
     }
     let arr = [11, 12, 1, 22, 11, 1, 12, 22, 11]
     console.log(arrUnique(arr));
