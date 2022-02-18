<template>
    <div class="container-gral">
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


.container-gral {
    height: 100vh;
    background-image: url('../assets/pexels-quang-nguyen-vinh-2166456.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


</style>