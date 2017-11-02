<template> 
	<transition name="slide">
		<div id="topic-detail">
		<div class="topnaav">
			<span class="s1"><router-link to="two">&#171;</router-link></span>
			<span class="s2">侧方停车</span>
			<span class="s3"><router-link to="index"><img src="static/imgs/home.png" alt=""></router-link></span>
		</div>
		<div id="content">
			<span>侧方停车_侧方位停车技巧</span>
			<p>  科目二小路考之坡道定点停车和起步主要介绍了关于坡道定点停车和起步的方法以及坡道定点停车和起步技巧，帮助您全面掌握坡道定点停车和起步。</p>
			<h1>&nbsp; 首先要判断车位长短。侧方位停车之前首先要判断车位是否能容纳自己所开的车型。一般说来，自己所开车长再加一米的距离，就可以足够侧方位停车，不过对技术要求还是比较高。</h1>
			<h1>&nbsp; 然后方向向右打完直至左后视镜能完全看到后车车头。保持右打方向到底慢慢倒车，直至左侧后视镜能完全看到后车的车头时快速将方向从最右打到最左，继续倒车。</h1>
			<h1>&nbsp; 最后要调节前后距离，把车摆正。随着后车轮和路肩的靠近、车身逐渐摆直，尾部也会接近后方车辆。这时可以采用扭头观看，或是利用倒车辅助系统来判断后车距离。最后把车子完全摆正，方向盘归位。</h1>
		</div>
		</div>
	</transition>
</template> 
<style>
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
}
.topnaav>.s3{
	width:3.5rem;
	height:2.5rem;
	float:right;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
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
#content>span{
	width:15rem;
	height:2rem;
	display:block;
	margin-left:2.7rem;
	margin-top:1.25rem;
	letter-spacing:0.15rem;
	color: #333333;
	font-weight: 1000;
}
#content>p{
	width:17.0rem;
	height:3.5rem;
	display:block;
	margin-left:1.5rem;
	letter-spacing:0.15rem;
	color: #333333;
	line-height:1rem;
	font-size: 0.75rem;
}	
#content>h1{
	width:17.0rem;
	min-height:3.5rem;
	display:block;
	margin-top:1.0rem;
	margin-left:1rem;
	letter-spacing:0.15rem;
	line-height:1.5rem;
	font-size: 0.9rem;
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
<!-- <script src="./lun.js"></script> -->