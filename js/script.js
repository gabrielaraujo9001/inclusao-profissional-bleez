$(document).ready(function(){
    /* Torna o primeiro slide ativo */    
    $('#slideshow-thumbnails ul li:first').addClass('active');
    
    /* Torna o primeiro vídeo ativo */
    $('#video-thumbnails ul li:first').addClass('active');
});

var direita = true;
var esquerda = false;

/* Navegação do slideshow */
$('#slideshow-thumbnails ul li').not('.active').click(function(){
    $('#slideshow-thumbnails ul li.active').removeClass('active');
    $(this).addClass('active');
    
    var num = $(this).attr('id').slice(-1);
    
    $('#slideshow-destaque ul li.active').removeClass('active');
    $('#slideshow-destaque ul li#slide'+num).addClass('active');
});

$('#arrow-left').click(function(event){
    event.preventDefault();
    if(esquerda){
        $('#slideshow-thumbnails ul li').animate({left: "+=594"}, 800);
        esquerda = false;
        direita = true;
    }
});

$('#arrow-right').click(function(event){
    event.preventDefault();
    if(direita){
        $('#slideshow-thumbnails ul li').animate({left: "-=594"}, 800);
        direita = false;
        esquerda = true;
    }
});

/* Navegação dos vídeos */
$('#video-thumbnails ul li').not('.active').click(function(){
    $('#video-thumbnails ul li.active').removeClass('active');
    $(this).addClass('active');
    
    var num = $(this).attr('id').slice(-1);
    
    $('#video-destaque iframe.active').removeClass('active');
    $('#video-destaque iframe#video'+num).addClass('active');
    
    if($('#play').css('visibility') == 'hidden')
        $('#play').css('visibility', 'visible');
});

/* Botão de play */
$('#play').click(function(){
   $(this).css('visibility', 'hidden');
});

