import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し表示
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素に要素を追加
  div.appendChild(li);

  // 未完了のリストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
