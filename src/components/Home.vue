<template>
    <div>
        <Nav></Nav>
    </div>
</template>

<script>

import Nav from './Nav.vue'

    export default {
        name: 'Home',
        components: { Nav },
    }
</script>

<style scoped>


body {
    background-image: url('../assets/pexels-quang-nguyen-vinh-2166456.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


</style>