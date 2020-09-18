<template>
    <div class="holiday">
        <h1>特惠度假</h1>
        <button @click="flag = !flag" :class="['button',flag?'active':'']">当季热门度假</button>
        <button @click="flag = !flag" :class="['button',flag?'':'active']">今日特惠度假</button>
        <LeftView v-show="flag"></LeftView>
        <CommonView v-show="!flag" :information='holiday'></CommonView>
        <More>更多特惠度假></More>
    </div>
</template>
<script>

import LeftView from './LeftView'
import CommonView from '../../Common/CommonView'
import More from '../../Common/More'


export default {
  data () {
    return {
        flag:true,
        holiday:[
            {
                src:'//imgs.qunarzz.com/vs_ceph_b2c_001/f4049e1b-14b8-4ab2-9dbd-e15f90a8f602.jpg_r_480x320x95_457e15b1.jpg',
                alt:"郑州-广州 4天自由行",
                content:'郑州-广州 4天自由行',
                price:2580,
                detail:'2晚长隆香江+1晚珠海马戏 广州大马戏+2日不限次动物园+2日不限次海洋王国'
            },
            {
                src:'//imgs.qunarzz.com/vs_ceph_vs_tts/faf4f0cf-fd02-431c-bd2b-85ba7db1a9b3.jpg_r_480x320x95_0afa06b2.jpg',
                alt:"郑州-广州 4天自由行",
                content:'郑州-广州 4天自由行',
                price:3145,
                detail:'亲子双长隆|2晚熊猫酒店+1晚企鹅酒店♦看海陆动物、马戏♦享企鹅午餐，接送机'
            },
            {
                src:'//imgs.qunarzz.com/p/tts7/1706/de/9047b3a518822c02.jpg_r_480x320x95_3300ffdd.jpg',
                alt:"郑州-广州 5天自由行",
                content:'郑州-广州 5天自由行',
                price:3272,
                detail:'嗨翻长隆亲子游🌟广州长隆香江酒店🌟白虎企鹅共进餐🌟野生动物园+海洋王国'
            },
                        {
                src:'//imgs.qunarzz.com/vs_ceph_vs_tts/214b6810-9b88-4c3a-8dc8-ae6a3ce1e98a.jpg_r_480x320x95_60e5bb42.jpg',
                alt:"郑州-珠海 4天自由行",
                content:'郑州-珠海 4天自由行',
                price:3229,
                detail:'年度钜惠，珠海长隆企鹅+横琴湾酒店4日丨海洋王国2日票+马戏+水世界丨接送机'
            },           
        ],
    };
  },
  methods: {

  },
  components: {
      LeftView,
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