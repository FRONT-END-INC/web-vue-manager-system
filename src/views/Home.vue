<template>
    <div class='page-wrap'>
        <VueHeader></VueHeader>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import semantic from 'semantic'
    import semanticUI from 'semanticUI'
    import VueHeader from '@/components/Header'
    export default {
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