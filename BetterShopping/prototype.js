function addItem() {
    var layout = document.createElement("div");
    var elementItem = document.createElement("p");
    var elementPrice = document.createElement("p");
    var worsePrice =  document.createElement("p");

    var itemText = document.getElementById("product-name").value.trim();
    elementItem.innerHTML = itemText;
    elementItem.classList.add("item-name");

    var itemPrice = Math.floor((Math.random() * 9) + 1);    
    elementPrice.innerHTML = itemPrice + "&euro;";
    elementPrice.classList.add("item-price");

    var getWorsePrice = Math.floor((Math.random() * 9) + 1);
    while (itemPrice > getWorsePrice) {
        getWorsePrice = Math.floor((Math.random() * 9) + 1);
    }
    worsePrice.innerHTML = getWorsePrice + "&euro;";
    worsePrice.classList.add("worse-item-price");
       

    layout.appendChild(elementItem);
    layout.appendChild(elementPrice);
    layout.appendChild(worsePrice);

    document.getElementById("prototypeList").appendChild(layout);
    document.getElementById("product-name").value = "";

}



window.onload=function() {
    var input = document.getElementById("product-name");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addBtn").click();
        }
    });
}