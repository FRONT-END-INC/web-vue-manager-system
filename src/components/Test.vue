<template>
  <div class="ui grid">
    <div class="sixteen column row">
      <div class="two wide column">
        <div class="logo-box">
          <img :src="login.image">
        </div>
      </div>
      <div class="fourteen wide column">
        <div class="ui secondary inverted small menu">
          <a class="active item">Home</a>
          <div class="ui dropdown item">Table Demos
            <i class="dropdown icon"></i>
            <div class="menu">
              <a class="item">BaseTable</a>
              <a class="item">More</a>
            </div>
          </div>
          <div class="right menu">
            <div class="ui dropdown item">
              <img :src="user.image" :title="user.name" class='userPic'>
              <i class="dropdown icon"></i>
              <div class="menu">
                <a class="item">Signed in as <label class="ui labeled">{{user.name}}</label></a>
                <div class="divider"></div>
                <a class="item" v-on:click="signOutFn">Sign out</a>
              </div>
            </div>
            <div class="item">
                <div class="ui primary button">Sign In</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['user'],
    data() {
      return ({
        login:{
          image:require('@/assets/images/logo.png')
        },
        nav:[
          {name:'表单',hash:'#form'},
          {name:'表格',children:[{name:'表格A'},{name:'表格B'}]},
        ]
      });
    },
    methods: {
      signOutFn: function(){
        var self = this;
        window.localStorage.clear();
        self.$router.push('/login');
      }
    },
    mounted() {
      $('.ui.dropdown.item').dropdown();
    },
  }
</script>
<style scoped>
  .ui.grid{
    background-color: #2f3e47;
    color: #797979;
    height: 60px;
  }
  .logo-box{
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 47px;
  }
  .logo-box>img{
    height:40px;
    vertical-align: middle;
  }
  .userPic{
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
  
</style>
