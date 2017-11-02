<template> 
	<transition name="slide">
		<div id="topic-detail">
			<div class="topnav">
					<span class="s1"><router-link to="index">&#171;</router-link></span>
					<span class="s2">学车指南</span>
			</div>
			<div id="bottom">
				<h1>科目二怎么练车 科目二练车技巧</h1>
				<span>很多学员抱怨科目二很难 但在小编看来科目二并不难，只要找到正确的方法和窍门多练多思考，科目二轻松过！</span>
				<h2>心态要放松</h2>
				<p>倒车入库和侧方位停车这两个项目开始限时，很多学员肯定会为了速度而出现很多不必要的失误。所以这时候千万不要慌张，按照平时练习的状态来考试，只要你熟练掌握，限时并不是很难。</p>
				<img src="static/imgs/k22.jpg" alt="">
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
#bottom{
	width:100%;
	min-height:15.0rem;
	margin-top:3.0rem;
}
#bottom>h1{
	width:16.85rem;
	line-height: 1.5rem;
	font-weight:1000;
	margin:0 auto;
	font-size: 0.9rem;
}
#bottom>span{
	width:16.85rem;
	height:3.0rem;
	display:block;
	margin:0 auto;
	margin-top:0.2rem;
	font-size: 0.8rem;
	line-height: 1.1rem;
}
#bottom>h2{
	width:16.85rem;
	height:1.5rem;
	/*background:green;*/
	line-height: 1.5rem;
	margin:0 auto;
	margin-top:0.5rem;
	font-weight: 1000;
	font-size: 0.9rem;
}
#bottom>p{
	width:16.85rem;
	height:6.0rem;
	letter-spacing:0.25rem;
	margin:0 auto;
	margin-top:0.2rem;
	font-size: 0.8rem;
	text-align: justify;
    word-break: break-all;
    line-height: 1.1rem;
}
#bottom>img{
	width:16.85rem;
	height: 10.65rem;
	margin:0 auto;
	display: block;
	margin-top:1.0rem;
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