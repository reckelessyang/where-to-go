<template>
    <div class="more">
        <a href="javascript:;">
            <slot></slot>
        </a>
    </div>   

</template>
<script>
export default {
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
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