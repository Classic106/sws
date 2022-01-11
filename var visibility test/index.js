var a = 1;

function foo() {
  var a = 2;

  var result = function () {
    console.log(a); //2
    console.log(this.a); //4
    console.log(result.a); //3
  };

  result.a = 3;
  return result;
}

var bar = foo().bind({ a: 4 });

bar();
