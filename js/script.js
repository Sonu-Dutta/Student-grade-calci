const calci =() =>{
    let sub1=document.getElementById('sub1').value;
    let sub2=document.getElementById('sub2').value;
    let sub3=document.getElementById('sub3').value;
    let sub4=document.getElementById('sub4').value;
    let sub5=document.getElementById('sub5').value;
    let grade="";

    let total=parseFloat(sub1)+parseFloat(sub2)+parseFloat(sub3)+parseFloat(sub4)+parseFloat(sub5);
    let per=(total/500)*100;
    per=per.toFixed(2);

    if(per<=100 && per>=90){
        grade='O';
    }
    else if(per<=89 && per>=80){
        grade='A';
    }
    else if(per<=79 && per>=70){
        grade='B';
    }
    else if(per<=69 && per>=60){
        grade='C';
    }
    else if(per<=59 && per>=50){
        grade='D';
    }
    else if(per<=49 && per>=45){
        grade='E';
    }
    else if(per<=44 && per>=40){
        grade='P';
    }
    else{
        grade='F';
    }
    if(parseFloat(sub1)>100 || parseFloat(sub1)<0 || parseFloat(sub2)>100 || parseFloat(sub2)<0 ||parseFloat(sub3)>100 || parseFloat(sub3)<0 ||parseFloat(sub4)>100 || parseFloat(sub4)<0 ||parseFloat(sub5)>100 || parseFloat(sub5)<0){
        document.getElementById('showData').innerHTML=`<h3 style="color:yellow">Enter valid marks between 0 to 100!</h3>`
    }
    else if(sub1=="" || sub2=="" || sub3=="" || sub4=="" || sub5==""){
        document.getElementById('showData').innerHTML=`<h3 style="color:yellow">Please fill the details!</h3>`
    }
   else if(sub1>40 && sub2>40 && sub3>40 && sub4>40 && sub5>40){
        document.getElementById('showData').innerHTML=`Marks: ${total}/500 <br> Percentage: ${per}% <br>Grade: ${grade}<h4 style="color:lightgreen">Pass!</h4>`
    }
     else{
        document.getElementById('showData').innerHTML=`Marks: ${total}/500 <br> Percentage: ${per}% <br>Grade: ${grade}<h4 style="color:orange">Fail!</h4>`
    }
    
}