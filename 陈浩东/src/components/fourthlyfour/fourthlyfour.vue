<template> 
	<transition name="slide">
		<div id="topic-detail">
		<div class="topnaav">
			<span class="s1"><router-link to="two">&#171;</router-link></span>
			<span class="s2">曲线行驶</span>
			<span class="s3"><router-link to="index"><img src="static/imgs/home.png" alt=""></router-link></span>
		</div>
		<div id="content">
			<span>曲线行驶_曲线行驶技巧</span>
			<p>&nbsp; 科目二小路考之曲线行驶主要介绍了关于曲线行驶的方法以及曲线行驶技巧，帮助您全面掌握曲线行驶。</p>
			<h1>&nbsp; 在进入左弯前，车辆靠右走，用车左前角一直压着右边线走，等到要换右弯时，方向回正，进入右弯，用车的右前角一直压着左边线走，等完全走出了曲线，方向再回正．在进入右弯前，车辆靠左走，用车右前角一直压着左边线走，等到要换左弯时，方向回正，进入左弯，用车的左前角一直压着右边线走，等完全走出了曲线，方向再回正。考场其实就是一条“S”形道路，只是路宽仅3.5米。一要保持全程一挡行驶，打方向不可过急。二是驶向右弯道时，右轮贴着其右边路牙，反之亦然。</h1>
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
	width:15.0rem;
	height:2rem;
	display:block;
	margin-left:2.7rem;
	margin-top:1.25rem;
	letter-spacing:0.15rem;
	color: #333333;
	font-weight: 1000;
}
#content>p{
    width: 17.0rem;
    height: 3.5rem;
    display: block;
    margin-left: 1.5rem;
    letter-spacing: 0.15rem;
    color: #333333;
    line-height: 1rem;
    font-size: 0.75rem;
}	
#content>h1{
	width:17.0rem;
	min-height:3.5rem;
	display:block;
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