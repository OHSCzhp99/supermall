<template>
    <div class="nav-bar">
        <dvi class="left"><slot name="left"></slot></dvi>
        <dvi class="center"><slot name="center"></slot></dvi>
        <dvi class="right"><slot name="right"></slot></dvi>

    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0px 1px 1px rgba(100,100,100,.1);
    }

    .left .right{
        width: 60px;
    }

    .center{
        flex: 1;
    }
</style>