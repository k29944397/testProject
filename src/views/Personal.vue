<script>
export default{

}
</script>

<template>
    <body>
        <div class="area">
            <div class="tag1">1234561</div>
            <div class="tag2">1234562</div>
            <div class="tag3">1234563</div>
        </div>
        <div class="area2">
            <div class="tag4">1234564</div>
            <div class="tag5">1234565</div>
            <div class="tag6">1234566</div>
        </div>
    </body>
</template>

<style lang="scss" scoped>
$maincolor: #475467;
a{text-decoration:none}//取消顯示超連結文字下方的底線
a:hover{text-decoration:none}//hover時↑
a:link{color:#fff;} //未經使用超連結的字體顏色
a:visited {color:#ffffff;}  // 已存取連結
a:hover {color:#ffffff;}  // 滑鼠移動到連結上
a:active {color:#ffffff;}  // 滑鼠點選時 
body{
    height: 100vh;
    width: 100vw;
    background-color: #9EB1BB;
    margin: 0;    
    .area{
        text-align: center;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag1{
            margin: 5px;
            background-color: $maincolor;
            height: 200px;
            width: 250px;
            border-radius: 10px;
        }
        .tag2{
            margin: 5px;
            background-color: $maincolor;
            height: 200px;
            width: 250px;
            border-radius: 10px;
        }
        .tag3{
            margin: 5px;
            background-color: $maincolor;
            height: 200px;
            width: 250px;
            border-radius: 10px;
        }
    }
    .area2{
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag4{
            margin: 5px;
            background-color: $maincolor;
            height: 200px;
            width: 250px;
            border-radius: 10px;
        }
        .tag5{
            margin: 5px;
            background-color: $maincolor;
            height: 200px;
            width: 250px;
            border-radius: 10px;
        }
        .tag6{
            margin: 5px;
            background-color: $maincolor;
            height: 200px;
            width: 250px;
            border-radius: 10px;
        }
    }
}
</style>
