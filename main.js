function validation(){
    var name= document.getElementById("exampleInput1").value;
    var email= document.getElementById("exampleInputEmail1").value;
    var number= document.getElementById("exampleInputNumber1").value;
    var password= document.getElementById("exampleInputTeam1").value;
    var cpassword= document.getElementById("exampleInputTeam2").value;

    var namecheck = /^[A-Za-z ]{3,}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var favourite_team =  /^[A-Za-z ]{3,}$/;

    if(namecheck.test(name)){
        document.getElementById("error-name").innerHTML = '';
    }
    else{
        document.getElementById("error-name").innerHTML = 'Use only Alphabets';
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById("error-email").innerHTML = '';
    }
    else{
        document.getElementById("error-email").innerHTML = 'Use valid email syntax. Ex: abc@xyz.com';
        return false;
    }

    if(numbercheck.test(number)){
        document.getElementById("error-number").innerHTML  = '';
    }
    else{
        document.getElementById("error-number").innerHTML = 'Use 1010 digit valid mobile number';
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById("error-favourite_team ").innerHTML = '';
    }
    else{
        document.getElementById("error-favourite_team").innerHTML = 'Use only Alphabets';
        return false;
    }

    if(cpassword.match(password)){
        document.getElementById("error-cfavourite_team").innerHTML = '';
    }
    else{
        document.getElementById("error-cfavourite_team").innerHTML = "Team doesn't match";
        return false;
    }

}