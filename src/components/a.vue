<template>
    <div>
        <div class="red">
            this a page
        </div>
        <a v-link="{path:'/b'}">link to b</a>
        <a v-link="{name:'pb',params: {info: 'from page a'}}">link to b with params</a>
    </div>
</template>
<style>
    div.red {
        color: red;
    }
</style>
<script>

</script>
