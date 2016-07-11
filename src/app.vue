<template>
    <h1>My First Vue Demo</h1>
    <hello></hello>
</template>
<style>
    body {
        background-color: #eee;
    }
</style>
<script>
    import Hello from './components/hello.vue'
    export default{
        components: {hello: Hello}
    }
</script>
