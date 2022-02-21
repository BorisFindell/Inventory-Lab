<template>
    <div class="container-gral">
        <Nav></Nav>
        <div class="container-display">
            <div class="inventari-cont">
                <div class="inventari-titol-cont">
                    <h2 class="inventari-titol">
                        Inventari
                    </h2>
                </div>
            </div>

            <div class="vendes-cont">
                <div class="vendes-titol-cont">
                    <h2 class="vendes-titol">
                        Vendes
                    </h2>
                </div>
            </div>
        </div>
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
    max-width: 100%;
    height: 100vh;
    background-image: url('../assets/pexels-quang-nguyen-vinh-2166456.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
}

.container-display {
    width: 60%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
}

.inventari-cont,
.vendes-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .2s;
    
}

.inventari-cont:hover,
.vendes-cont:hover {
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Safari 3-8 */
    transform: scale(1.1);
}

.inventari-cont {
    width: 40%;
    margin-right: 20px;
    background-image: url('../assets/inventari-bg2.jpeg');
    background-position: 64%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}

.vendes-cont {
    width: 60%;
    margin-left: 20px;
    background-image: url('../assets/vendes-bg2.jpeg');
    background-position: 64%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}

.inventari-titol-cont,
.vendes-titol-cont {
    width: 100%;
    padding: 10px 10px;
    background-color: rgb(142, 146, 146, .4);
}

.vendes-titol-cont {
    
}

.inventari-titol,
.vendes-titol {
    font-size: 2.7vw;
    color: white;

}

</style>