var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var newItem1 = document.getElementById("select1").value;
  // console.log(item.value);
  // console.log(select1.value);
  var newItem2 = document.getElementById("select2").value;
  // console.log(select2.value);
  var li = document.createElement("li");
  li.className = "list-group-item fs-3 bg-dark text-white";
  li.append(
    document.createTextNode([
      newItem +
        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
        newItem1 +
        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
        newItem2,
    ])
  );
  var delBtn = document.createElement("button");
  delBtn.classList = "btn btn-danger float-end delete";
  delBtn.appendChild(document.createTextNode("X"));
  li.appendChild(delBtn);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
