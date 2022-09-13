const socket=io()
let name;
let textarea =document.querySelector('#textarea')
let messageArea=document.querySelector('.message_area')

do{
   name = prompt('please enter your name: ')
}while(!name)

textarea.addEventListener('keyup',(e)=>{
if(e.key==='Enter '){
  sendMessage(e.target.value)
}
})

function sendMessage(messagec){
  let msg={
user:name,
message:message.trim()
  }
  //append
  appendMessage(msg,'outgoing')
  textarea.value=''

  // send server

  socket.emit('message',msg)
}

function appendMessage(msg,type){
let mainDiv=document.createElement('div')
let className=type
mainDiv.classList.add(classname,'message')

let markup=`
<h4>${msg.user}</h4>
<p>${msg.message}</p>
`

mainDiv.innerHTML=markup
messageArea.appendChild(mainDiv)
}

//receive message

socket.on('message',()=>{
  appendMessage(msg,'incoming')
  scrollToBottom()
})

function scrollToBottom(){
  messageArea.scrollTop=messageArea.scrollHeight
}