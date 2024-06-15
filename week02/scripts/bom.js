const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        
        li.appendChild(deleteButton);
        list.appendChild(li);
        
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
        });

        input.value = "";
        input.focus();
    } else {
        alert("Please enter a verse.");
        input.focus();
    }
});
