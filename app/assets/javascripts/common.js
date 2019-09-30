$(document).ready(function(){
    $('#search').click(function(){
        $('#searchInput').fadeToggle(200);
    })

    $('#toggleButton').click(function(e){
        e.preventDefault();
        $('#navbarSupportedContent').toggle();
    })
});
