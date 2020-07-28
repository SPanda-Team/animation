<template>
  <div class="linear_Layout">
    <div class="loadingContainer" v-if="loading">
      <div class="loading">
       <span></span>
       <span></span>
       <span></span>
       <span></span>
       <span></span>
       <span></span>
      </div>
      <div class="loadingText" @click="toWelcome()">Loading</div>
    </div>
    <div v-if="!loading">
      <div class="welcomeTextContainer">
        <div class="print welcomeText">Welcome&nbsp;To</div>
      </div>
      <div class="teamTextContainer">
        <span>S</span>
        <span>P</span>
        <span>A</span>
        <span>N</span>
        <span>A</span>
        <span>D</span>
        <span>A</span>
        <span>&nbsp;</span>
        <span>T</span>
        <span>E</span>
        <span>A</span>
        <span>M</span>
      </div>
      <transition name="bounce">
        <div class="showText" @click="show()">Show&nbsp;Us</div>
      </transition>
    </div>
    <div class="sculptureContaniner" v-show="showSculpture">
      <div class="row">
        <div id="head_dengk" class="imgContainer transition_roate">
          <img src="../assets/headSculpture/dengk.jpg" />
        </div>
        <div id="head_hujq" class="imgContainer transition_roate animate__backInDown" v-show="hujq">
          <img src="../assets/headSculpture/hujq.jpg" />
        </div>
        <div id="head_linz" class="imgContainer transition_roate animate__zoomIn" v-show="linz">
          <img src="../assets/headSculpture/linz.jpg" />
        </div>
        <div id="head_liq" class="imgContainer transition_roate animate__backInDown" v-show="liq">
          <img src="../assets/headSculpture/liq.jpg" />
        </div>
        <div id="head_liun" class="imgContainer transition_roate">
          <img src="../assets/headSculpture/liun.jpg" />
        </div>
      </div>
      <div class="row">
        <div id="head_liuty" class="imgContainer transition_big" v-show="liuty">
          <img src="../assets/headSculpture/liuty.jpg" />
        </div>
        <div id="head_piyp" class="imgContainer ani3s transition_biganimate__rubberBand" v-show="piyp">
          <img src="../assets/headSculpture/piyp.jpg" />
        </div>
        <div id="head_tanzq" class="imgContainer ani3s transition_big animate__swing" v-show="tanzq">
          <img src="../assets/headSculpture/tanzq.jpg" />
        </div>
        <div id="head_wangmj" class="imgContainer ani3s transition_big animate__rubberBand" v-show="wangmj">
          <img src="../assets/headSculpture/wangmj.jpg" />
        </div>
        <div id="head_xial" class="imgContainer ani3s transition_big animate__pulse" v-show="xial">
          <img src="../assets/headSculpture/xial.jpg" />
        </div>
      </div>
      <div class="row row3" v-show="row3">
        <div id="head_zhangb" class="imgContainer transition_roate">
          <img src="../assets/headSculpture/zhangb.jpg" />
        </div>
        <div id="head_zhangyh" class="imgContainer transition_roate">
          <img src="../assets/headSculpture/zhangyh.jpg" />
        </div>
        <div id="head_zhangzy" class="imgContainer transition_roate">
          <img src="../assets/headSculpture/zhangzy.jpg" />
        </div>
        <div id="head_zouy" class="imgContainer transition_roate">
          <img src="../assets/headSculpture/zouy.jpg" />
        </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      height: 0, // 高度
      loading: true, // 加载中
      showSculpture: false, // 展示头像
      hujq: false,
      liq: false,
      linz: false,
      liuty: false,
      piyp: false,
      tanzq: false,
      wangmj: false,
      xial: false,
      row3: false
    };
  },
  created() {
    this.height = 'min-height: ' + window.innerHeight + 'px';
  },
  mounted() {
  },
  methods: {
    toWelcome() {
      this.loading = !this.loading;
    },
    show() {
      this.showSculpture = !this.showSculpture;
      if (this.showSculpture) {
        this.showTime();
      } else {
        this.hujq = false;
        this.liq = false;
        this.linz = false;
        this.liuty = false;
        this.piyp = false;
        this.tanzq = false;
        this.wangmj = false;
        this.xial = false;
        this.row3 = false;
      }
    },
    showTime() {
      setTimeout(()=> {
        this.hujq = true;
        this.liq = true;
      }, 3050);
      setTimeout(()=> {
        this.linz = true;
      }, 6100);
      setTimeout(()=> {
        this.liuty = true;
        this.piyp = true;
        this.liuty = true;
        this.tanzq = true;
        this.wangmj = true;
        this.xial = true;
      }, 9150);
      setTimeout(()=> {
        this.row3 = true;
      }, 12200);
    }
  }
};
</script>

<!-- CSS3 动画
当在@keyframe创建动画，把它绑定到一个选择器，否则动画不会有任何效果。
指定至少这两个CSS3的动画属性绑定向一个选择器：
规定动画的名称
规定动画的时长 必须定义动画的名称和动画的持续时间。如果省略的持续时间，动画将无法运行，因为默认值是0。-->
<style>
  .nothing
  {
    animation-name: nothing;/* 规定 @keyframes 动画的名称。 */
    animation-duration: 5s;/* 规定动画完成一个周期所花费的秒或毫秒。默认是 0。 */
    animation-timing-function: linear;/* 规定动画的速度曲线。默认是 "ease"。 */
    animation-delay: 2s;/* 规定动画何时开始。默认是 0。 */
    animation-iteration-count: infinite;/* 规定动画被播放的次数。默认是 1。 */
    animation-direction: alternate;/* 规定动画是否在下一周期逆向地播放。默认是 "normal"。 */
    animation-play-state: running; /* 规定动画是否正在运行或暂停。默认是 "running"。 */
    /* animation: nothing 5s linear 2s infinite alternate running; */
  }

  .linear_Layout {
    position: relative;
    height: 100vh;
    background-color: #666699;
  }
  .loadingContainer {
    position: absolute;
    width: 100%;
    top: 60%;
    text-align: center;
  }
  .loading{
    width: 200px;
    height: 20px;
    margin: 20px auto;
  }
  .loading span{
    display: inline-block;
    width: 20px;
    height: 100%;
    margin-right: 10px;
    background: #FFFFFF;
    transform-origin: right bottom;
    animation: load 1s ease infinite;
  }
  .loading span:last-child{
    margin-right: 0px;
  }
  @keyframes load{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(90deg);
    }
  }
  .loading span:nth-child(1){
    animation-delay: 0.15s;
  }
  .loading span:nth-child(2){
    animation-delay: 0.30s;
  }
  .loading span:nth-child(3){
    animation-delay: 0.45s;
  }
  .loading span:nth-child(4){
    animation-delay: 0.60s;
  }
  .loading span:nth-child(5){
    animation-delay: 0.75s;
  }
  .loading span:nth-child(5){
    animation-delay: 0.9s;
  }
  .loadingText {
    width: 250px;
    height: 50px;
    line-height: 50px;
    margin: 10px auto;
    color: #FFFFFF;
    font: bold 70px DanielBlack;
  }

  .welcomeTextContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    margin: 120px auto;
  }
  .print{
    animation: typing 5s linear;
  }
  .welcomeText {
    width: 500px;
    overflow: hidden;
    word-break: keep-all;
    font-family: monospace;
    font-weight: bold;
    font-size: 50px;
    color: #FFCC99;
  }
  /*文本动画：从宽度为0开始*/
  @keyframes typing {
    from { width: 0;}
    to {width: 500px;}
  }

  .teamTextContainer {
    width: 100%;
    margin: 100px auto 20px auto;
    color: #FF9999;
    font-family: AnuDaw;
    font-weight: bold;
    font-size: 80px;
    text-align: center;
  }
  .teamTextContainer span {
    display: inline-block;
    transform: translate(0, -200px);
    opacity: 0;
    animation: bouncing 2s forwards;
  }
  @keyframes bouncing{
    40%{
      opacity: 1;
      transform: translate(0, 0);
    }
    50%{
      opacity: 1;
      transform: translate(0, -12px);
    }
    60%{
      opacity: 1;
      transform: translate(0, 0);
    }
    70%{
      opacity: 1;
      transform: translate(0, -8px);
    }
    80%{
      opacity: 1;
      transform: translate(0, 0);
    }
    90%{
      opacity: 1;
      transform: translate(0, -4px);
    }
    100%{
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  .teamTextContainer span:nth-child(1){
    animation-delay: 5.1s;
  }
  .teamTextContainer span:nth-child(2){
    animation-delay: 5.6s;
  }
  .teamTextContainer span:nth-child(3){
    animation-delay: 6.3s;
  }
  .teamTextContainer span:nth-child(4){
    animation-delay: 7.4s;
  }
  .teamTextContainer span:nth-child(5){
    animation-delay: 8.1s;
  }
  .teamTextContainer span:nth-child(6){
    animation-delay: 8.8s;
  }
  .teamTextContainer span:nth-child(7){
    animation-delay: 9.1s;
  }
  /* 空格 */
  .teamTextContainer span:nth-child(8){
    animation-delay: 11s;
  }
  .teamTextContainer span:nth-child(9){
    animation-delay: 11.8s;
  }
  .teamTextContainer span:nth-child(10){
    animation-delay: 12.1s;
  }
  .teamTextContainer span:nth-child(11){
    animation-delay: 12.6s;
  }
  .teamTextContainer span:nth-child(12){
    animation-delay: 13.5s;
  }

  .showText {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    padding: 10px;
    color: #FFFFFF;
    font: bold 32px DanielBlack;
  }

  .bounce-enter-active {
    animation: bounce-in .5s 15s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .sculptureContaniner {
    width: 100%;
    margin-top: 50px;
  }
  .row {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .imgContainer {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 30px;
    border: 5px solid #FFFFFF;
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  .transition_roate {
    transition-property:width, height, transform, background, font-size, opacity;/* 规定应用过渡的 CSS 属性的名称。 */
    transition-duration:1s,1s,1s,1s,1s,1s;/* 定义过渡效果花费的时间。默认是 0。 */
  }
  .transition_roate:hover {
    transform: rotate(360deg);
  }
  .transition_big {
    transition-property: transform;
    transition-duration: 1s;
  }
  .transition_big:hover {
    transform: scale(1.2, 1.2);
  }

  #head_dengk {
    animation: animated_left_to_right 3s;
  }
  @keyframes animated_left_to_right
  {
    20%	  {transform: rotate(0deg);left:0px;}
    25%		{transform: rotate(20deg);left:0px;}
    50%		{transform: rotate(0deg);left:500px;}
    55%		{transform: rotate(0deg);left:500px;}
    70%		{transform: rotate(0deg);left:500px;height: 150px;width: 150px;}
    85%   {left:500px;height: 180px;width: 180px;}
    86%   {transform: rotate(0deg);left:500px;height: 180px;width: 180px;}
    100%	{transform: rotate(-360deg);left:0px;}
  }
  #head_liun {
    animation: animated_right_to_left 3s;
  }
  @keyframes animated_right_to_left
  {
    20%	  {transform: rotate(0deg);right:0px;}
    25%		{transform: rotate(20deg);right:0px;}
    50%		{transform: rotate(0deg);right:500px;}
    55%		{transform: rotate(0deg);right:500px;}
    70%		{transform: rotate(0deg);right:500px;height: 150px;width: 150px;}
    85%   {right:500px;height: 180px;width: 180px;}
    86%   {transform: rotate(0deg);right:500px;height: 180px;width: 180px;}
    100%	{transform: rotate(-360deg);right:0px;}
  }
  #head_hujq {
    animation-duration: 3s;
  }
  #head_liq {
    animation-duration: 3s;
  }
  #head_linz {
    animation-duration: 3s;
  }
  #head_liuty {
    animation: heartBeat 3s;
  }
  #head_piyp {
    animation: jello 3s;
  }
  #head_tanzq {
    animation: wobble 3s;
  }
  #head_wangmj {
    animation: rubberBand 3s;
  }
  #head_xial {
    animation: flash 3s;
  }

  .row3 {
    animation: backInUp 3s;
  }
</style>
