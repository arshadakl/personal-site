

$("#chaterFm").submit((e)=>{
    e.preventDefault()
    $(".loader-wrapper").show();
    const val = document.getElementById('cname').value;
    console.log(val);
    var lin="https://api.whatsapp.com/send/?phone=918589840073&text=Hello,%20my%20name%20is%20"+val+"%20I%20want%20your%20services"
    document.getElementById("wapi").href = lin;
    let btt=document.querySelectorAll("#wapi")
    btt.forEach(bb=>bb.click())
    window.location.reload()
    // $.ajax({
        
    // })
})

// $("#submit-form").submit((e) => {
//     console.log("submitted");
//     e.preventDefault()
//     $.ajax({
//         url: "https://script.google.com/macros/s/AKfycbxO68v1PZYu-kxnNnogv1xaU2l161TFYIRBIL4M1NuFefj2GU4lpm4XGBU6zF6XQYxaOg/exec",
//         data: $("#submit-form").serialize(),
//         method: "post",
//         success: function (response) {
//             alert("Form submitted successfully");
//             window.location.reload();
//         },
//         error: function (err) {
//             alert("Something Error");
//         }
//     });
// })




$(document).ready(function () {
    $.validator.addMethod("customEmail", function(value, element) {
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return this.optional(element) || emailRegex.test(value);
    }, "Please enter a valid email address.");

    $("#submit-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                customEmail: true  
            },
            subject: {
                required: true,
                minlength: 3
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: "Name must be at least 4 characters long."
            },
            email: {
                required: "Please enter your email address."
            },
            subject: {
                required: "Please enter a subject.",
                minlength: "Subject must be at least 3 characters long."
            },
            message: {
                required: "Please enter a message.",
                minlength: "Message must be at least 5 characters long."
            }
        },
        errorPlacement: function(error, element) {
            $(error).appendTo("#username-error");
        },
        submitHandler: function (form) {
            console.log("submitted");
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxO68v1PZYu-kxnNnogv1xaU2l161TFYIRBIL4M1NuFefj2GU4lpm4XGBU6zF6XQYxaOg/exec",
                data: $(form).serialize(),
                method: "post",
                success: function (response) {
                    alert("Form submitted successfully");
                    window.location.reload();
                },
                error: function (err) {
                    alert("Something went wrong");
                }
            });
            return false; 
        }
    });
});



