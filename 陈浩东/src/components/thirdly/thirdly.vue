<template> 
	<transition name="slide">
		<div id="topic-detail">
			<div class="topnav">
					<span class="s1"><router-link to="index">&#171;</router-link></span>
					<span class="s2">学车指南</span>
			</div>
			<div id="botttom">
				<h1>新规后学员积压严重，驾校坐不住了：涨价!!!</h1>
				<span>新驾考开考也整整过去了两周。全国科二科三通过率下跌严重，尤其是科三，已经下跌到国庆前的三四成。</span>
				<h2>不用怀疑，学车确实越来越难</h2>
				<p>早在年初时，有人还对“学车将会更难”嗤之以鼻，但是10月驾考新规一颁布，彻底傻了眼。夜间灯光改革、取消提示语音、新增回头观察···学车确实越来越难了，这就是现实。</p>
				<img src="static/imgs/tz.jpg" alt="">
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
}
#botttom{
	width:100%;
	min-height:15.0rem;
	margin-top:3.0rem;
}
#botttom>h1{
	width:16.85rem;
	line-height: 1.5rem;
	font-weight:1000;
	margin:0 auto;
}
#botttom>span{
	width:16.85rem;
	height:3.0rem;
	display:block;
	margin:0 auto;
	margin-top:0.5rem;
	font-size: 0.8rem;
	line-height:1.3rem;
}
#botttom>h2{
	width:16.85rem;
	height:1.5rem;
	font-size: 0.9rem;
	line-height: 1.5rem;
	margin:0 auto;
	margin-top:0.8rem;
	font-weight: 1000;
}
#botttom>p{
	width:16.85rem;
	height:6.0rem;
	letter-spacing:0.25rem;
	margin:0 auto;
	margin-top:0.3rem;
	font-size: 0.8rem;
	text-align: justify;
    word-break: break-all;
    line-height: 1.1rem;
}
#botttom>img{
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