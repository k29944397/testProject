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
        <div class="loginpage ">
        <div class="email">
            Email
        </div>
        <input class="mailbox" type="text" placeholder="xxx114514@gmail.com" style="width:300px;">
        <i class="fa-solid fa-envelopes-bulk">
        </i>
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
            <a href="#">
                <button style="font-size: 16pt;">ログイン</button>
            </a>
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
}
input{
    padding-left: 25px;
    border-radius: 6px;
}
.fa-envelopes-bulk {
    top: 40px;
    left: 5px;
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
    margin-top: 3px;
    button{
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
}
</style>
