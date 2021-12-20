$(function(){
    $("#terminal_form").hide()
    $(".presentacion").hide()
    $('#first_terminal_form').submit(e => {
        e.preventDefault()
        const command_given = $("#first_command_input").val().toLowerCase()
        $("#first_command_input").val('')
        
        switch (command_given){
            case 'y': case 'yes': case 'yeah':case 'yep':
                $('#first_terminal_form').hide()
                $('.terminal-section').hide()
                $(".presentacion").show()
                break;
            case 'n': case 'no' : case 'nah': case 'nel':
                $("#output_console").append(
                    '<p> Dijo que no </p>'
                )
                $("#output_console").append('<p class="path">/rvv3nd.github/home-page</p>')
                $('#first_terminal_form').hide()
                $("#terminal_form").show()
                break;
            default: 
                console.log("Command not found")
                break;
        }

    })

    $("#terminal_form").submit(e =>{
        e.preventDefault()
        const command_given = $("#command_input").val().toLowerCase()
        $("#command_input").val('')

        switch(command_given){
        case 'know me':
            $('#first_terminal_form').hide()
            $('.terminal-section').hide()
            $(".presentacion").show()
            break;
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
        default : 
            $("#output_console").append(
            '<p>Command not found</p>'
        )  
        }
        $("#output_console").append('<p class="path">/rvv3nd.github/home-page</p>')
        $(".prompt").scrollTop($(".prompt").prop('scrollHeight'))
    })


})
