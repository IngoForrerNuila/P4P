function capture() {
    //console.log("captured");

    function person(fname, lname, company, age, issue, description){
        this.fname=fname;    
        this.lname=lname;
        this.company=company;            
        this.age=age;
        this.issue=issue;
        this.description=description;

    }
var fnameCapture = document.getElementById("fname").value;
var lnameCapture = document.getElementById("lname").value;
var companyCapture = document.getElementById("company").value;
var ageCapture = document.getElementById("age").value;
var issueCapture = document.getElementById("issue").value;
var descriptionCapture = document.getElementById("description").value;

newPerson = new person(fnameCapture,lnameCapture,companyCapture,ageCapture,issueCapture,descriptionCapture);
console.log(newPerson);
add();

console.log(fnameCapture);
console.log(lnameCapture);
console.log(companyCapture);
console.log(ageCapture);
console.log(issueCapture);
console.log(descriptionCapture);
}




var dataBase= [];
function add(){
    
    dataBase.push(newPerson);
    console.log(dataBase);
    document.getElementById("table").innerHTML += '<tbody><td>'+newPerson.fname+'</td><td>'+newPerson.lname+'</td>'+'<td>'+newPerson.company+'</td>'
    +'<td>'+newPerson.age+'</td>'+'<td>'+newPerson.issue+'</td>'+'<td>'+newPerson.description+'</td>'+'<td>'+'<button id="btn" name="btn">Reply</button>'+'</td> </tbody>';

    alert("YES!!! Your complaint was successfuly delivered and registered :)")
    

}

function validateForm() {

    let firstName =document.getElementById("fname").value;
    
    if(firstName==""){
        alert("NEIN!!! Please fill in with the correct information >:(");
        return false;
    }
    else 
    
    {capture()}
    
}

