<template>
    <div class='page-wrap center-center'>
        <div>
            <h1 class="ui header center-center-column">后台管理系统</h1>
            <form class='login-wrap center-center-column' :model="ruleForm">
                <div class="ui input focus ptb10">
                    <input type="text" placeholder="username" v-model="ruleForm.username">
                </div>
                <div class="ui input ptb10">
                    <input type="password" placeholder="password" v-model="ruleForm.password">
                </div>
                <div class="blue ui buttons ptb10">
                    <button class="ui button" v-on:click="submitLogin">登录</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    // import semantic from 'semantic'
    import semanticUI from 'semanticUI'
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                }
            }
        },
        beforeCreate: function () {// 检查登录状态
            const self = this;
            if(localStorage && localStorage.getItem('ms_username')){
                self.$router.push('/home');
            }
        },
        methods: {
            submitLogin: function(){
                const self = this;
                let username = self.ruleForm.username;
                let password = self.ruleForm.password;
                if(username && username){
                    localStorage.setItem('ms_username',self.ruleForm.username);
                    self.$router.push('/home');
                }else{
                    console.log('error submit!!');
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    .page-wrap{
        width: 100%;
        height: 100%;
        background: #324157;
    }
    .login-wrap{
        position: relative;
        width: 380px;
        height: 240px;
        padding: 40px;
        border-radius: 5px;
        background: #fff;
    }
    .header{
        color: white;
    }
    .input, .buttons{
        width: 100%;
    }
</style>