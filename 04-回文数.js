
    var isPalindrome = function(x) {
    if(x <= 0 || parseInt(x % 10) === 0) return false;
    let n = x;
    let res = 0;
    while(n) {
      res = res * 10 + n % 10;
      n = parseInt(n / 10)
    }
    return res === x
  }
    console.log(isPalindrome(52025));
