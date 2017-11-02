<template> 
	<transition name="slide">
		<div id="topic-detail">
			<div class="topnaav">
				<span class="s1"><router-link to="two">&#171;</router-link></span>
				<span class="s2">直角转弯</span>
				<span class="s3"><router-link to="index"><img src="static/imgs/home.png" alt=""></router-link></span>
			</div>
			<div id="content">
				<span>直角转弯_直角转弯技巧</span>
				<p>&nbsp; 科目二小路考之直角转弯主要介绍了关于直角转弯的方法以及直角转弯技巧，帮助您全面掌握直角转弯。</p><br>
				<ul>
						<li>
							<div>1</div>
							&nbsp; 一档通过，不加油门。
						</li>
						<li>
							<div>2</div>
							&nbsp; 驶入考场时尽量紧贴右侧路牙。
						</li>
						<li>
							<div>3</div>
							&nbsp; 车速降低20KM/H,利用惯性向前滑行
						</li>
						<li>
							<div>4</div>
							&nbsp; 正前方路牙一旦被引擎盖挡住视线，就要向左猛打方向，直到打到底。
						</li>
									<li>
							<div>5</div>
							&nbsp; 看到车头对准出口，就迅速将方向回正。
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
	margin-left: 18%;
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
	outline:none;
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
	width:15.0rem;
	height:2.5rem;
	display:block;
	margin-left:2rem;
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
	font-size: 0.75rem;
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