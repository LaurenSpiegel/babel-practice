

export const PI = 3.141592;
  
  var _sqrt = function(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
  };
  export let sqrt = function(s){
    return _sqrt(s, s/2.0, 0.0);
  };
  export let square = function(x) {
    return x * x;
  };


  // ────────────────────────────────────────────────────────────────────────────────
  // solution.js:

  //     var arg1 = process.argv[2];
  //     var arg2 = process.argv[3];
      
  //     import {PI, sqrt, square} from './solution-math';
  //     console.log(PI);
  //     console.log(sqrt(+arg1));
  //     console.log(square(+arg2));

  // ────────────────────────────────────────────────────────────────────────────────