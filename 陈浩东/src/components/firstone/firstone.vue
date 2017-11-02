<template> 
	<transition name="slide">
		<div id="topic-detail">
			<div class="topnaav">
				<span class="s1"><router-link to="two">&#171;</router-link></span>
				<span class="s2">倒车入库</span>
				<span class="s3"><router-link to="index"><img src="static/imgs/home.png" alt=""></router-link></span>
			</div>
			<div id="content">
				<span class="sspan">对于很多人而言倒车入库可谓是<br><br>驾照路上最大的“拦路虎”<br><br>倒车图解:</span><br><br>
				<img class="iii" src="static/imgs/1.gif" alt="">
				<p>大神倒车入库</p>
				<img src="static/imgs/2.gif" alt="">
				<p>倒车入库技巧</p>
				<img style="width:15.0rem;height: 15.0rem;" src="static/imgs/3.gif" alt=""><br>
				<img style="width:15.0rem;height: 15.0rem;" src="static/imgs/4.gif" alt="">
			</div>
		</div>
	</transition>
</template> 
<style>
body{
	background-color: #F0F0F0;
} 
.topnaav{
	width:100%;
	height:2.5rem;
	background:white;
}
.topnaav>.s1>a{
	color:#7BC025;
	font-size:1.5rem;
	line-height: 2.25rem;
	float:left;
	width:3.5rem;
	height:2.5rem;
	text-align: center;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
.topnaav>.s2{
	float:left;
	color:#7BC025;
	line-height: 2.35rem;
	margin-left: 17%;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
.topnaav>.s3{
	width:3.5rem;
	height:2.5rem;
	float:right;
	/*background:red;*/
}
.topnaav>.s3>a>img{
	display:block;
	width:1.0rem;
	height: 1.0rem;
	margin:0 auto;
	margin-top:0.7rem;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#content>.sspan{
	width:90%;
	height:5.0rem;
	display:block;
	margin-left:1.5rem;
	margin-top:1.25rem;
	letter-spacing:0.15rem;
	color: #333333;
}
#content>p{
	display:inline-block;
	margin-left:5.8rem;
	margin-top:0.5rem;
	color: #333333;
}
#content>img{
	display:block;
	margin:0 auto;
	margin-top:0.5rem;
}
#content>.iii{
	display: block;
	margin-top:-1rem;
}
 .slide-enter-active, .slide-leave-active{
 	transition:all 0.2s linear; 
 }
    
  .slide-enter, .slide-leave-to{
  	 transform:translate3d(100%, 0, 0); 
  }

  #topic-detail{
  	width:100%;
    height:100%;
    background:#FAFAFA; 
    margin-bottom:40px;
    position: absolute;
    left:0;
    top :0;
    z-index :999;
  }
</style>