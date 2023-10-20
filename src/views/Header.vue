<script>
import {RouterLink} from 'vue-router'
export default{
    data(){
        //值
        return{

        }
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
    <nav class="topnav">
        <div class="homeKey">
            <RouterLink to="/"><img src="../../pic/gotoindex.jpg" class="homeImg"></RouterLink>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                
                </div>
                <div class="col-6">
                
                </div>
                <div class="col">
                
                </div>
            </div>
            <div class="row">
                <div class="col">
                
                </div>
                <div class="col-5">
                    <RouterLink to="/AnNai">会社案内</RouterLink>
                        <span>
                            |
                        </span>
                        <RouterLink to="/Sagasu">店舗﹒アクセス</RouterLink>
                </div>
                <div class="col-6">
                    <img src="../../pic/OIP.jpg" alt="">810-1145141919
                    <span class="loginBtn"><RouterLink to="/Login">ログイン</RouterLink></span>
                    <span class="mm">|</span>
                    <span class="qaBtn"><RouterLink to="/Q&A">お問い合わせ</RouterLink></span>
                </div>
            </div>
        </div>
    </nav>

</template>

<style lang="scss" scoped>
$maincolor: #475467;
a{text-decoration:none}
a:hover{text-decoration:none}

.topnav{
    white-space:nowrap; 
    margin: 0;
    position: relative;
    height: 15vh;
    width: 100%;
    font-size: 24pt;
    background-color:#fff;
    color: $maincolor;
    display: flex;
    .homeKey{
        position: absolute;
        background-color: $maincolor;
        height: 100px;
        width: 100px;
        margin: 30px 70px;
        object-fit:none;
        .homeImg{
            height: 100px;
            width: 100px;
        }
    }
    .container{
        margin-top: 75px;
        font-size: 16pt;
    }
    .col-6{
        height: 35px;
        font-size: 20pt;
    }
    img{
        height: 15px;
        width: 15px;
    }
    .loginBtn{
        background-color: #475467;
        color: #fff;
        border-radius: 5%;
        a:link{color:#fff;} //未經使用超連結的字體顏色
        a:visited {color:#ffffff;}  // 已存取連結
        a:hover {color:#ffffff;}  // 滑鼠移動到連結上
        a:active {color:#ffffff;}  // 滑鼠點選時 
    }
    .mm{
        background-color: #475467;
        color: #fff;
    }
    .qaBtn{
        background-color: #475467;
        color: #fff;
        border-radius: 5%;
        a:link{color:#fff;} //未經使用超連結的字體顏色
        a:visited {color:#ffffff;}  // 已存取連結
        a:hover {color:#ffffff;}  // 滑鼠移動到連結上
        a:active {color:#ffffff;}  // 滑鼠點選時 
    }

}
</style>
