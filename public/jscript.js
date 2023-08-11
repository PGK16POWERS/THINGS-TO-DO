document.addEventListener("DOMContentLoaded", () => {
    const todoParent = document.querySelector(".checklistParent");

    function retrieveFromLocalStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("index")) {
                const value = JSON.parse(localStorage.getItem(key));
                const trimmedKey = key.replace("index", ""); // Trim "work" from the key
                createTaskElement(trimmedKey);
            }
        }
    }

    function createTaskElement(trimmedKey) {
        if(trimmedKey){
        const div = document.createElement("div");
        div.setAttribute("class", "tododiv");
        todoParent.appendChild(div);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "checkbox");
        div.appendChild(checkbox);

        checkbox.addEventListener("click", () => {
            textElem.classList.toggle("done");
        });

        const textElem = document.createElement("p");
        textElem.textContent = trimmedKey;
        textElem.setAttribute("class", "innertext");
        div.appendChild(textElem);

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "delete";
        deleteBtn.setAttribute("class","material-symbols-outlined");
        deleteBtn.setAttribute("id","cancel");
        div.appendChild(deleteBtn);

        deleteBtn.addEventListener("click",()=> {
            localStorage.removeItem(`index${trimmedKey}`);
            todoParent.removeChild(div)
        })
        } else {
            return []
        }
        

        
    }
    retrieveFromLocalStorage();
});
