
    //点击回到顶部
    $(window).scroll(function(){
        var clientHeight = getViewPortHeight();
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= clientHeight/2) {
            $('.back_top').css('display','block');
        } else {
            $('.back_top').css('display','none');
        }
    });
    function getViewPortHeight() {
        return document.documentElement.clientHeight || document.body.clientHeight;
    }  
   
    $('.back_top').on('click',function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    })

//苹果手机
$.ajax({
    url:'http:10.0.157.251:8888/bannerxia',
    type:'get',
    dataType:'json',
    cache:false,
    success:function(data){
        //  console.log(data);
        var str ='';
        for (var  prop of data.result.product_list){
            str += `
                <div class="tehui_list clearfix">
                    <div class="slide_img lf">
                        <img src="${prop.thum_img.old}" alt="" />
                    </div>
                    <div class="slide_txt lf">
                        <h3>${prop.title}</h3>
                        <p>${prop.explain}</p>
                        <del>￥6988</del><br />
                        <span class="span1">￥</span><span class="span2">${prop.price}</span>
                        <p>秒杀 03:12:08</p>
                        <div class="qianggou">
							 <h3>立即抢购</h3>
						 </div>
                    </div>
                </div> `
        }
        $(str).appendTo($('#tehui1 .swiper-slide'));
    }   
})
//最新上架
        // var pageNum = 0;
        // var isLoadBtn = false;
        // var btnCount;
  
            $.ajax({
                url:'http:10.0.157.251:8888/zuixinshangjia',
                type:'get',
                dataType:'json',
                cache:false,
                data:{pageNum},
                success:function(data){
                    console.log(data);
                    // $('.iPhone_list').remove($('#list-phone'));
                    var str = '';
                    for(var goods_listObj of data.result.good_list){
                        str += `
                        <li class="li_first lf">
                        <a href=""><img src="${goods_listObj.thum_img.old}" alt="iPhone6"></a>
                        <h4>${goods_listObj.product_name.substr(0,20)}</h4>
                        <p>${goods_listObj.subhead}</p>
                        <div class="price">
                            <span id="show_price">${goods_listObj.price}</span>
                            <div id="sale_price">${goods_listObj.discount}</div>
                            <span id="original_price">￥5288</span>	
                            <p>真机实拍，保修180天</p>
                        </div>
                        <p id="protect_price">此商品享受全国百店联保</p>
                    </li>`
                    }
                    $(str).appendTo($('#list-phone'));
                    $('#list-phone').appendTo($('.iPhone_list'));
                }
            })
        // }
       
//热销机型
$.ajax({
    url:"http:10.0.157.251:8888/rexiaojixing",
    type:'get',
    dataType:'json',
    cache:false,
    success:function(data){
        // console.log(data);
        var str ='';
        for(var propObj of data.result.product_list){
            // console.log(propObj);
            str += `
            <a class="a_item">
                <img src="${propObj.thum_img.big}" alt="iPhone6">
                <h4>${propObj.title}</h4>
                <p>${propObj.selling_point}</p>
                <p>${propObj.price}</p>
                <p id="hide">${propObj.explain}</p>
                <div class="big_save">
                    <p>${propObj.content}</p>
                </div>
            </a>`
        }
        $(".hotsale").append(str);
        $(".hot_iphone").append($(".hotsale"));
    }
})


