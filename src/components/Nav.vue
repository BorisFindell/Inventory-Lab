<template>
    <div class="container-general">
        <div class="nav-wrapper">
            <div class="nav-bar">
                <div class="title-wrapper" >
                    <div class="title">Inventory Lab</div>
                </div>
                <!-- <div class="logo-cont">
                    <img class="logo" src="../assets/books-stack-of-three.png" alt="logo">
                </div> -->
                <b-button class="btn-login" v-b-toggle.sidebar-variant>Información</b-button>
            </div>
            

        </div>

        <b-sidebar id="sidebar-variant" title="INFORMACIÓN" bg-variant="dark" text-variant="light" shadow>
            <div class="px-3 py-2">
                <p>
                ACÁ VAN LOS COMPONENTES ESTÁTICOS
                </p>
                <button type="button" @click="redirectToINV()"></button>
                <!-- <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img> -->
            </div>
        </b-sidebar>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        methods: {
            redirectToINV() {
            this.$router.push({ path: '/InventarioV' });
            }
        
        }
    }
</script>

<style scoped>

/* .container-general {

}

.nav-wrapper {
} */

.nav-bar {
    width: 60%;
    height: 120px;
    background-color: rgb(250, 252, 180,.3);
    margin: auto;
    padding: 10px;
    display: grid;
    grid-template-columns: 5fr 2fr 5fr;
    align-items: center;
    justify-items: center;
}


.title-wrapper {
    background-color: rgba(0, 0, 0, 0.336);
}

.title{
    font-weight: bold;
    font-size: 2rem;
    color: rgba(238, 226, 120, 0.7);
}

.logo-cont {
    grid-column: 2;
}

.logo {
    width: 80px;
    margin-bottom: 10px;
}

.btn-login {
    width: max-content;
    height: 50px;
    background-color: rgb(231, 201, 64);
    color: black;
    grid-column: 3;
    justify-self: end;
}

</style>