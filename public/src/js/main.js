let counter = 5;
let timeout;
let timer_on = 0;

function timedCount() {
    document.getElementById("countdown").value = counter;
    counter--;
    if(counter <=0){
        switchFunction()
        stopCount()
    }else timeout = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(timeout);
  document.getElementById("countdown").value = ""
  timer_on = 0;
}


function home(){
    $('#first_terminal_form').show()
    let elemento = document.getElementById("output_console");
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    $('.terminal-section').show()
    $(".presentacion").hide()
    counter = 10
    timer_on = 0;
    startCount()
}

function switchFunction() {
    $('#first_terminal_form').hide()
    $('.terminal-section').hide()
    $(".presentacion").show()
    counter = 10
}

$(function(){
    if (window.innerWidth < 830 || screen.width < 830){
        console.log("cambio!")
        document.getElementById("mi_foto").style.display = "none";
    }
    $("#terminal_form").hide()
    $(".presentacion").hide()
    $('#first_terminal_form').submit(e => {
        e.preventDefault()
        const command_given = $("#first_command_input").val().toLowerCase()
        $("#first_command_input").val('')
        
        switch (command_given){
            case 'y': case 'yes': case 'yeah':case 'yep':
                switchFunction()
                break;
            case 'n': case 'no' : case 'nah': case 'nel':
                let elemento = document.getElementById("output_console");
                while (elemento.firstChild) {
                    elemento.removeChild(elemento.firstChild);
                }
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
        case 'clear':
            let elemento = document.getElementById("output_console");
            while (elemento.firstChild) {
                elemento.removeChild(elemento.firstChild);
            }
            break;
        case 'run know me': case 'know me':
            $('#first_terminal_form').hide()
            $('.terminal-section').hide()
            $(".presentacion").show()
            break;
        case 'ipconfig':
            $("#output_console").append(
                '<p>'+command_given+'</p>',
                '<p> Nice try bro </p>'
            )
            break;
        case 'man':
            $("#output_console").append(
                '<p>'+command_given+'</p>',
                '<p> Showing info... </p>'
            )
        case '-h': case 'help': case '--help':
            $("#output_console").append(
                '<p> To know me run: know me </p>',
                '<p> To see my proyects run: show proyects </p>',
                '<p> To have fun: try others commands ;) </p>',
            )
            break;
        case 'rm -r':
            $("#output_console").append(
                '<p>'+command_given+'</p>',
                '<p>Deleting info</p>'
            )
            break;
        case 'su':case 'sudo':
            $("#output_console").append(
                "<p>you need to log in as admin</p>"
            )
            break;
        case 'run': case 'show':
            $("#output_console").append(
                '<p>'+command_given+'</p>',
                '<p>... what?</p>'
            )
            break;
        case 'show proyects':
            $("#output_console").append(
                '<p>'+command_given+'</p>',
                '<p>opening...</p>'
            )
            window.open('./proyectos.html'); 
            break;
        case 'ls':
                $("#output_console").append(
                    '<p>'+command_given+'</p>',
                    '<ul>',
                        '<li>.</li>',
                        '<li>.gitignore</li>',
                        '<li>index.html</li>',
                        '<li>proyectos.html</li>',
                        '<li>css</li>',
                        '<li>js</li>',
                        '<li>img</li>',
                        '<li>config.json</li>',
                    '</ul>'
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

    startCount()

})
