document.addEventListener("DOMContentLoaded",()=> {
    
    const form = document.querySelector("#creForm");

    form.addEventListener("submit",()=> {
        const inpData = document.querySelector("#new-text").value;

        function saveToLocalStorage(inpData){
            localStorage.setItem("index"+inpData, Date.now());
        }
        saveToLocalStorage(inpData)
    })
})