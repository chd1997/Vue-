<template>  
	<transition name="slide">
		<div id="topic-detail">
			<div class="topnav">
					<span class="s1"><router-link to="index">&#171;</router-link></span>
					<span class="s2">学车指南</span>
			</div>
			<div id="bbottom">
				<h1>驾考科目二新规掌握四大法宝，满分轻松到手</h1>
				<span>相对科目一来说，科目二通过率相对来说就比较低了，科目二，练车以及考试的时候，需要注意什么</span>
				<h2>花时间练基本功</h2>
				<p>科二中，最重要的是让车子平稳不熄火的前进，这是最基本的，其次才能去看点入库、直角转弯、走坡道。所以再次强调，拉直线真的很重要。至少要把离合器的高低搞清楚，让离合器完美的与自己的脚配合</p>
				<img src="static/imgs/k2.jpg" alt="">
			</div>
		</div>
	</transition>
</template> 
<style>
.topnav{
	width:100%;
	height:2.5rem;
	background:white;
	position:fixed;
	top:0;
	left:0;
	/*margin-bottom:3rem;*/
}
.topnav>.s1>a{
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
.topnav>.s2{
	float:left;
	color:#7BC025;
	line-height: 2.25rem;
	margin-left: 17%;
}
.topnav>.s3>a>img{
	float:right;
	display:block;
	width:1.0rem;
	height: 1.0rem;
	margin-top:0.6rem;
	margin-right:0.5rem;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#bbottom{
	width:100%;
	min-height:15.0rem;
	margin-top:3.0rem;
}
#bbottom>h1{
	width:16.85rem;
	line-height: 1.5rem;
	font-weight:1000;
	margin:0 auto;
	font-size: 0.9rem;
}
#bbottom>span{
	width:16.85rem;
	height:3.0rem;
	display:block;
	margin:0 auto;
	margin-top:0.5rem;
	font-size: 0.8rem;
	line-height:1.3rem;
}
#bbottom>h2{
	width:16.85rem;
	height:1.5rem;
	/*background:green;*/
	line-height: 1.5rem;
	margin:0 auto;
	margin-top:1rem;
	font-weight: 1000;
	font-size: 0.9rem;
}
#bbottom>p{
	width:16.85rem;
	height:6.0rem;
	letter-spacing:0.25rem;
	margin:0 auto;
	margin-top:0.5rem;
	font-size: 0.8rem;
	text-align: justify;
    word-break: break-all;
    line-height:1.1rem;
}
#bbottom>img{
	width:16.85rem;
	height: 10.65rem;
	margin:0 auto;
	display: block;
	margin-top:1.5rem;
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