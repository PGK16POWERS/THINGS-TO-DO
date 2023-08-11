const workForm = document.querySelector("#creFormWork");

workForm.addEventListener("submit",()=> {
        const inpDataWork = document.querySelector("#work-text").value;

        function saveToLocalStorage(inpDataWork){
            localStorage.setItem("work"+inpDataWork, Date.now());
        }
        saveToLocalStorage(inpDataWork)
})