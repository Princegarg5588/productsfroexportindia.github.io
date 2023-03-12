function validation() {
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var phone=document.getElementById("number").value;
  var message=document.getElementById("message").value;
  var error_message=document.getElementById("error_message");
  var text;

  error_message.style.padding="10px";

  if(name.length ==""){
    text="Please Enter Valid Name";
    error_message.innerHTML=text;
    return false;
  }

  if(email.indexOf("@")== -1 || email.length < 6){
    text="Please Enter Valid Email address";
    error_message.innerHTML=text;
    return false;
  }

  if(message.length <= 140){
    text="Please Enter message more than 140 characters";
    error_message.innerHTML=text;
    return false;
  }

  alert("Form Submitted Successfully");
  return true;
}