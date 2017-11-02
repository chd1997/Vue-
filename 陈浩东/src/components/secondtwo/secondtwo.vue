<template> 
	<transition name="slide">
		<div id="topic-detail">
			<div class="topnaav">
				<span class="s1"><router-link to="two">&#171;</router-link></span>
				<span class="s2">坡道起步</span>
				<span class="s3"><router-link to="index"><img src="static/imgs/home.png" alt=""></router-link></span>
			</div>
			<div id="content">
				<span>坡道定点停车和起步_半坡起步定</span>
				<p>&nbsp; 科目二小路考之坡道定点停车和起步主要介绍了关于坡道定点停车和起步的方法以及坡道定点停车和起步技巧，帮助您全面掌握坡道定点停车和起步。</p><br>
				<ul>
					<li>
						<div>1</div>
						&nbsp; 打右转向灯
					</li>
					<li>
						<div>2</div>
						&nbsp; 踩刹车向右慢打方向盘
					</li>
					<li>
						<div>3</div>
						&nbsp; 车速降低20KM/H,利用惯性向前滑行
					</li>
					<li>
						<div>4</div>
						&nbsp; 拉手刹
					</li>
								<li>
						<div>5</div>
						&nbsp; 把变速杆拔到空挡位置；
					</li>
					<li>
						<div>6</div>
						&nbsp; 左脚松开离合器；
					</li>
					<li>
						<div>7</div>
						&nbsp; 右脚松脚刹；
					</li>
					<li>
						<div>8</div>
						&nbsp; 关掉右转向灯。
					</li>
				</ul>
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
#topnaav{
	width:100%;
	height:2.0rem;
	background:white;
	margin-top:0.5rem;
	border-bottom:0.1rem solid  #E7E7E7;
}
#topnaav>span{
	line-height: 2.0rem;
	font-size:0.8rem;
	margin-left:0.5rem;
}
#content>span{
	width:17.0rem;
	height:2rem;
	display:block;
	margin-left:1.3rem;
	margin-top:1.25rem;
	letter-spacing:0.15rem;
	color: #333333;
	font-weight: 1000;
}
#content>p{
	width:17.0rem;
	height:3.5rem;
	display:block;
	margin-left:1rem;
	letter-spacing:0.15rem;
	color: #333333;
	line-height:1rem;
	font-size: 0.75rem;
}
#content>ul>li{
	width:100%;
	height: 1.5rem;
	/*background:red;*/
	overflow: hidden;
	line-height: 1.5rem;
	margin-top:0.5rem;
	overflow:hidden;
	text-overflow:ellipsis;
}
#content>ul>li>div{
	width:1.2rem;
	min-height: 1.2rem;
	border-radius:50%;
	background:#6DC143;
	margin-top:0.15rem;
	margin-left:0.25rem;
	color:white;
	text-align: center;
	line-height: 1.2rem;
	float:left;
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