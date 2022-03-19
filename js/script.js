const calci =() =>{
    let sub1=document.getElementById('sub1').value;
    let sub2=document.getElementById('sub2').value;
    let sub3=document.getElementById('sub3').value;
    let sub4=document.getElementById('sub4').value;
    let sub5=document.getElementById('sub5').value;
    let grade="";

    let total=parseFloat(sub1)+parseFloat(sub2)+parseFloat(sub3)+parseFloat(sub4)+parseFloat(sub5);
    let per=(total/500)*100;

    if(per<=100 && per>=80){
        grade='A';
    }
    else if(per<=100 && per>=80){
        grade='B';
    }
    else if(per<=100 && per>=80){
        grade='C';
    }else{
        grade='F';
    }
    if(per>=39.5){
        document.getElementById('showData').innerHTML=`Out of 500 your total is ${total} and percentage is ${per}%. <br> Your grade is ${grade}.<h4 style="color:lightgreen">Pass!</h4>`
    }
    else{
        document.getElementById('showData').innerHTML=`Out of 500 your total is ${total} and percentage is ${per}%. <br> Your grade is ${grade}. <h4 style="color:red">Fail!</h4>`
    }
}