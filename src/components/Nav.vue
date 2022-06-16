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

                    <router-link class="links-navbar-btn" to="/InventarioV" type="button">INVENTARIO</router-link>
                    <router-link class="links-navbar-btn" to="/VentasV" type="button">VENTAS</router-link>
                    <router-link class="links-navbar-btn" v-if="$store.state.userObj.role === 'admin'" to="/RegistreV" type="button">REGISTRO DE VENTAS</router-link>
                    <button type="button" @click="logOut" class="btn btn-logout">LOGOUT</button>

                        
                </div>
            </b-navbar>
        </div>
    
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {

            }
        },

        methods: {

            redirectToHOME() {
            this.$router.push({ name: 'HomeV' });
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
    width: fit-content;
    background:none;
    color: black;
    font-family: 'Quicksand', sans-serif;
    border: none;
    text-decoration: none;

    /* Animation */

    transform: translateX(0px);
    transition: 0.6s;

}

.links-navbar-btn:hover {
    background-color:#ECB390;

    /* Animation */

    transition: 0.3s;
    transform: translateX(10px);
}

.links-navbar-btn:active {

    background-color:#a67e65;

}


.links-navbar-btn:focus {

    transform: translateX(10px);
    
}

.router-link-active {
    text-decoration: underline;
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