const popup = document.querySelector('.chatbox-support');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chatbox-body');
const inputElm = document.querySelector('input');



//   chat button toggler

chatBtn.addEventListener('click', ()=>{
  popup.classList.toggle('show');
})

// send msg
submitBtn.addEventListener('click', ()=>{
  let userInput = inputElm.value;

  let temp = `<div class="messages-item messages-item-operator">
    <span>${userInput}</span>
    </div>`;

  chatArea.insertAdjacentHTML("beforeend", temp);
  inputElm.value = '';

})
