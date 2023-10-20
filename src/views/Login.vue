<script>
import {RouterLink} from 'vue-router'
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
        <div class="loginpage ">
        <div class="email">
            Email
            <input class="mailbox" type="text" placeholder="xxx114514@gmail.com" style="width:300px;">
            <i class="fa-solid fa-envelopes-bulk"></i>
        </div>
        <div class="password">
            Name/Password
        </div>
        <input type="password" placeholder="Hitakouji Daigo" style="width:300px;">
        <p></p>
        <input type="checkbox" class="cbox1" name="" id="">
        <spen for="cbox1">ログインを保持する</spen>
        <a href="#">
            <spen class="sign" style="font-size: 16pt;" >新規登録
            </spen>
        </a>
        <div class="loginbtn">
            <RouterLink to="/Personal">
                ログイン
            </RouterLink>
        </div>
    </div>
    </body>

</template>


<style lang="scss" scoped>
$maincolor: #BEC0CD;
body{
    width: 100vw;
    height: 100vh;
    background-color: $maincolor;
}
.loginpage{
    width: 310px;
    height: auto;
    background-color: $maincolor;
    margin: 0 40vw;
}
.email{
    color:#344054 ;
    font-size: 20px;
    position: relative;
}
input{
    padding-left: 25px;
    border-radius: 6px;
}
.fa-envelopes-bulk {
    top: 40px;
    left: 0px;
    position: absolute;
}
input{
    font-size: 20px;
}
.password{
    color: #344054;
    font-size: 20px;
}
.sign{
    float: right;
    font-weight: bold;
    color: #18181A;
}
.cbox1{
    height: 20px;
    width: 20px;
    border-radius: 10px;
}
.loginbtn{
    a{text-decoration:none}//超連結文字下方取消顯示底線
    a:hover{text-decoration:none}//hover時↑
    margin-top: 3px;
    font-size: 16pt;
    display: flex;
    justify-content: center;
    align-items: center;
    a:link{color:#fff;} //未經使用超連結的字體顏色
        a:visited {color:#ffffff;}  // 已存取連結
        a:hover {color:#ffffff;}  // 滑鼠移動到連結上
        a:active {color:#ffffff;}  // 滑鼠點選時 
        height: 45px;
        width: 150px;
        margin-left: 30%;
        color: white;
        border-color: #475467;
        background-color: #475467;
        border-radius: 10px;
        &:hover{
            border-radius: 5px;
        }
        &:active{
            border-radius: 0px;
        }
}
</style>
