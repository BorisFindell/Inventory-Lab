<template>
    <div class="container-general">
        <div class="nav-wrapper">
            <div class="navbar">
                <!-- LOGO -->
                <div class="logo-cont" style="cursor: pointer;" @click="redirectToHOME()">
                    <img class="logo" src="../assets/logo.png" alt="logo">
                </div>
                <div>
                    
                </div>
                <!-- BOTONS NAV -->
                <b-button class="btn-login" v-b-toggle.sidebar-variant>Menú</b-button>
                <b-button class="logout btn btn-danger">Logout</b-button>

            </div>
            

        </div>
            <!-- SIDEBAR -->
        <b-sidebar id="sidebar-variant" title="MENÚ" bg-variant="dark" text-variant="light" shadow>
            <div class="px-3 py-2">
                <p>
                    PÀGINES
                </p>
                <hr>
                <div class="links-navbar-cont">
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToHOME()">Home</b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToINV()">Inventari</b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToVEN()">Vendes</b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToREG()">Registre de vendes</b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToMES()">Mesures</b-button>
                </div>
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
            },

            redirectToHOME() {
            this.$router.push({ path: '/HomeV' });
            },

            redirectToREG() {
            this.$router.push({ path: '/RegistreV' });
            },

            redirectToMES() {
            this.$router.push({ path: '/Mesures' });
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
    width: 100px;
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

.links-navbar-cont {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    
}

.links-navbar-btn {
    margin-top: 15px;
    margin-right: 10px;
    width: 100%;
}

hr {
    background-color: white;
}

</style>