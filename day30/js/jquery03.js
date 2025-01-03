let $boxes = $('.div-box');
// console.log($boxes);

// console.log($boxes[2]);
//jQuery 객체에서 인덱스를 사용하여 접근한 요소는 일반적인 DOM요소로 반환된다
//따라서 jQuery 객체가 아닌 순수 DOM 객체이다

// let element = $boxes[1];
// console.log(element);
// element.style.backgroundColor = "red";

// console.log($boxes.eq(2));
// $boxes.eq(2).css('background-color', "red");
//jquery 변수를 이용하여 css를 변경할 때는 .css()메소드를 사용한다

//jquery 이용하여 사용할것
//1. li태그 전체 가져오기
let $liTags = $('li');
console.log($liTags);

//2. 클래스 이름이 product인 태그 전체 가져오기
let $productTags = $('.product');
console.log($productTags);

//3. 자식 태그 중 첫번째 자식 가져오기(.children().first())
let $boxesChild = $('.div-box').children().first();
console.log($boxesChild);
//없는 값일 때 length : 0으로 출력된다

//4. ul 태그의 부모태그 가져오기
console.log($('ul').parent());

//5. li태그의 부모태그 가져오기
console.log($('li').parent());

//6. ul 태그 자식 중에서 0번째 인덱스 가져오기
console.log($('ul').children().eq(0));
console.log($('ul > li:first-child'));
console.log($('ul > li:nth-child(1)'));
console.log($('ul').find('li').first());

//7. ul 태그 자식 중에서 2번째 인덱스 가져오기
console.log($('ul').children().eq(2));
