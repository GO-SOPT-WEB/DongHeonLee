import DATA_LIST from "./data.js";

const TAG_NAME = {
  check_all: "전체",
  check_full: "풀프레임",
  check_crop: "크롭센서",
  check_ddok: "똑딱이",
  check_action: "액션캠",
};

let showDataList = []; //카드로 보여주는 데이터 모음
let allDataList = []; //모든 로컬 데이터 저장소

const checkBoxAll = document.getElementById("check_all");

window.onload = () => {
  localStorage.getItem("card_data") === null &&
    localStorage.setItem("card_data", JSON.stringify(DATA_LIST)); //로컬 초기화
  allDataList = JSON.parse(localStorage.getItem("card_data")); //로컬에 저장된 목록을 가져옴
  document.getElementById("check_all").checked = true; //전체 카테고리 디폴트로 체크

  showDataList = allDataList; //모든 데이터 카드로 보여주는 리스트에 저장
  makeCard(showDataList); //카드 보여주기 함수 작동
};

const checkBox = document.getElementsByClassName("nav_check");
const checkBoxList = [...checkBox];

checkBoxList.forEach((item) => {
  item.addEventListener("change", () => {
    showDataList = manageCheckBox(
      item.checked,
      TAG_NAME[item.id],
      showDataList
    );
    makeCard(showDataList); //반환된 list로 Card를 만들어 화면에 보여준다.
  });
});

function manageCheckBox(isChecked, tagName, list) {
  if (tagName === "전체") {
    isChecked
      ? allDataList.forEach((item) => {
          list.push(item);
          list = Array.from(new Set(list));
        })
      : checkBoxList.forEach((item) => {
          item.checked || (list = removeTag(list, TAG_NAME[item.id]));
        });
  } else {
    isChecked
      ? allDataList.forEach((item) => {
          item.tags.includes(tagName) &&
            (list.push(item), (list = Array.from(new Set(list))));
        })
      : checkBoxAll.checked || (list = removeTag(list, tagName));
    // 해당 카테고리에 속하는 item들을 list에서 제거
  }

  return list;
}

//list에서 tag에 tagname이 있는 아이템을 제거하는 함수
function removeTag(list, tagName) {
  list = list.filter((item) => item.tags.includes(tagName) === false);
  return list;
}

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
