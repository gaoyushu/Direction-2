// 任务：task05
// 学号：2017011951
// 姓名：高予蜀

(function(){

    function Carousel(picList, itemlist, time){
        this.picList = document.getElementById(picList);
        this.itemlist = document.getElementById(itemlist);
        this.time = time || 1000;
    }

    Carousel.prototype.show = function(callback){

        this.callback = callback || function(){};

        var items = this.itemlist.getElementsByTagName("li");
        var pics = this.picList.getElementsByTagName("div");
        var self = this;
    
        // initialize
        for(var k = 0; k < items.length; k++){
            items[k].classList = "";
            pics[k].style.display = "none";
        }
        items[0].className = "active";
        pics[0].style.display = "block";
    
        // auto carousel
        var num = 0;
        var interval = null;
    
        function auto(num){
            interval = setInterval(function(){
                if(items.length <= num){
                    num = 0;
                }
                for(var k = 0; k < items.length; k++){
                    items[k].classList = "";
                    pics[k].style.display = "none";
                }
                items[num].className = "active";
                pics[num].style.display = "block";
                num++;
            }, self.time);
        }
        auto(num);
    
        // choose items
        for(var i = 0; i < items.length; i++){
            (function(j){
                items[j].onmouseover = function(){
                    clearInterval(interval);
                    for(var k = 0; k < items.length; k++){
                        items[k].classList = "";
                        pics[k].style.display = "none";
                    }
                    items[j].className = "active";
                    pics[j].style.display = "block";
                }
                items[j].onmouseleave = function(){ 
                    num = j;
                    auto(num);
                }
            })(i);
        }

        return this;

    }

    window.Carousel = Carousel;

})(window, document);