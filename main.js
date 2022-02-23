function capture() {
    //console.log("captured");

    function person(fname, lname, phone, email, issue, description){
        this.fname=fname;    
        this.lname=lname;
        this.phone=phone;            
        this.email=email;
        this.issue=issue;
        this.description=description;

    }
var fnameCapture = document.getElementById("fname").value;
var lnameCapture = document.getElementById("lname").value;
var phoneCapture = document.getElementById("phone").value;
var emailCapture = document.getElementById("email").value;
var issueCapture = document.getElementById("issue").value;
var descriptionCapture = document.getElementById("description").value;

newPerson = new person(fnameCapture,lnameCapture,phoneCapture,emailCapture,issueCapture,descriptionCapture);
console.log(newPerson);
add();

console.log(fnameCapture);
console.log(lnameCapture);
console.log(phoneCapture);
console.log(emailCapture);
console.log(issueCapture);
console.log(descriptionCapture);
}




var dataBase= [];
function add(){
    
    dataBase.push(newPerson);
    console.log(dataBase);
    document.getElementById("table").innerHTML += '<tbody><td>'+newPerson.fname+'</td><td>'+newPerson.lname+'</td>'+'<td>'+newPerson.phone+'</td>'
    +'<td>'+newPerson.email+'</td>'+'<td>'+newPerson.issue+'</td>'+'<td>'+newPerson.description+'</td>'+'<td>'+'<button id="btn" name="btn">Reply</button>'+'</td> </tbody>';

    alert("YES!!! Your complaint was successfuly delivered and registered :)")
    

}

function validateForm() {

    let firstName =document.getElementById("fname").value;
    let lastName =document.getElementById("lname").value;
    let phone =document.getElementById("phone").value;
    let email =document.getElementById("phone").value;
    let issue =document.getElementById("issue").value;
    let description =document.getElementById("description").value;

    if(firstName, lastName, phone, email, issue, description==""){
        alert("NEIN!!! Please fill in with the correct information >:(");
        return false;
    }
    else 
    
    {capture()}
    
}

