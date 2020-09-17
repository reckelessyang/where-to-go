<template>
    <div class="holiday">
        <h1>特惠度假</h1>
        <router-link  @click.native="flag = true" to="/left" :class="['button',flag?'active':'']">当季热门度假</router-link>
        <router-link @click.native="flag = false" to="/right" :class="['button',flag?'':'active']">今日特惠度假</router-link>
        <router-view></router-view>

    </div>
</template>
<script>
export default {
  data () {
    return {
        flag:true
    };
  },
  methods: {

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
    }
    .active{
        background-color: skyblue;
        color: white;
    }
}
</style>