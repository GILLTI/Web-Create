// 6번 : 동기

function func1(){
  console.log("함수1실행");
  func2();
}

function func2(){
  console.log("함수2실행");
  func3();
}

function func3(){
  console.log("함수3실행");
}

func1();