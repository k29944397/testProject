<script>
import {RouterLink,RouterView} from 'vue-router'
import Header from "./Header.vue"
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
        RouterView,
        Header
    }
}
</script>

<template>
    <body>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../pic/banner1.png" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
                <img src="../../pic/banner2.png" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
                <img src="../../pic/banner3.png" class="d-block w-100" alt="">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
        <div class="leg d-flex justify-content-around">
            <div class="l1">
                <RouterLink to="/Sagasu" >タッグから探す</RouterLink>
            </div>
            <div class="l2">
                <RouterLink to="/Sagasu">エリアから探す</RouterLink>
            </div>
            <div class="l3">
                <RouterLink to="/Sagasu">沿線、駅から探</RouterLink>              
            </div>
        </div>
    </body>
</template>

<style lang="scss" scoped>
a{text-decoration:none}
a:hover{text-decoration:none}
body{
    background-color:  #BEC0CD;
    height: 100vh;
    width: 100vw;
}
.leg{
    margin-top: 50px;
    // background-color: pink;
    .l1{
        background-color: #475467;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 24pt;
        width: 300px;
        height: 200px;
        border-radius: 5%;
        font-weight: bold;
        a:link{color:#fff;} //未經使用超連結的字體顏色
        a:visited {color:#ffffff;}  // 已存取連結
        a:hover {color:#ffffff;}  // 滑鼠移動到連結上
        a:active {color:#ffffff;}  // 滑鼠點選時 
    }
    .l2{
        background-color: #475467;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 24pt;
        width: 300px;
        height: 200px;
        border-radius: 5%;
        font-weight: bold;
        a:link{color:#fff;} //未經使用超連結的字體顏色
        a:visited {color:#ffffff;}  // 已存取連結
        a:hover {color:#ffffff;}  // 滑鼠移動到連結上
        a:active {color:#ffffff;}  // 滑鼠點選時 
    }
    .l3{
        background-color: #475467;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 24pt;
        width: 300px;
        height: 200px;
        border-radius: 5%;
        font-weight: bold;
        a:link{color:#fff;} //未經使用超連結的字體顏色
        a:visited {color:#ffffff;}  // 已存取連結
        a:hover {color:#ffffff;}  // 滑鼠移動到連結上
        a:active {color:#ffffff;}  // 滑鼠點選時 
    }
}
</style>
