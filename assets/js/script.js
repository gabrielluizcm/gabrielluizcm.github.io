
$(".icone").mouseenter(function(){
    $(this).animate({
        fontSize: "50px",
        marginBottom: '-10px'
    }, 50);
}).mouseleave(function(){
    $(this).animate({
        fontSize: '40px',
        marginBottom: 0
    }, 50);
});

$('#botaoModal').click(function() {
    $('#modal0').modal('show')
})
