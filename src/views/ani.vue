<template>
  <div class="page">
    <div class="row">
      <transition name="show">
        <div class="row" v-show="nowRow == 1">
          <div class="input1">
            <input value="你好">
            <span class="callout">请输入中文，长度在10个字以内</span>
          </div>
          <div class="input2">
            <input value="你好">
            <span class="hint">请输入中文，长度在10个字以内</span>
          </div>
        </div>
      </transition>
      <transition name="show">
        <div class="row" v-show="nowRow == 2">
          <div class="loader"></div>
        </div>
      </transition>
      <transition name="show">
        <div class="row" v-show="nowRow == 3">
          <div class="loader"></div>
        </div>
      </transition>
    </div>
    <div class="button" @click="row(1)">一个关于贝塞尔曲线的例子</div>
    <div class="button" @click="row(2)">一个关于阶跃函数的例子</div>
  </div>
</template>

<script>
export default {
  name: 'ani',
  data () {
    return {
      nowRow: 0,
    };
  },
  created() {
  },
  mounted() {

  },
  methods: {
    row(index) {
      this.nowRow = 0;
      setTimeout(() => {
        this.nowRow = index;
      }, 1000);
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
  body { margin: 0; }
  .page {
    position: relative;
    height: 100vh;
  }
  .row {
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
  }
  .button {
    height: 4vw;
    line-height: 4vw;
    width: 90%;
    margin: 2vw auto;
    font-size: 2vw;
    text-align: center;
    cursor: pointer;
    color: #1B9AF7;
    border: 1px solid #1B9AF7;
    border-radius: 4px;
  }
  .button:hover{
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(76, 176, 249, 0.9);
    animation-name: glowing-primary;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  @keyframes glowing-primary {
    from {
      box-shadow: 0 0 0 rgba(27, 154, 247, 0.3); 
    }
    50% {
      box-shadow: 0 0 20px rgba(27, 154, 247, 0.8); 
    }
    to {
      box-shadow: 0 0 0 rgba(27, 154, 247, 0.3); 
    } 
  }

  .show-enter-active {
    transition: all 1s;
  }
  .show-leave-active {
    transition: all 1s;
  }
  .show-enter, .show-leave-to {
    opacity: 0;
  }

  input {
    display: block;
    padding: 0 .4em;
    font: inherit;
  }
  /**
  * Elastic transitions
  */
  input:not(:focus) + .callout:not(:hover) {
    transform: scale(0);
    transition: .25s transform;
    /* 这个属性是为了在隐藏的时候的过渡不那么奇怪，则用初始值进行覆盖 */
  }

  .callout {
    position: absolute;
    max-width: 14em;
    padding: .6em .8em;
    border-radius: .3em;
    margin: .3em 0 0 -.2em;
    background: #fed;
    border: 1px solid rgba(0,0,0,.3);
    box-shadow: .05em .2em .6em rgba(0,0,0,.2);
    font-size: 75%;

    transition: .5s cubic-bezier(.25,.1,.3,1.5) transform;
    /* 在这个例子中，我们希望在结尾时能再夸张一点，这样会显得更加自然和生动
    比如，先扩大到110%的尺寸，然后再缩回100%
    我们采用自定义调速函数，然后在垂直方向上突破0~1之间，从而让过渡达到低于0或高于100%的程度 */
    transform-origin: 1.4em -.4em;
  }
  .callout:before {
    content: "";
    position: absolute;
    top: -.4em;
    left: 1em;
    padding: .35em;
    background: inherit;
    border: inherit;
    border-right: 0;
    border-bottom: 0;
    transform: rotate(45deg);
  }
  .hint {
    font-size: 75%;
    color: red;
    padding: .6em .8em;
  }

    /**
  * Frame-by-frame animations
  */
  .loader {
    width: 100px;
    height: 100px;
    background: url(~@/assets/img/loader.png) 0 0;
    /* animation: loader 1s infinite linear; */
    animation: loader 1s infinite steps(8);
    /* 贝塞尔曲线的调速函数都会在关键帧之间进行插值运算，从而产生平滑的过渡效果
    但现在这种平滑特性恰恰毁掉我们想要的逐帧动画效果
    steps()会根据你的步进数量，把整个动画切为多帧，使动画在帧与帧之间硬切。
    steps可以接受两个参数，还有step-start和step-end */
  }
  @keyframes loader {
    to { background-position: -800px 0; }
  }
</style>
