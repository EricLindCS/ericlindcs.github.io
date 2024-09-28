function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },1000);
}

function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },1000);
}

function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },1000);
}

function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },1000);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      
    },500);
},1200);


$(document).ready(function () {
    // Function to close side windows
    function closeSideWindows() {
        // Add your logic to close side windows here
        closeabout();
        closework();
        // Add more if needed
    }

    // Event listener for keydown
    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) { // 27 is the keycode for the "Esc" key
            closeSideWindows();
        }
    });
});



