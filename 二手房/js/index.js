
$('.area p').on('tap',function(){
    var a=$(this).index();
       $('.area p').removeClass('rad');
    $(this).addClass('rad');
    $('.area span').removeClass('botton');
    $('.area span').addClass('top');
    $(this).find('span').removeClass('top');
    $(this).find('span').addClass('botton');
    $('.mc').show('slow').on('tap',function(){
        $('.area p').removeClass('rad');
        $(this).hide()
        go()
    })
    
    if(a==0){
        $('.more').hide('slow')
        $('.ht').hide('slow')
        $('.price').hide('slow')
        $('.zone').show('slow')
    }else if(a==1){
        $('.more').hide('slow')
        $('.ht').hide('slow')
        $('.price').show('slow')
        $('.zone').hide('slow')
    }else if(a==2){
        $('.more').hide('slow')
        $('.ht').show('slow')
        $('.price').hide('slow')
        $('.zone').hide('slow')
    }else if(a==3){
        $('.more').show('slow')
        $('.ht').hide('slow')
        $('.price').hide('slow')
        $('.zone').hide('slow')
    }  
  
   
})
function go(){
    $('.more').hide()
    $('.ht').hide()
    $('.price').hide()
    $('.zone').hide()
    $('.area span').removeClass('botton');
    $('.area span').addClass('top');
}
// rem
function setrem(){
    var wind = document.documentElement.clientWidth || document.body.clientWidth;
    var uiw = 360;
    document.documentElement.style.fontSize = (wind / uiw)*1+'px';
  }
  setrem();
  window.onresize = setrem;



//特效