<template> 
	<transition name="slide">
		<div id="topic-detail">
		<div class="topnav">
				<span class="s1"><router-link to="index">&#171;</router-link></span>
				<span class="s2">科四题库</span>
		</div>
		<div style="margin-top:3rem;">
			<div v-if="tolist.length" id="content"v-for="(item, index) in tolist">
				<div class="conttent-c">
					<span >{{ item.question }}</span>
					<img :src="item.pic" alt="">
					<span >{{ item.option1 }}</span>
					<span >{{ item.option2 }}</span>
					<span >{{ item.option3 }}</span>
					<span >{{ item.option4 }}</span>
					<span style="color:black;">正确答案:&nbsp; <span class="haha">{{item.answer}}</span></span>
				</div>
			</div>
			<div class="jzz" v-show="!tolist.length"><img src="static/imgs/cc.gif" alt=""></div>
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
.conttent-c>img{
	width: 100%;
}
.conttent-c{
	background-color: #ffffff;
    width: 93%;
    /*min-height:10rem;*/
    margin: 0.5rem auto 0;
    border: 0.05rem solid #d7d7d7;
}
.conttent-c .haha{
	color:black;
} 
.conttent-c>p{
	font-size: 0.8rem;
    margin: 0.25rem 0 0 0.5rem;
}
.conttent-c>span{
	font-size: 0.7rem;
    display:block;
    margin: 0.75rem 0.5rem 0.5rem 0.5rem;
    line-height:1rem;
    color:#666666;
}
.jzz{
	width:100%;
	height:30rem;
	background:white;
	overflow: hidden;
	position:relative;
}
.jzz>img{
	width:100%;
	display:block;
	position: absolute;
	top:0;
	left:0;
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
<script>
    import axios from 'axios'

    export default {
      data () {
        return {
          topicList: [],
          tolist: []
        }
      },
      created () {
        this._getTopic()
      },
      methods: {
        _getTopic () {
          let url = 'https://bird.ioliu.cn/v1/?url=https://way.jd.com/jisuapi/driverexamQuery?type=c1&subject=4'
          axios.get(url, {
            params: {
              pagesize: 9500,
              total: 9500,
              appkey: '841e93ac0927441aa6332b2502bb52f3'
            }
          }).then((res) => {
            this.topicList.push(res.data.result.result)
            this.tolist = res.data.result.result.list
            console.log(this.topicList)
            console.log(this.tolist)
          }).catch((error) => {
            console.log(error)
          })
        }
      }
    }
</script>