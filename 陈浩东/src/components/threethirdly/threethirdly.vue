<template> 
	<transition name="slide">
	   <div id="topic-detail">
				<div class="ttopnav">
						<span class="s1"><router-link to="index">&#171;</router-link></span>
						<span class="s2">路考口诀</span>
				</div>
				<div style="width:100%;height:0.5rem;margin-top:0.25rem;"></div>
				<div id="content">
					<div class="content-c">
						<span>上车喊报告，拉门出左脚；坐好叫考官，面带梨涡笑。关门深呼吸，坐姿要摆好；查看空挡位，点火要轻柔。方向别忘了，挂挡要干脆；手刹要放掉，起步问考官。多看后视镜，喇叭来欢叫；离合器放松，做好半联动。出发要稳当，别让考官晃；换挡要及时，加挡要迅速。遇人要刹车，可别过了头；转弯要减速，立即减下挡。多看多停顿，安全放心中；肩膀要放松，双手放到位。神态要自然，莫因考官慌；自己有信心，艰辛都不怕。胆大又心细，礼貌别忘了；只要牢记着，考试准能过。</span>
					</div>
				</div&nbsp;
				<div id="content">
					<div class="content-c">
						<span>逆行绕车到车门前，左手拉车门往后看。上车验证问考官好，然后把座位调舒坦。系安全带，看后视镜，踩离合、油门，看仪表盘。一切正常再报告，起步指令听考官。踩住离合1档挂，打左转向灯、按喇叭。放手刹，再观察（观察左侧路况，观察左后视镜）。慢抬离合把油加，起步就把2档挂。3、4、5档依次挂，路边停车听令下。考官让停车，程序别慌乱。先打右转向灯，降档2或3。松开油门看右侧镜，方向盘向右转半圈。稳住方向向边靠，先左再右回正方向盘。离合踩到底，脚刹停车不打颤。拉手刹，挂空挡，放离合，放脚刹，解下安全带往车左侧看。</span>
					</div>
				</div>
	   </div>
	</transition>
</template> 
<style>
.ttopnav{
	width:100%;
	height:2.5rem;
	background:white;
}
.ttopnav>.s1>a{
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
.ttopnav>.s2{
	float:left;
	color:#7BC025;
	line-height: 2.25rem;
	margin-left: 17%;
}
.ttopnav>.s3>a>img{
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
.content-c{
	background-color: #ffffff;
    width: 93%;
    height:13.0rem;
    overflow: hidden;
    margin: 0.5rem auto 0;
    border: 0.05rem solid #d7d7d7;
   /* margin-top:1.25rem;*/
}
.content-c>p{
	font-size: 0.8rem;
    margin: 0.25rem 0 0 0.5rem;
}
.content-c>span{
	font-size: 0.7rem;
    display:block;
    margin: 0.75rem 0.5rem 0.5rem 0.5rem;
    line-height:1rem;
    color:#666666;

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
