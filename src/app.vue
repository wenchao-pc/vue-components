<template>
    <div class="container">
        <h1>My First Vue Demo</h1>
        <hello></hello>
        <router-view></router-view>
    </div>
</template>
<style>
    body {
        background-color: #eee;
    }

    .container {
        width: 1000px;
        margin: 0 auto;
    }
</style>
<script>
    import Hello from './components/hello.vue'
    export default{
        replace: false,
        components: {hello: Hello}
    }
</script>
