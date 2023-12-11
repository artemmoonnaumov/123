function pr() {
    var n = document.forms["s"].elements["n"].value;
    var arr = n.split(" ");
    var arr2 = [];
    var k = document.forms["s"].elements["k"].value;
    var sum = 0;
  
    for(var j = 0; j < arr.length; j++) {
      arr2[j] = +arr[j];
    }
  
    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i] % k === 0) {
        sum += arr2[i];
      }
    }
  
    document.writeln("Сумма элементов, кратных " + k + ": " + sum);
  }