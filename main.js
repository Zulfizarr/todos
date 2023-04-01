let form=document.querySelector("form")
let input=document.querySelector("input")
let parent_ul=document.querySelector(".parent_ul")
let index=0
let parent=[]


function handleRenderTodo(arr){
    parent_ul.innerHTML=null
    for(i=0;i<arr.length;i++){
    let li=document.createElement("li")
    li.className="w-50 d-flex justify-content-between p-3 mx-auto border-bottom text-light"
    let h4=document.createElement("h4")
    h4.textContent=arr[i].name
    let button=document.createElement("button")
    button.textContent="delet"
    button.className="btn btn-secondary delet_todo"
    button.dataset.id=arr[i].id
    li.appendChild(h4)
    li.appendChild(button)
    parent_ul.appendChild(li)

    }
}

function handleSub(event){
    event.preventDefault()
if(input.value.length>1){
    let todo={
        name:input.value,
        id:index
    }
    parent.push(todo)
    handleRenderTodo(parent)
    input.value=null
}

}
form.addEventListener("submit",handleSub)
window.addEventListener("click",function(event){
    if(event.target.matches(".delet_todo")){
        let data_id=event.target.dataset.id
        for(i=0;i<parent.length;i++){
            if(data_id-0===parent[i].id){
                parent.splice(i,1)
                handleRenderTodo(parent)
            }
        }
    }else{
        console.log(false)
    }
})