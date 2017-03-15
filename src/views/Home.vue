<template>
    <div class='page-wrap'>
        <VueHeader :user="user"></VueHeader>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    // import VueHeader from '@/components/Header'
    import VueHeader from '@/components/Test'
    export default {
        beforeCreate: function() { // 检查登录状态
            const self = this;
            if (localStorage && localStorage.getItem('ms_username')) {
                self.username = localStorage.getItem('ms_username');
            } else {
                self.$router.push('/login');
            }
        },
        data() {
            var self = this;
            return ({
                user: {
                    name: self.username,
                    image: require('@/assets/images/user.jpg'),
                }
            });
        },
        components: {
            VueHeader
        }
    }
</script>
<style scoped>
    .page-wrap{
        width: 100%;
        height: 100%;
    }
    .content{
        margin-top: 63px;
    }
</style>
