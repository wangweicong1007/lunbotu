function Banner(){
    var $all=$('<div>'
                +'<div class="slider" id="slider">'
                    +'<div class="slide"><img src="img/b5.png" alt=""></div>'
                    +'<div class="slide"><img src="img/b1.png" alt=""></div>'
                    +'<div class="slide"><img src="img/b2.png" alt=""></div>'
                    +'<div class="slide"><img src="img/b3.png" alt=""></div>'
                    +'<div class="slide"><img src="img/b4.png" alt=""></div>'
                    +'<div class="slide"><img src="img/b5.png" alt=""></div>'
                    +'<div class="slide"><img src="img/b1.png" alt=""></div>'
                +'</div>'
                +'<span id="left"><</span>'
                +'<span id="right">></span>'
                +'<ul class="nav" id="navs">'
                    +'<li>1</li>'
                    +'<li>2</li>'
                    +'<li>3</li>'
                    +'<li>4</li>'
                    +'<li>5</li>'
                +'</ul>'
            +'</div>'
            );

    var $box=$('#box'),
        $nav=$all.find('#navs'),
        $slider=$all.find('#slider'),
        $left=$all.find('#left'),
        $right=$all.find('#right'),
        $span=$all.find('span'),
        index=0,
        timer = setInterval(next,3000);

        //.eq()遍历nav 设定active
        $nav.find('li').eq(0).addClass('active');

        
    function next(){
        index++;
        $nav.children().removeClass('active');
        if(index >= 6){
            $slider.animate({left:-index*1200},'slow',function(){
                $slider.css('left',-1200);
            });
            index = 1;
            
        }
        $slider.animate({left:-index*1200},'slow');
        $nav.children().eq(index-1).addClass('active');
    }
    function prev(){
        index--;
        $nav.children().removeClass('active');
        if(index <= 0){
            $slider.animate({left:0},'slow',function(){
                $slider.css('left',-5*1200);
            });
            index = 5;
        }
        $slider.animate({left:-index*1200},'slow');
        $nav.children().eq(index-1).addClass('active');
    }
    //鼠标移入
    $box.mouseover(function () {
        $span.animate({ opacity: 0.8})
        clearInterval(timer)
    });
    //鼠标移出
    $box.mouseleave(function () {
        $span.animate({ opacity:0 })
        timer = setInterval(next, 3000);
    })


    this.show=function(){
        $box.append($all.children());     
        //点击nav执行切换
        $nav.children().bind('click',function(){
            //去掉nav的样式，绑定当前index
            $nav.children().removeClass('active');
            $(this).addClass('active');
            index = Number($(this).html());
            $slider.animate({left:-index*1200},'slow');
        })
        $left.click(prev);
        $right.click(next);
    }
}