// $("li").click(function () {
//     $(this).toggleClass("completed");
// });

//add a listener to whole ul and specify to li

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});



                                    
//=======================================================================

// $("span").click(function(event){
//     $(this).parent().fadeOut(500,function(){ 
//      $(this).remove();
//      });
//      event.stopPropagation();
//     });

// click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){   // sets the time to fade out and then remove function
            $(this).remove();
    });
    event.stopPropagation(); // stops futheer functions
});
//=======================================================================

$("input[type='text']").keypress(function(event){
    if(event.which === 13){                 //select the key input as enter = 13
        //grabing new to do text from input
        var todoText = $(this).val();
        $(this).val("");
       //create new li annd add to ul
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

// =====================================================================

$(".fa-ad").click(function(){
    $("input[type='text']").fadeToggle();

});


    // 1
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");
    //IF LI IS GAR
    //    TURN BLACK
    // else
    //    TURN IT GRAY

//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         // turn black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     // ============================================================
//     else{
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//     });
//    }
// });
// // ==================================================================

// console.log($(this).css("color"));