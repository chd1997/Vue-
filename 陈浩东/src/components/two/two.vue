<template> 
	<transition name="slide">
		<div id="topic-detail">
		<div class="topnavv">
			<span class="s1"><router-link to="index">&#171;</router-link></span>
			<span class="s2">考试秘籍</span>
		</div>
		<div id="lun">
			<ul>
				<li class="active"><img src="static/imgs/ccc.gif" alt=""></li>
			</ul>
		</div>
		<div id="content">
			<ul>
				<router-link to="firstone">
					<li>
					
						<div>1</div>
						<span>倒车入库</span>
						<p>&#10148;</p>
					
					</li>
				</router-link>
				
				<router-link to="Secondtwo">
					<li>
						<div>2</div>
						<span>坡道起步</span>
						<p>&#10148;</p>
					</li>
				</router-link>
				 
				
				<router-link to="Thirdlythree">
					<li>
						<div>3</div>
						<span>侧方停车</span>
						<p>&#10148;</p>
					</li>
				</router-link>
				<router-link to="Fourthlyfour">
					<li>
						<div>4</div>
						<span>曲线行驶</span>
						<p>&#10148;</p>
					</li>
				</router-link>
				
				<router-link to="Fifthfive">
					<li>	
						<div>5</div>
						<span>直角转弯</span>
						<p>&#10148;</p>
					</li>
				</router-link>
			</ul>
		</div>
		</div>
	</transition>
</template> 
<style>
.topnavv{
	width:100%;
	height:2.5rem;
	background:white;
}
.topnavv>.s1>a{
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
.topnavv>.s2{
	float:left;
	color:#7BC025;
	line-height: 2.25rem;
	margin-left: 17%;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
.topnavv>.s3>a>img{
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
#lun{
	width:100%;
	height:3.5rem;
	margin:0 auto;
	position:relative;
	overflow:hidden;
	margin-top:0.5rem;
}
#lun>ul>.active>img{
	width: 100%;
	height:3.5rem;
}
#content{
	width:100%;
	margin-top:1.0rem;
}
#content>ul>a>li{
	width:100%;
	height:2.0rem;
	background:white;
	margin-top:0.5rem;
	overflow:hidden;
	border-bottom:0.05rem solid #CCCCCC;
	font-size:0.9rem;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#content>ul>a>li>div{
	width:1.0rem;
	height:1.0rem;
	border:0.05rem solid #00ACFF;
	border-radius: 0.25rem;
	background:#00ACFF;
	color:white;
	margin-left: 0.5rem;
	margin-top:0.4rem;
	text-align: center;
	font-size: 0.75rem;
	line-height: 0.89rem;
	float:left;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#content>ul>a>li>span{
	float: left;
	text-align: center;
	margin-left:27%;
	line-height: 2rem;
	color: #666666;
	font-size: 0.8rem;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
#content>ul>a>li>p{
	float:right;
	display:inline-block;
	line-height: 1.75rem;
	margin-right: 1.0rem;
	color: #CCCCCC;
	-moz-user-focus: none;
	-moz-user-select: none;
	-webkit-tap-highlight-color: transparent;
  	-webkit-touch-callout: none;
  	-webkit-user-select: none;
}
 .slide-enter-active, .slide-leave-active{
 	transition:all 0.2s linear; 
 }
    
  .slide-enter, .slide-leave-to{
  	 transform:translate3d(100%, 0, 0); 
  }
   
    
  #topic-detail{
  	width:100%;
    background:#FAFAFA; 
    margin-bottom:40px;
    position: absolute;
    left:0;
    top :0;
    z-index :999;
  }
</style>