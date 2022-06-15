<template>
        
        <div>
        <b-navbar toggleable="lg" type="light" class="shadow-lg nav-bar-style">
            <div class="navbar-items align-items-center">
                <b-navbar-brand href="#">

                    <!-- LOGO -->
                    <div class="logo-cont" style="cursor: pointer;" @click="redirectToHOME()">
                        <img class="logo" src="../assets/logo.png" alt="logo">
                    </div>
                </b-navbar-brand>

                <b-navbar-toggle class="toggle-btn h-25" toggle-class="text-dark" target="nav-collapse"></b-navbar-toggle>

                <b-button class="links-navbar-btn" type="button" @click="redirectToINV()">Inventario</b-button>
                <b-button class="links-navbar-btn" type="button" @click="redirectToVEN()">Ventas</b-button>
                <b-button class="links-navbar-btn" type="button" v-if="$store.state.userObj.role === 'admin'" @click="redirectToREG()">Registro de ventas</b-button>
                <button type="button" @click="logOut" class="btn btn-logout">Logout</button>

                    
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
            logo: String,
        },

        methods: {
            redirectToINV() {
            this.$router.push({ name: 'InventarioV' });
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
    align-items: center;
    justify-items: center;

    background-color: #FCF8E8;
}

.navbar-items {
    width: 90%;
    display: flex;
    margin: auto;
    justify-content:space-evenly
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
    width: 180px;
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
    background-color:#ECB390
}

hr {
    background-color: white;
}

#nav-collapse {
    display: flex;
    justify-content: last baseline;
    flex-direction: row-reverse;
}

.btn-logout {
    background-color: #DF7861;
    color: white;
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