window.onload=function(){
    var oTuiJianUl=document.getElementById("tuiJianUl");
    var aTuiJianA=oTuiJianUl.getElementsByTagName("a");
    var aTuiJianDiv=oTuiJianUl.getElementsByTagName("div");
    var aTuiJianDivSpan=oTuiJianUl.getElementsByTagName("span");
    var aTuiJianOver=oTuiJianUl.getElementsByTagName("aside");
    var oTuiJianImg=document.getElementById("tuiJian-img");
    var aTuijianImg=oTuiJianImg.getElementsByTagName("a");
    var oTuiJianP=oTuiJianImg.getElementsByTagName("p")[0];
    var aTuiJianEm=oTuiJianImg.getElementsByTagName("em");
    var oTuiJianAside=oTuiJianImg.getElementsByTagName("aside")[0];
    var sImg=["年度up奖项揭晓，点击回顾收看精彩花絮","请收下这满满的心意","游戏新知：《皇牌空战7：未知天际》","幸福账单有奖募集中！","点燃2019的武侠群像曲"]
    var arrImg=["tuiJian-img.jpg","哔哩哔哩漫画.jpg","皇牌空战7.png","幸福账单.jpg","武侠群像曲.jpg"];
    var that=0;
    var num=-440;
    var Num=1;
    var thatNum=0;
    var timerShow=null;
    var timerSpeed=null;
    // play-img
    var oDiv=document.getElementById("play-img");
    var oImg=oDiv.getElementsByTagName("img")[0];
    var oP=oDiv.getElementsByTagName("p")[0];
    var srcArr=["img/play-img1.jpg","img/play-img2.png","img/play-img3.jpg"];
    var pArr=["2019春节活动","今日LPL赛事！","S9新赛季开启，来做峡谷最秀的仔！"];
    var aSpan=document.getElementById("play-span").getElementsByTagName("span");
    var NUM=1;
    var thatNUM=0;
    aSpan[0].style.width=30+"px";
    aSpan[0].style.backgroundColor="#f45d8f";
    imgShow();
    for(var i=0;i<aSpan.length;i++){
        aSpan[i].index=i;
        aSpan[i].onmousemove=function(){
            clearInterval(oImg.timer);
            aSpan[thatNUM].style.backgroundColor="white";
            aSpan[thatNUM].style.width=10+"px";
            thatNUM=this.index;
            NUM=this.index;
            oImg.src=srcArr[this.index];
            oP.innerHTML=pArr[this.index];
            aSpan[0].style.width=10+"px";
            aSpan[0].style.backgroundColor="white";
            this.style.width=30+"px";
            this.style.backgroundColor="#f45d8f";
            
        };
        aSpan[i].onmouseout=imgShow;
    }
    function imgShow(){
        clearInterval(oImg.timer);
        oImg.timer=setInterval(function(){
            thatNUM=NUM;
            aSpan[NUM].style.width=30+"px";
            aSpan[NUM].style.backgroundColor="#f45d8f";
            if(!NUM==0){
                aSpan[NUM-1].style.width=10+"px";
                aSpan[NUM-1].style.backgroundColor="white";
            }else{
                aSpan[aSpan.length-1].style.width=10+"px";
                aSpan[aSpan.length-1].style.backgroundColor="white";
            }
            oImg.src=srcArr[NUM];
            oP.innerHTML=pArr[NUM];
            NUM++;
            if(NUM==srcArr.length){
                NUM=0;
            }
        },2000)
    }
    //----
    for(var i=0;i<aTuiJianDivSpan.length;i++){
        aTuiJianDivSpan[i].innerHTML="【台词放送】神回是1%的治愈加上99%的梗";
        aTuiJianDivSpan[i].index=i;
    }
    for(var i=0;i<aTuiJianA.length;i++){
        aTuiJianA[i].index=i;
        aTuiJianDiv[i].index=i;
        aTuiJianOver[i].index=i;
        aTuiJianA[i].title="【台词放送】神回是1%的治愈加上99%的梗";
        aTuiJianA[i].onmouseenter=tuiJianOver;
        aTuiJianA[i].onmouseleave=tuiJianOut;
    }
    for(var i=0;i<aTuijianImg.length;i++){
        aTuijianImg[i].style.top=0;
        aTuijianImg[i].style.left=i*440+"px";
        aTuijianImg[i].style.backgroundImage="url(img/"+arrImg[i]+")";
    }
    for(var i=0;i<aTuiJianEm.length;i++){
        aTuiJianEm[i].index=i;
        aTuiJianEm[i].onclick=function(){
            clearInterval(timerShow);
            oTuiJianAside.style.left=-440*this.index+"px";
            num=-440*[this.index+1];
            oTuiJianP.innerHTML=sImg[this.index];
            for(var i=0;i<aTuiJianEm.length;i++){
                if(aTuiJianEm[i].onOff){
                    aTuiJianEm[i].className="tuiJian-img-checkbox tuiJian-img-checkboxOne";
                }else{
                    aTuiJianEm[i].className="tuiJian-img-checkbox";
                }
            }
            aTuiJianEm[this.index].className="tuiJian-img-checkbox tuiJian-img-checkboxOne";
            if(this.index==4){
                Num=1;
            }else{
                Num=this.index+1;
            }
            tuiJianImgShow();
        }
    }
    /*推荐视频*/
    oTuiJianUl.onmouseleave=function(){
        aTuiJianOver[that].style.display="none";
    }
    tuiJianImgShow();
    function tuiJianOver(){
        aTuiJianOver[that].style.display="none";
        that=this.index;
        aTuiJianOver[this.index].style.display="block";
        aTuiJianDiv[this.index].innerHTML="";
        aTuiJianOver[this.index].innerHTML="<span>【台词放送】神回是1%的治愈加上99%的梗</span><p class='pUp'>up主：赤井心Official</p><p class='pBoFang'>播放：3.9万</p>";
       
    }
    function tuiJianOut(){
        aTuiJianOver[that].style.display="none";
        aTuiJianDiv[this.index].innerHTML="<span>【台词放送】神回是1%的治愈加上99%的梗</span>";
    }
    /* 推荐图片*/
    function tuiJianImgSpeed(){
        clearInterval(timerSpeed);
        timerSpeed=setInterval(function(){
            var oWidth=parseInt(getComputedStyle(oTuiJianAside).left);
            var speed=oWidth-88;
            oTuiJianAside.style.left=speed+"px";         
            if(speed<num){
                speed=num
            }
            if(speed===num){
                oTuiJianP.innerHTML=sImg[Num];
                aTuiJianEm[Num].onOff=true;
                for(var i=0;i<aTuiJianEm.length;i++){
                    if(aTuiJianEm[i].onOff){
                        aTuiJianEm[i].className="tuiJian-img-checkbox tuiJian-img-checkboxOne";
                    }else{
                        aTuiJianEm[i].className="tuiJian-img-checkbox";
                    }
                }
                aTuiJianEm[Num].onOff=false;
                num-=440;
                Num++;
                if(Num===5){
                    Num=1;
                }
                clearInterval(timerSpeed);
            }
        },50)
    };
    function tuiJianImgShow(){
        clearInterval(timerShow);
        timerShow=setInterval(function(){
            tuiJianImgSpeed();
            if(num===-2200){
                num=-440;
                aTuiJianEm[0].className="tuiJian-img-checkbox tuiJian-img-checkboxOne";
                aTuiJianEm[4].className="tuiJian-img-checkbox";
                oTuiJianP.innerHTML=sImg[0];
                oTuiJianAside.style.left=0;
                clearInterval(timerSpeed);
            }
        },2000)
    }
}