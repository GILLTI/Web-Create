let $slideBox = $(".slide-box");
let $slideImgs = $(".slide-img");

//슬라이드 박스 너비, 인덱스번호, 총 슬라이드 이미지 수
let slideWidth = 800;
let currentIdx = 0;
let slideCnt = $slideImgs.length;
// console.log(slideCnt);

let slideInterval;

//자동 슬라이드 시작함수
function startSlide(){
  slideInterval = setInterval(function(){
    //다음 슬라이드로 이동하는 함수 호출
    moveNext();
  }, 3000);
}

startSlide();

//자동 슬라이드 중지함수
function stopSlide(){
  clearInterval(slideInterval);
}

//다음 슬라이드로 이동하는 함수
function moveNext(){
  currentIdx++;
  //마직막 슬라이드에 도달하면 맨 첫번째 슬라이드로 이동
  if(currentIdx >= slideCnt){
    currentIdx = 0;
  }

  $slideBox.css("left", -(currentIdx * slideWidth) + "px");
  $slideBox.css("trasition", "0.5s ease");
  //함수호출
  checkEnd();
}

//이전 슬라이드로 이동하는 함수
function movePrev(){
  currentIdx--;
  $slideBox.css("left", -(currentIdx * slideWidth) + "px");
  $slideBox.css("trasition", "0.5s ease");
  //함수호출
  checkEnd();
}

//슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시 or 숨김처리
function checkEnd(){
  $(".prev").css("display", currentIdx <= 0 ? "none":"block");
  $(".next").css("display", currentIdx >= slideCnt - 1 ? "none" : "block");
}