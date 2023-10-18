<script>
export default{
    data(){
        //值
    },
    components:{
        //匯入

    },
    methods:{
        //公式
        
    }
}
</script>


<template>
    <body>
        <h1>Q&A</h1>
        <div class="backdrop-invert"></div>
    </body>

</template>


<style lang="scss" scoped>
$maincolor: #BEC0CD;
body{
    margin-top: 25px;
    width: 100vw;
    height: 100vh;
    background-color: $maincolor;
    position: relative;
    background-image: url(https://images.unsplash.com/photo-1602251627070-6a9bab4e420e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80);
  /* 裁切多餘區域 */
    .backdrop-invert{
        height: 200px;
        width: 40%;
        position: absolute;
        left: 10%;
        top: 20%;
        color: #fff;
        transition: 1s all;
        z-index: 1;
        &:hover{
            background-color: rgba(0,0,0,.25);
            backdrop-filter: sepia(90%);
        }
    }
}
</style>
