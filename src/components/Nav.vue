<template>
        
        <div>
        <b-navbar toggleable="lg" type="light" :style="color" class="shadow-lg">
            <div class="navbar-items align-items-center">
                <b-navbar-brand class="col-6" href="#">

                    <!-- LOGO -->
                    <div class="logo-cont" style="cursor: pointer;" @click="redirectToHOME()">
                        <img class="logo" :src="logo" alt="logo">
                    </div>
                </b-navbar-brand>

                <b-navbar-toggle class="toggle-btn h-25" toggle-class="text-dark" target="nav-collapse"></b-navbar-toggle>

                <!-- SIDEBAR BOTONS -->

                <b-collapse id="nav-collapse" is-nav>

                     <!-- Left SIDEBAR BOTON -->
                    <div class="sidebar-btn-cont">
                        <b-navbar-nav >
                            <b-button class="btn-login" v-b-toggle.sidebar-variant>Menú</b-button>
                        </b-navbar-nav>

                        <!-- Right SIDEBAR BOTON -->

                        <b-navbar-nav class="ml-auto">
                            <b-button v-b-toggle.sidebar-right>Área personal</b-button> 
                        </b-navbar-nav>
                    </div>


                    <!-- SIDEBAR CONTENT -->

                    <!-- Left SIDEBAR content -->

                    <b-sidebar id="sidebar-variant" title="MENÚ" bg-variant="dark" text-variant="light" shadow>
                        <div class="px-3 py-2">
                            
                            <p>
                                PÁGINAS
                            </p>
                            
                            <hr>
                            <div class="links-navbar-cont">
                                <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToHOME()">Home</b-button>
                                <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToCREA()">Gestionar inventario</b-button>
                                <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToINV()">Inventario</b-button>
                                <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToVEN()">Ventas</b-button>
                                <b-button class="links-navbar-btn" variant="outline-warning" type="button" v-if="$store.state.userObj.role === 'user'" @click="redirectToREG()">Registro de ventas <b-icon icon="file-lock2"></b-icon></b-button>
                                <b-button class="links-navbar-btn" variant="outline-warning" type="button" v-if="$store.state.userObj.role === 'admin'" @click="redirectToREG()">Registro de ventas</b-button>
                            </div>
                        </div>
                        <hr>

                    </b-sidebar>


                    <!-- Right SIDEBAR content -->

                    
                    <b-sidebar id="sidebar-right" title="Área personal" bg-variant="light" text-variant="dark" right shadow>
                        <div class="px-3 py-2">
                            <button type="button" @click="logOut" class="btn btn-primary">Logout</button>
                        </div>
                    </b-sidebar>

                </b-collapse>
            </div>
        </b-navbar>

        


        

        </div>


        
            <!-- SIDEBAR -->
        
        
    
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {
                temps:'',
                message: false
            }
        },
        props: {
            color: Object,
            logo: String,
            textLoginColor: String
        },

        methods: {
            redirectToINV() {
            this.$router.push({ name: 'InventarioV' });
            },

            redirectToCREA() {
            this.$router.push({ name: 'CrearInventariV' });
            },

            redirectToVEN() {
            this.$router.push({ name: 'VentasV' });
            },

            redirectToHOME() {
            this.$router.push({ name: 'HomeV' });
            },

            redirectToREG() {
            this.$router.push({ name: 'RegistreV' });
            },

            showMessage() {
                this.message = !this.message

            },

            
            logOut() {
                this.$store.commit('logOut')
      }
        
        },
        mounted: function () {
            this.$nextTick(function () {
  })
}
    }
</script>

<style scoped>

.navbar {
    width: 100%;
    margin: auto;
    padding: 10px;
    display: flex;
    grid-template-columns: 2fr 3fr 2fr 3fr 2fr;
    align-items: center;
    justify-items: center;
}

.navbar-items {
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-between
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
    display: flex;
    justify-items: start;
}

.logo {
    width: 100px;
}

.btn-login {
    width: max-content;
    height: max-content;
    background-color: rgb(231, 201, 64);
    color: black;
    justify-self: right;
    font-size: 1rem
}

.logout {
    width: max-content;
    height: max-content;
    margin-right: 10px;
    color: white;
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

.img-sol {
    width: 50px;
    height: 50px;
}

#nav-collapse {
    display: flex;
    justify-content: last baseline;
    flex-direction: row-reverse;
}


.toggle-btn {

    background-color: rgba(240, 205, 205, 0.521);
    margin-top: 5px;
    margin-bottom: 5px;

}

@media (max-width: 800px) {
    .btn-login {
        font-size: 0.8rem;
    }
}

</style>