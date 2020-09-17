<template>
    <div class="dujia">
        <div class="dujia_body" v-for="items in infomation" :key="items.src">
            <div class="dujia_img">
                <img :src="items.src" 
                :alt="items.alt">
            </div>
            <div class="dujia_title">
                <p class="title">{{items.title}}</p>
                <p class="yellow">{{items.yellow}}</p>
            </div>
            <div class="dujia_bottom">
                <p class="content">{{items.content}}</p>
                <p class="price">￥{{items.price}}</p>
            </div>
        </div>
        <div class="more">
            <a href="javascript:;">
                更多特惠度假>
            </a>
        </div>
    </div>

</template>
<script>
export default {
  name: "left-view",
  data () {
    return {
        infomation:[
            {
                src:'//imgs.qunarzz.com/p/p90/201308/23/5ce590745204c90193835fbb.jpg_256x160_04bdc5bd.jpg',
                alt:"含全程大巴+1晚住宿",
                title:'中山-惠州',
                yellow:'2天跟团游',
                content:'含全程大巴+1晚住宿',
                price:538
            },
            {
                src:'//imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg',
                alt:"含往返火车票+3晚住宿",
                title:'中山-桂林',
                yellow:'4天自由行',
                content:'含往返火车票+3晚住宿',
                price:740
            },
            {
                src:'//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
                alt:"含往返飞机票+3晚住宿",
                title:'中山-三亚',
                yellow:'4天跟团游',
                content:'含往返飞机票+3晚住宿',
                price:740
            },
                        {
                src:'//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
                alt:"含往返飞机票(含税)+9晚住宿",
                title:'中山-丽江',
                yellow:'10天跟团游',
                content:'含往返飞机票(含税)+9晚住宿',
                price:740
            },
            
        ]
    };
  }
}
</script>
<style lang="scss" scoped>
.dujia{
    margin-top: 10px;
    .dujia_body{
        width: 45%;
        margin-right: 10px;
        display: inline-block;
        position: relative;
        .dujia_img{
            img{
                width: 100%;
            }
        }
        .dujia_title{
            border-radius: 5px;
            position: absolute;
            bottom: 25%;
            right: 25%;
            padding: 10px;
            background-color: rgba($color: #000000, $alpha: .4);
            text-align: center;
            .title{
                color: white;
                font-size: .2rem;
            }
            .yellow{
                font-size: 0.1rem;
                color: yellow;
            }
            
        }
        .dujia_bottom{
            .content{
                font-size: .2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space:nowrap;
            }
            .price{
                color:orange
            }
        }
    }
}
.more{
    margin: 20px;
    border: 1px solid skyblue;
    border-radius: 5px;
    text-align: center;
     padding: 5px;
    a{
        color:skyblue;
        font-size: .1rem;
        font-weight: 700;
    }
}
</style>