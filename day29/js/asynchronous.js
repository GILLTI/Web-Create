// 7번 : 비동기

function func1(){
  console.log("함수1실행");
  func2();
}

function func2(){
  setTimeout(function () {
    console.log("함수2실행");
  }, 1000); //1초
  func3();
}

function func3(){
  setTimeout(function(){
    console.log("함수3실행");
  }, 500); //0.5초
}

func1();