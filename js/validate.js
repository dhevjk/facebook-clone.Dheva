$(document).ready(function(){
    $('#signup').validate({
        rules: {
            fname: {
                required: true,
                minlength: 5,
            },
            sname: {
                required: true,
                minlength: 5,
            },
            mob: {
                required: true,
                minlength: 5,
            },
            PassWord: {
                required: true,
                minlength: 8,
            },
            date:{
                required: true,
            },
            month:{
                required: true,
            },
            year:{
                required: true,
            },
            gender:{
                required:true,
            },

        },
        messages:{
            fname:{
                required:"please enter the first name",
                minlength:"please enter min 5 letters",
            }
        }
    })

});