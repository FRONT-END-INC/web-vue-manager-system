<template>
  <div class="header" id="header">
    <div class="header-content">
      <div class="logo-box">
        <img :src="login.image">
      </div>
      <div class="nav-box" ref="nav-box">
        <ul>
          <li v-for="item in nav">
            <div class="ui multiple dropdown">
              <span class="text">{{ item.name }}</span>
              <div v-if="item.children" class="menu">
                <div v-for="it in item.children" class="item">{{it.name}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="user-box">
        <img :src="user.image" :title="user.name">
      </div>
    </div>
  </div>
</template>
<script>
  import semantic from 'semantic'
  export default {
    data(){
      return ({
        login:{
          image:require('../../assets/image/logo.png')
        },
        user:{
          name:'罗总',
          image:require('../../assets/image/user.jpg'),
        },
        nav:[
          {name:'表单',hash:'#form'},
          {name:'表格',children:[{name:'表格A'},{name:'表格B'}]},
        ]
      });
    },
    mounted() {
      $(this.$refs['nav-box']).find('.dropdown').dropdown();
    },
  }
</script>
<style>
  .header {
    position: fixed;
    top:0;
    left:0;
    right:0;
    background-color: #2f3e47;
    color: #797979;
    height:62px;
    line-height: 62px;
  }
  .header-content{
    position: relative;
    height:62px;
  }
  .logo-box{
    float: left;
    margin: 0 40px;
  }
  .logo-box>img{
    height:50px;
    vertical-align: middle;
  }
  .nav-box{
    float: left;
    margin-left: 40px;
  }
  .nav-box ul li{
    display: inline-block;
  }
  .nav-box ul li a{
    display: block;
    height:61px;
    padding: 0 20px;
    margin: 0 8px;
    border-bottom: 2px solid transparent;
    color: rgba(255, 255, 255, 0.7);
    transition: all .3s ease;
    cursor: pointer;
    font-size: 16px;
  }
  .nav-box ul li a:hover{
    color: #ffffff;
    border-color: #2196f3;
  }
  .user-box{
    float: right;
    margin-right:40px;
  }
  .user-box>img{
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
</style>
