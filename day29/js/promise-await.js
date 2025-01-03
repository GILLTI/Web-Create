//11번

// async function getName() {
//   return "짱구";  
// }

// async function printName() {
//   const name = await getName();
//   console.log(name);
// }

// printName();

async function fetchData() {
  //2초후에 데이터를 반환하는 비동기함수
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve("데이터 로드 완료");
    }, 2000);
  });
}

async function printData() {
  const data = await fetchData();
  console.log(data);
}

printData();