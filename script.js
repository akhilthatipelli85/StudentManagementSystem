function addStudent(){
    var name=document.getElementById("name").value;
    var rollno=document.getElementById("rollno").value;
    var dept=document.getElementById("dept").value;
    if(name==""||rollno==""||dept==""){
        alert("Please fill all details");
    }
    else{
        document.getElementById("result").innerHTML="Student Added Succesfully!<br>"+"Name: "+name+"<br>"+"Rollno: "+rollno+"<br>"+"Department: "+dept;
    }
}