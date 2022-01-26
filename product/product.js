function clearText() {
    text.value = "";
    lastMessage = "";
  }


function сcreatetext(){
  var seed,mul,increment,output,max = 0,min  = 8;
let arr = [];
let symbol_arr = [["Коллеги","В тоже время","Однако","Тем не менее","Следовательно","Соответсвенно","Вместе с тем","С другой стороны"],
["парадигма цифровой экономики","контекст цифрвовой трансформации","диджитализация бизнес-процессов","прагматичный подход к цифровым платформам","сосвокупность сквозных технологий","ускорение блокчейн-транзакций","экспоненциальный рост Big DATA"],
["открывает новые возможности для","выдвигает новые требования","несет в себе риски","расширяет горизонты","заставляет искать варианты","не оставляет шанса для","повышает веротяность","обостряет проблему"],
["дальнейшего углубления","бюджетного финансирования","синергитического эффекта","компрометации конфиденциальных","универсальной коммодитизации","несанкционированной кастомизации","нормативного регулирования","практического применения"],
["знаний и компетенций","непроверенных гипотез","волатильных актвивов","опасных экспирементов","госудраственно-частных партнерств","цифровых следов граждан","нежелательных последствий","внезапных открытий"]];
let out_arr = [];
let out_arr_1 = [];


function random_int(value){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

for(let i = 0;i<5;i++ ){
output = (random_int(seed)*random_int(mul)+random_int(increment)) % mul;

if(output){
arr.push(output);}

else{
    output = random_int(output);
    arr.push(output)
}
}

for(let a = 0;a<5;a++){
    out_arr.push(symbol_arr[a][arr[a]]);
    //out_arr[i] = symbol_arr[i][arr[i]];
}  
var date = $("#datepicker").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
alert(date);  
text.value +=date+" "+(out_arr.join(" "))+"."+"\n" ; 
}

var chkBox = document.getElementById('yellow_checkbox');
chkBox.onchange = function(){
    if(chkBox.checked){
        document.getElementById('text').style.color = "#FFFF00";
        
    } else{
        document.getElementById('text').style.color = "";
    }
    
}

var chkBox_1 = document.getElementById('green_checkbox');
chkBox_1.onchange = function(){
    if(chkBox_1.checked){
        document.getElementById('text').style.color = "green";
        
    } else{
        document.getElementById('text').style.color = "";
    }
    
}




function clearText() {
    text.value = "";
    lastMessage = "";
  }


function сcreatetext(){
  var seed,mul,increment,output,max = 0,min  = 8;
let arr = [];
let symbol_arr = [["Коллеги","В тоже время","Однако","Тем не менее","Следовательно","Соответсвенно","Вместе с тем","С другой стороны"],
["парадигма цифровой экономики","контекст цифрвовой трансформации","диджитализация бизнес-процессов","прагматичный подход к цифровым платформам","сосвокупность сквозных технологий","ускорение блокчейн-транзакций","экспоненциальный рост Big DATA"],
["открывает новые возможности для","выдвигает новые требования","несет в себе риски","расширяет горизонты","заставляет искать варианты","не оставляет шанса для","повышает веротяность","обостряет проблему"],
["дальнейшего углубления","бюджетного финансирования","синергитического эффекта","компрометации конфиденциальных","универсальной коммодитизации","несанкционированной кастомизации","нормативного регулирования","практического применения"],
["знаний и компетенций","непроверенных гипотез","волатильных актвивов","опасных экспирементов","госудраственно-частных партнерств","цифровых следов граждан","нежелательных последствий","внезапных открытий"]];
let out_arr = [];
let out_arr_1 = [];


function random_int(value){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

for(let i = 0;i<5;i++ ){
output = (random_int(seed)*random_int(mul)+random_int(increment)) % mul;

if(output){
arr.push(output);}

else{
    output = random_int(output);
    arr.push(output)
}
}

for(let a = 0;a<5;a++){
    out_arr.push(symbol_arr[a][arr[a]]);
    //out_arr[i] = symbol_arr[i][arr[i]];
}  
var date = $("#datepicker").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
alert(date);  
text.value +=date+" "+(out_arr.join(" "))+"."+"\n" ; 
}

var chkBox = document.getElementById('yellow_checkbox');
chkBox.onchange = function(){
    if(chkBox.checked){
        document.getElementById('text').style.color = "#FFFF00";
        
    } else{
        document.getElementById('text').style.color = "";
    }
    
}

var chkBox_1 = document.getElementById('green_checkbox');
chkBox_1.onchange = function(){
    if(chkBox_1.checked){
        document.getElementById('text').style.color = "green";
        
    } else{
        document.getElementById('text').style.color = "";
    }
    
}


let parent = document.getElementById('parent');
parent.onmouseenter  = handler;

function handler(event) {
  

  сcreatetext();
  
}


function clearText() {
  text.value = "";
  lastMessage = "";
}

let lastMessageTime = 0;
let lastMessage = "";
let repeatCounter = 1;

function log(message) {
  if (lastMessageTime == 0) lastMessageTime = new Date();

  let time = new Date();

  if (time - lastMessageTime > 500) {
    message = '------------------------------\n' + message;
  }

  if (message === lastMessage) {
    repeatCounter++;
    if (repeatCounter == 2) {
      text.value = text.value.trim() + ' x 2\n';
    } else {
      text.value = text.value.slice(0, text.value.lastIndexOf('x') + 1) + repeatCounter + "\n";
    }

  } else {
    repeatCounter = 1;
    text.value += message + "\n";
  }

  text.scrollTop = text.scrollHeight;

  lastMessageTime = time;
  lastMessage = message;
}


