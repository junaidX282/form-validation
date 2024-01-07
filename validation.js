$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
                required :true,
                minlength : 4
            },
            lname:{
                required :true,
                // minlength : 4
            },
            email:{
                emai: true
            },
            password : {
                required : true,
                minlength:6

            },
            gender :{
                required : true
            }
        }
    })
})