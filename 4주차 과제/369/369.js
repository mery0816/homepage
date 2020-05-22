const max=100;
let inputtag=document.getElementById("input");
let inputtag2=document.getElementById("input2");
let num369=0;
var numbers=[];
var inputList=[];

for (i=1; i<=max; i++){
    let temp=i;

    while (temp!=0){
        if ((temp%10===3)||(temp%10===6)||(temp%10===9)){
            num369++;
        }
        temp = Math.floor(temp/10);
    }

    if (num369===0){
        element=i;
        numbers.push(element);
    }
    else {
        element="짝".repeat(num369);
        numbers.push(element);
    }
    num369=0;   
}

function doTry() {
    let userInput=inputtag.value;
    inputList.push(userInput);
    if (numbers[inputList.length-1]==inputList[inputList.length-1]){
        alert("Next turn");
    }
    else {
        alert("Player 2가 이겼습니다!\n새로고침을 눌러주세요.");
        }
    inputtag.value="";
    inputtag2.focus();
}

function doTry2() {
    let userInput2=inputtag2.value;
    inputList.push(userInput2);
    if (numbers[inputList.length-1]==inputList[inputList.length-1]){
        alert("Next turn");
    }
    else {
        alert("Player 1가 이겼습니다!\n새로고침을 눌러주세요.");
        }
    inputtag2.value="";
    inputtag.focus();
}