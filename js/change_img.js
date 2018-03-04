$(function(){

   var $img1 = $('#img1');
   
   $img1.click(function(){
        if($img1.src=='img/a2.png'){
             $img1.attr('src', 'img/3.png');
        } else {
            $img1.attr('src', 'img/a2.png');
        }
   });
    var $img2 = $('#img2');
   
   $img2.click(function(){
        if($img2.src=='img/a1.png'){
             $img2.attr('src', 'img/99.png');
        } else {
            $img2.attr('src', 'img/a1.png');
        }
   });
   var $img3 = $('#img3');
   
   $img3.click(function(){
        if($img3.src=='img/a3.png'){
             $img3.attr('src', 'img/44.png');
        } else {
            $img3.attr('src', 'img/a3.png');
        }
   });
   var $img4 = $('#img4');
   
   $img4.click(function(){
        if($img4.src=='img/a4.png'){
             $img4.attr('src', 'img/55.png');
        } else {
            $img4.attr('src', 'img/a4.png');
        }
   });
   var $img5 = $('#img5');
   
   $img5.click(function(){
        if($img5.src=='img/a5.png'){
             $img5.attr('src', 'img/66.png');
        } else {
            $img5.attr('src', 'img/a5.png');
        }
   });
   var $img6 = $('#img6');
   $img6.click(function(){
        if($img6.src=='img/a6.png'){
             $img6.attr('src', 'img/77.png');
        } else {
            $img6.attr('src', 'img/a6.png');
        }
   });
    
    var $fb = $('#img_fb');
    $fb.click(function(){
        if($fb.src=='img/fb_active.png'){
             $fb.attr('src', 'img/fb.png');
        } else {
            $fb.attr('src', 'img/fb_active.png');
        }
   });
    var $lin = $('#img_in');
    $lin.click(function(){
        if($lin.src=='img/linkedin_active.png'){
             $lin.attr('src', 'img/linkedin.png');
        } else {
            $lin.attr('src', 'img/linkedin_active.png');
        }
   });
   var $tw = $('#img_tw');
    $tw.click(function(){
        if($tw.src=='img/twiter_active.png'){
             $tw.attr('src', 'img/twiter.png');
        } else {
            $tw.attr('src', 'img/twiter_active.png');
        }
   });

});