<template>
    <div class="container-general">
        <div class="nav-wrapper">
            <div class="navbar">
                <!-- <div class="title-wrapper" >
                    <div class="title">Inventory Lab</div>
                </div> -->
                <div class="logo-cont">
                    <img class="logo" src="../assets/inventory lab-logos_transparent.png" alt="logo">
                </div>
                <b-button class="btn-login" v-b-toggle.sidebar-variant>Informació</b-button>
                <b-button class="logout btn btn-danger">Logout</b-button>

            </div>
            

        </div>

        <b-sidebar id="sidebar-variant" title="INFORMACIÓN" bg-variant="dark" text-variant="light" shadow>
            <div class="px-3 py-2">
                <p>
                ACÁ VAN LOS COMPONENTES ESTÁTICOS
                </p>
                <button type="button" @click="redirectToINV()"></button>
                <button type="button" @click="redirectToVEN()"></button>

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
            },

            redirectToVEN() {
            this.$router.push({ path: '/VentasV' });

            }


        
        }
    }
</script>

<style scoped>

.navbar {
    width: 60%;
    background-color: rgba(0, 0, 0, 0.336);
    margin: auto;
    padding: 10px;
    display: grid;
    grid-template-columns: 2fr 3fr 2fr 3fr 2fr;
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
    height: min-content;
    grid-column: 1;
}

.logo {
    width: 150px;
}

.btn-login {
    width: max-content;
    height: max-content;
    background-color: rgb(231, 201, 64);
    color: black;
    grid-column: 4;
    justify-self: end;
    font-size: 1.3vw;
}

.logout {
    width: max-content;
    height: max-content;
    margin-right: 10px;
    color: white;
    grid-column: 5;
    justify-self: end;
    font-size: 1.3vw;
}

</style>