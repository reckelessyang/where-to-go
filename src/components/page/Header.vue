<template>
    <div class="header">
        <div class="search">
            <img src="../../assets/search.png">
            <input type="text" placeholder="搜索景点门票" class="inputText">
        </div>
            <div class="download">
                <img src="https://picbed.qunarzz.com/c1a0ff735c013ec79c7fdecb88184bf8.gif">
                <div>下载App</div>
            </div>
    </div>
</template>
<script>
export default {
  name: "home-header",
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
        .search{
            background-color: #eeeeee;
            margin: 10px 10px;
            width: 70%;
            height: 36px;
            position:relative;
            display: block;
            img{
                width: 20px;
                height: 20px;
                float: left;
                margin: 10px 5px;
            }
        }
        .inputText{
                position: absolute;
                height: 35px;
                border: 0px;
                background-color: #eeeeee;
                outline:none;
                width: 100%;
        }
        .download{
            img{
                width: 24px;
                height: 24px;
                display: block;
                position: absolute;
                right: 8%;
                top: 10px;
            }
            div{
                font-size: .1rem;
                position: absolute;
                right: 5%;
                top: 34px;

            }
        }
</style>