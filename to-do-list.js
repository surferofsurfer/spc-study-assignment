document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("addBtn").addEventListener('click', () => {
        const todoText = document.getElementById("todoTextInput").value;

        document.getElementById("todoTextInput").value = "";

        const todoBox = document.getElementById("todoBox");

        const todoList = document.createElement('li');

        todoList.innerHTML = `${todoText}<button class="deleteBtn">삭제하기</button>`

        todoBox.appendChild(todoList);

        // 삭제 버튼에 대해 이벤트 걸기
        
        const deleteBtn = todoList.querySelector(".deleteBtn")
        deleteBtn.addEventListener('click', () => {
            todoList.remove();
        })
    })
})

