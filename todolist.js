
document.addEventListener("DOMContentLoaded", function(event) {
    let addButton = document.querySelector(".btn");
    let input = document.querySelector(".userInput");
    let totalList = document.querySelector(".list-items");
    document.querySelector('.lolcalDate').innerHTML = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        
    });

    addButton.addEventListener("click", function(event) {
        if (input.value === "") {
            alert("Please enter text");
        } else if(input.value.length < 150) { 
            let itemList = document.createElement("li");
            itemList.className = "list";
            itemList.innerHTML = '<span class="radiobtn"><input class="radioBtn" type="checkbox"></span><span class="item-text">' + input.value + '</span><button class="cross">&#10060;</button>';
            totalList.appendChild(itemList);
            input.value = "";
        
           
            itemList.querySelector('.radioBtn').addEventListener("click", function(event) {
                let itemText = itemList.querySelector('.item-text');
                itemText.classList.toggle('checked');
                setDataToLocalStorage();
            });
            setDataToLocalStorage();
        }
        else{
            alert("This is To-List not a notepad kindly write text within 200 words Thank-You")
        }
    });

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") { 
            addButton.click();
        }
        setDataToLocalStorage();
    });

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("cross")) {
            event.target.parentElement.remove();
            setDataToLocalStorage();
        }
    });

    function setDataToLocalStorage() {
        localStorage.setItem("data", totalList.innerHTML);
    }

    function getDataFromLocalStorage() {
        totalList.innerHTML = localStorage.getItem("data");
    }

    getDataFromLocalStorage();
});




 

  



  













