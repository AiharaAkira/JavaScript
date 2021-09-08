const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

// 1. updateToDo 함수
function updateToDo(event) {
    event.target.toggle('done');

}

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록
    for(let item of items){
        item.addEventListener('click',updateToDo);
    }




