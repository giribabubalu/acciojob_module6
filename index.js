var flag=0;
function testing(){
    firstname();
    lastname();
    emailService();
    password();
    confirmPass();
    checkBox();
    if(flag==0){
        alert("Your details have been saved successfully!")
        location.reload();
    }
    
 }
 function firstname(){
     var ele = document.getElementById('fname').value; 
    var len = ele.length;
    var appear = document.getElementById('fname-span');
    if(len < 3){
      appear.style.visibility = "visible";
      flag=1;
    }
    else {
     appear.style.visibility = "hidden";
    }
 }
 function lastname(){
     var ele = document.getElementById('lname').value;
    var len = ele.length; 
    var appear = document.getElementById('lname-span');
    if(len < 3){
      appear.style.visibility = "visible";
      flag=1;
    }
    else {
     appear.style.visibility = "hidden";
    }
 }

 function emailService(){
    var email = document.getElementById('inputEmail4').value;
    var appear = document.getElementById('email-span');
    if(email[0] == '@'){
        appear.style.visibility = "visible";
        return;
    }
    var count = 0;
    for(var i = email.length-1;i>=0;i--){
        if(email[i] == '.' && count<2){
            appear.style.visibility = "visible";
            return;
        }
       else {
         count++;
       }
    }
    if(!email.includes('@')){
        appear.style.visibility = "visible";
        return;
    }
    appear.style.visibility = "hidden";
}


 function password(){
    var ele=document.getElementById('inputPassword4').value;
    var len=ele.length;
    var appear=document.getElementById('password-span');
    if(len<8)
    {
        appear.style.visibility="visible";
        flag=1;
        return;
    }
    var atposition=ele.indexOf('@');
    var hash=ele.indexOf('#');
    var dol=ele.indexOf('$');
    if(atposition==-1 && hash==-1 && dol==-1)
    {
        appear.style.visibility="visible";
        flag=1;
        return;
    }
    var zvalue=ele.indexOf('0');
    var ovalue=ele.indexOf('1');
    var tvalue=ele.indexOf('2');
    var thvalue=ele.indexOf('3');
    var fvalue=ele.indexOf('4');
    if(zvalue==-1 && ovalue==-1 && tvalue==-1 && thvalue==-1 && fvalue==-1)
    {
        appear.style.visibility="visible";
        flag=1;
        return;
    }
 }

 function confirmPass(){
    var pass=document.getElementById('inputPassword4').value;
    var ele=document.getElementById('confirmPassword').value;
    var len=ele.length;
    var appear=document.getElementById('confirm-span');
    if(len==0)
    {
        appear.style.visibility = "visible";
        flag=1;
        return;
    }
    if(len != pass.length)
    {
        appear.style.visibility = "visible";
        flag=1;
        return;
    }
    for(var i=0;i<len;i++)
    {
        if(pass[i]!=ele[i])
        {
            appear.style.visibility = "visible";
            flag=1;
            return;
        }
    }

 }

 function checkBox(){
    
    const cb = document.querySelector('#gridCheck');
    appear=document.getElementById('check-span');
    if(!cb.checked)
    {
        appear.style.visibility = "visible";
        flag=1;
        return;
    }
 }