$(function(){
    $("#terminal_form").hide()
    $('#first_terminal_form').submit(e => {
        e.preventDefault()
        const command_given = $("#first_command_input").val().toLowerCase()
        $("#first_command_input").val('')
        
        switch (command_given){
            case 'y': case 'yes': case 'yeah':case 'yep':
                $("#output_console").append(
                    '<p> Dijo que sí </p>'
                )
                break;
            case 'n': case 'no' : case 'nah': case 'nel':
                $("#output_console").append(
                    '<p> Dijo que no </p>'
                )
                break;
            default: 
                console.log("Command not found")
                break;
        }
        $('#first_terminal_form').hide()
        $("#terminal_form").show()
    })

    $("#terminal_form").submit(e =>{
        e.preventDefault()
        const command_given = $("#command_input").val().toLowerCase()
        $("#command_input").val('')

        switch(command_given){
        case 'ipconfig':
            $("#output_console").append(
                '<p> Nice try bro </p>'
            )
            break;
        case 'man':
            $("#output_console").append(
                '<p> Showing info... </p>'
            )
            break;
        case 'rm -r':
            $("#output_console").append(
                '<p>Deleting info</p>'
            )
            break;
        case 'su':
            $("#output_console").append(
                '<input type="text" placeholder="password">'
            )
            break;
        }
    })


})