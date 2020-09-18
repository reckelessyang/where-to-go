<template>
    <div class="holiday">
        <h1>特惠门票</h1>
        <button @click="flag = !flag" :class="['button',flag?'active':'']">当季景点门票</button>
        <button @click="flag = !flag" :class="['button',flag?'':'active']">特惠门票</button>
        <CommonView v-show="flag" :information='seasonticket'></CommonView>
        <CommonView v-show="!flag" :information='specialticket'></CommonView>
        <More>更多特惠门票></More>
    </div>
</template>
<script>

import CommonView from '../Common/CommonView'
import More from '../Common/More'


export default {
  data () {
    return {
        flag:true,
        seasonticket:[
            {
                src:'//img1.qunarzz.com/sight/p0/2008/6d/6da8a20b21da1340a3.water.jpg_256x160_eb7ed443.jpg',
                alt:"长隆动物世界",
                content:'长隆动物世界',
                price:207,
                detail:'奇妙的朋友与您共享欢乐时光'
            },
            {
                src:'//img1.qunarzz.com/sight/p0/2008/de/de0775c07108df3a3.water.jpg_256x160_83a8a0c4.jpg',
                alt:"长隆水上乐园",
                content:'长隆水上乐园',
                price:94.5,
                detail:'全球必去的水上乐园'
            },
            {
                src:'//img1.qunarzz.com/sight/p0/1807/f3/f3a998c29724c22aa3.water.jpg_256x160_23f3118d.jpg',
                alt:"古龙峡玻璃大峡谷",
                content:'古龙峡玻璃大峡谷',
                price:33.5,
                detail:'集合玻璃平台、栈道、索桥为的观光玻璃组合'
            },
            {
                src:'//img1.qunarzz.com/sight/p0/201309/06/a03726324b885c8bc8d65eac.jpg_256x160_1cb9efd5.jpg',
                alt:"广州塔",
                content:'广州塔',
                price:105,
                detail:'360度羊城全貌，感受王者之居高临下'
            },           
        ],
        specialticket:[
            {
                src:'//img1.qunarzz.com/sight/p0/1807/f3/f3a998c29724c22aa3.water.jpg_256x160_23f3118d.jpg',
                alt:"古龙峡玻璃大峡谷",
                content:'古龙峡玻璃大峡谷',
                price:33.5,
                detail:'集合玻璃平台、栈道、索桥为的观光玻璃组合'
            },
            {
                src:'//imgs.qunarzz.com/sight/p0/2006/d0/d0425f0f13f14997a3.water.jpg_256x144_11433ae9.jpg',
                alt:"长隆国际大马戏剧院",
                content:'长隆国际大马戏剧院',
                price:242,
                detail:'汇聚全球马戏精华'
            },
            {
                 src:'//imgs.qunarzz.com/sight/p0/201309/06/a03726324b885c8bc8d65eac.jpg_256x144_c22abd21.jpg',
                alt:"广州塔",
                content:'广州塔',
                price:105,
                detail:'360度羊城全貌，感受王者之居高临下'
            },
            {
                src:'//imgs.qunarzz.com/sight/p0/2008/ca/ca82c6666e1b269a3.water.jpg_256x144_2dd6697d.jpg',
                alt:"长隆欢乐世界",
                content:'长隆欢乐世界',
                price:144,
                detail:'垂直过山车等挑战你的青春荷尔蒙'
            },           
        ],
        
    };
  },
  methods: {

  },
  components: {
      More,
      CommonView
  }
}
</script>
<style lang="scss" scoped>
.holiday{
    margin: 20px;    
    font-size: .4rem;
    h1{
        font-weight: 700;
        margin-bottom: 10px;
    }
    .button{
        font-size: 10px;
        color: rgb(134, 134, 134);
        margin: 10px;
        padding: 5px;
        border: 1px solid rgb(134, 134, 134);
        border-radius: 5px;
        outline: none;
    }
    .active{
        background-color: skyblue;
        color: white;
    }
}
</style>