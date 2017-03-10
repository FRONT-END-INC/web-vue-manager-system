<template>
  <div class="header" id="header">
    <div class="header-content">
      <div class="logo-box">
        <img :src="login.image">
      </div>
      <div class="nav-box">
        <ul>
          <li v-for="item in nav">
            <div  class="semantic-component">
              <div class="ui multiple dropdown">
                <span class="text">{{ item.name }}</span>
                <div v-if="item.children" class="menu">
                  <div v-for="it in item.children">{{it.name}}</div>
                </div>
              </div>
            </div>
          </li>
          <div class="ui multiple dropdown">
            <input type="hidden" name="filters">
            <i class="filter icon"></i>
            <span class="text">Filter Posts</span>
            <div class="menu">
              <div class="ui icon search input">
                <i class="search icon"></i>
                <input type="text" placeholder="Search tags...">
              </div>
              <div class="divider"></div>
              <div class="header"><i class="tags icon"></i> Tag Label </div>
              <div class="scrolling menu">
                <div class="item" data-value="important">
                  <div class="ui red empty circular label"></div>Important </div>
                <div class="item" data-value="announcement">
                  <div class="ui blue empty circular label"></div>Announcement </div>
                <div class="item" data-value="cannotfix">
                  <div class="ui black empty circular label"></div>Cannot Fix </div>
                <div class="item" data-value="news">
                  <div class="ui purple empty circular label"></div>News </div>
                <div class="item" data-value="enhancement">
                  <div class="ui orange empty circular label"></div>Enhancement </div>
                <div class="item" data-value="off-topic">
                  <div class="ui yellow empty circular label"></div>Off Topic </div>
                <div class="item" data-value="interesting">
                  <div class="ui pink empty circular label"></div>Interesting </div>
                <div class="item" data-value="discussion">
                  <div class="ui green empty circular label"></div>Discussion </div>
              </div>
            </div>
          </div>
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
          image:require('@/assets/images/logo.png')
        },
        user:{
          name:'罗总',
          image:require('@/assets/images/logo.png'),
        },
        nav:[
          {name:'表单',hash:'#form'},
          {name:'表格',children:[{name:'表格A'},{name:'表格B'}]},
        ]
      });
    }
  }
</script>
<style scope>
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
