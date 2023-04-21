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
  //초기 설정 : 전체 체크로 시작.
  localStorage.getItem("card_data") === null &&
    localStorage.setItem("card_data", JSON.stringify(DATA_LIST));
  allDataList = JSON.parse(localStorage.getItem("card_data"));
  document.getElementById("check_all").checked = true;

  showDataList = allDataList;
  makeCard(showDataList); //카드 보여주기 함수 작동
  makeCheckedTag(checkBoxAll);
  makeModal();
};

const checkBox = document.getElementsByClassName("nav_check");
const checkBoxList = [...checkBox];

//체크박스의 변화를 감지
checkBoxList.forEach((item) => {
  item.addEventListener("change", () => {
    showDataList = manageCheckBox(
      item.checked,
      TAG_NAME[item.id],
      showDataList
    );
    makeCard(showDataList); //반환된 list로 카드 보여주기
    makeCheckedTag(item);
    makeModal();
  });
});

//체크박스에 상태에 따라 리스트를 조정하여 반환
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

    let content = cardTemplate.cloneNode(true);
    let newHtml = content.innerHTML;
    newHtml = newHtml //html을 변경
      .replace("{card_name}", item.name)
      .replace("{card_tags}", tags)
      .replace("{modal_tags}", tags)
      .replace("{card_alt}", item.name)
      .replace("{card_img}", item.img);

    content.innerHTML = newHtml; //html 변경 후 적용
    cardsSection.appendChild(content.content);
  });
}

//모달 함수
function makeModal() {
  const tagPlsBtn = document.getElementsByClassName("cards_tag_btn");
  const tagPlsBtnList = [...tagPlsBtn];
  tagPlsBtnList.forEach((item) => {
    item.addEventListener("click", () => {
      const modal = item.parentNode.parentNode.firstElementChild;
      modal.style.display = "flex";
    });
  });

  const tagClsBtn = document.getElementsByClassName("tag_cls_btn");
  const tagClsBtnList = [...tagClsBtn];
  tagClsBtnList.forEach((item) => {
    item.addEventListener("click", () => {
      const modal = item.parentNode.parentNode;
      modal.style.display = "none";
    });
  });
}

//카테고리 태그 관리
const tagsSection = document.getElementById("checked_tags");
const tagsTemplate = document.getElementById("checked_tags_template");

function makeCheckedTag(checkBox) {
  if (checkBox.checked) {
    let content = tagsTemplate.cloneNode(true);
    let newHtml = content.innerHTML;
    newHtml = newHtml
      .replace("{checked_tag_name}", TAG_NAME[checkBox.id])
      .replace("{checkbox_id}", checkBox.id)
      .replace("{checkbox_tag_id}", "tag_" + checkBox.id);
    content.innerHTML = newHtml;
    tagsSection.appendChild(content.content);
  } else {
    const target = document.getElementById("tag__" + checkBox.id);
    target.delete;
  }
}
