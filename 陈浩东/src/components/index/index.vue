<template>
	<div>
		<div id="navbar">
			<div class="automobile"><img src="static/imgs/c.gif" alt=""></div>
		</div>
		<div id="subject">
			<ul>
				<li><router-link to="three"><img src="static/imgs/1.png" alt="">科目一</router-link></li>
				<li><router-link to="two"><img src="static/imgs/2.png" alt="">科目二</router-link></li>
				<li><router-link to="Threethirdly"><img src="static/imgs/3.png" alt="">科目三</router-link></li>
				<li><router-link to="Fourfourthly"><img src="static/imgs/4.png" alt="">科目四</router-link></li>
			</ul>
		</div>
		<div id="Guide">
			<div class="more">
				<span>&nbsp;学车指南</span>
			</div>
			<ul>
				<router-link to="first">
					<li>
						<img src="static/imgs/a1.jpg" alt="">
						 &nbsp;科二怎么练车 练车技巧
					</li>
				</router-link>
				<router-link to="Second">	
					<li>
						<img src="static/imgs/a2.jpg" alt="">
						 &nbsp;驾考科目二新规四大法宝
					</li>
				</router-link>
				<router-link to="Thirdly">
					<li>
						<img src="static/imgs/a3.jpg" alt="">
						 &nbsp;新规后学员积压严重驾校<br>&nbsp;	
					</li>
				</router-link>
			</ul>
		</div>
		<div id="bottomm">
			<p>但愿人长久 莫恋杯中酒 &nbsp; 滴&nbsp; 滴滴</p>
		</div>
	</div>
</template>
<style scoped>
#navbar{
	width:100%;
	height:6.65rem;
	/*background:red;*/
	overflow:hidden;
}
.automobile>img{
	width:100%;
	height:6.65rem; 
	outline:none;
}
#subject{
	width:100%;
	height:6rem;
	margin-top:0.5rem;
	overflow:hidden;
}
#subject>ul>li{
	float:left;
	width:4.0rem;
	height:5.5rem;
	border-radius:0.25rem;
	margin-left:0.47rem;
	text-align: center;
	background:rgba(255,255,255,0.6);
	border:0.05rem solid #EEE;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#subject>ul>li>a{
	font-family: 华文楷体;
	color:black;
	outline:none;
}
#subject>ul>li>a>img{
	width:2.5rem;
	height:2.5rem;
	display:block;
	margin-left:0.65rem;
	margin-top:0.65rem;
	margin-bottom:0.5rem;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#Guide{
	background:white;
	width:100%;
	height:15.0rem;
	margin-top:0.3rem;
	background:#FAFAFA;
	background:rgba(255,255,255,0.5);
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#Guide>.more{
	width:100%;
	height:2.5rem;
	border-radius: 0.8rem;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#Guide>.more>span{
	line-height: 2.5rem;
	font-size:0.95rem;
	margin-left:0.75rem;
	font-family: 华文楷体;
}
.more-right>a{
	float:right;
	margin-right:1.0rem;
	color:#555;
}
#Guide>ul>a>li{
	width:100%;
	height:3.5rem;
	/*background:red;*/
	margin-top:0.6rem;
	overflow:hidden;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#Guide>ul>a>li{
	font-size:0.9rem;
	color:black;
	font-family: 华文楷体;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#Guide>ul>a>li>img{
	width:5.6rem;
	height:3.5rem;
	float:left;
	margin-left:0.75rem;
	border-radius:3px;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#bottomm{
	width:100%;
	font-family: 华文楷体;
}
#bottomm>p{
	line-height:4.0rem;
	font-size:0.75rem;
	color:#999999;
	display:inline-block;
	margin-left:3.7rem;
	outline:none;
}
</style>