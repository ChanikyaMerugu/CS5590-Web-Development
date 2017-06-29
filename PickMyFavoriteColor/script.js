

var colors = ['red', 'green', 'blue'];


function setPreviewColor(color) {
    console.log(color)
    $('.preview').css('background-color',color)

}
function addBox(color) {
    $('#colors').prepend("<div class='item' style='background-color: " + color + ";'><div>");
}

$(document).ready(function(){



    colors.forEach(function(color){
        console.log(color)
    addBox(color);

});
    var rand = colors[Math.floor(Math.random() * colors.length)];
    console.log(rand)
setPreviewColor(rand);
    $('#color').keyup(function(){
       console.log($(this).val())
        setPreviewColor($(this).val())
    });
    $('#add-to-favorite').click(function(){
        console.log($('#color').val())
        addBox($('#color').val())
        $('#color').val("");
        $('#color').focus();

    });

    $('#colors').on('mouseover','.item',function(){
        setPreviewColor($(this).css('background-color'));
        var rgb=$(this).css('background-color');
        $('.color-code').text(rgb)

    });


});