<template>
    <div>
        <div class="red">
            this b page
        </div>
        <a v-link="{path:'/a'}">link to a</a>
        <a v-link="{name:'pa',params: {info: 'from page b'}}">link to a with params</a>
    </div>
</template>
<style>
    div.red {
        color: red;
    }
</style>
<script>

</script>
