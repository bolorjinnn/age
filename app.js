// DOM document ->html file deerh buh code
// console.log(document);
// var h1=document.getElementsByTagName('h1')[0]
// console.log(h1);
// //  .innerText ="text bichne"; -->tag dotorh text uurchilnu.
// h1.innerText = "Sain uu";
// // .style.styleName="style utga"; -->style uguh
// h1.style.color="red";
// var diffh1=document.getElementsByTagName('h1')[1]
// console.log(diffh1);
// diffh1.innerText="wassup";
// diffh1.style.color="yellow";
var inputAge=document.getElementsByTagName('input')[0];
console.log(inputAge);
var result=document.getElementsByTagName('p')[0];
console.log(result);
var currentYear=2023,birthYear;
function convert() {
    if (inputAge.value>100){
      result.innerText="Хүн ийм наслах боломжгүй";
      result.style.color="red";
    }
    else if(inputAge.value<0){
        result.innerText="Төрөөгүй байна";
        result.style.color="blue";
    }
    else if(inputAge.value ==""){
        alert("Насаа бичнэ үү");
    }else{birthYear=currentYear-inputAge.value;
        result.innerText="Төрсөн он :"+ birthYear;
    }
}

