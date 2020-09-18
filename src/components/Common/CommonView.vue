<template>
    <div class="dujia">
        <div class="dujia_body" v-for="items in information" :key="items.src">
            <div class="dujia_img">
                <img :src="items.src" 
                :alt="items.alt">
            </div>
            <div class="dujia_bottom">
                <p class="content">{{items.content}}</p>
                <p class="detail">{{items.detail}}</p>
                <p class="price">￥{{items.price}}</p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
  data () {
    return {

    };
  },
  props: ['information']
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
            .detail{
                font-size: .1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space:nowrap;
                color: #aca8a8;
            }
        }
    }
}
</style>