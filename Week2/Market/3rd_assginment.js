import DATA_LIST from "./data.js";

let showDataList = []; //카드로 보여주는 데이터 모음
let allDataList = []; //모든 로컬 데이터 저장소

window.onload = () => {
  localStorage.getItem("card_data") === null &&
    localStorage.setItem("card_data", JSON.stringify(DATA_LIST)); //로컬 초기화
  allDataList = JSON.parse(localStorage.getItem("card_data")); //로컬에 저장된 목록을 가져옴
  document.getElementById("check_all").checked = true; //전체 카테고리 디폴트로 체크

  showDataList = allDataList; //모든 데이터 카드로 보여주는 리스트에 저장
  makeCard(showDataList); //카드 보여주기 함수 작동
};

//화면에 보여주기
const cardsSection = document.getElementById("cards");
const cardTemplate = document.getElementById("cards_template");

//리스트로 카드 만드는 함수
function makeCard(list) {
  cardsSection.replaceChildren();
  list.forEach((item) => {
    let tags = ``;
    item.tags.forEach((tag) => {
      tags += `<p>` + tag + `</p>\n`; //태그 제작
    });

    let content = cardTemplate.cloneNode(true); //템플릿 복사
    let newHtml = content.innerHTML; //템플릿 안의 html 복사
    newHtml = newHtml //복사한 html을 변경
      .replace("{card_name}", item.name)
      .replace("{card_tags}", tags)
      .replace("{card_alt}", item.name)
      .replace("{card_img}", item.img);

    content.innerHTML = newHtml; //새롭게 바뀐 html을 다시 템플릿에 적용
    cardsSection.appendChild(content.content); //부모노드에 넣기
  });
}
