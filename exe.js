let my = []
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("Save-el")
const unList=document.getElementById("list-el")
let mk = JSON.parse(localStorage.getItem("myl"))
let deleteB=document.getElementById("d-el")
let tabEl=document.getElementById("Tab-el")
deleteB.addEventListener("dblclick",function(){
    localStorage.clear()
    my=[]
    render(my)
})

if (mk){
        my=mk
        render(my)
    }
   

tabEl.addEventListener("click",function(){
    chrome.tabs.query({active: true,currentWindow: true},function(tabs){
        my.push(tabs[0].url)
        localStorage.setItem("myl",JSON.stringify(my))
        
        render(my)

    })
})
inputBtn.addEventListener("click",function(){
  
    if(inputEl.value===" "){
        alert("Enter Something!")}
   else if(inputEl.value){
        my.push(inputEl.value)
    localStorage.setItem("myl",JSON.stringify(my))
    
    render(my)

    inputEl.value=" "
    console.log(localStorage.getItem("myl"))
    
   }
   
})

function render(leads){
    let listItems = ""
    for(let i=0;i<leads.length;i++)
        {
            listItems+=`
            <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
            </li>
            `
        }
        unList.innerHTML=listItems
}