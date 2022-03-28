<template>
        
        <div>
        <b-navbar toggleable="lg" type="light" :style="color" class="shadow-lg">
            <b-navbar-brand href="#">

                <!-- LOGO -->
                <div class="logo-cont" style="cursor: pointer;" @click="redirectToHOME()">
                    <img class="logo" :src="logo" alt="logo">
                </div>
            </b-navbar-brand>

            <buttonMeteo @showMessage="showMessage" :msg="message" :tempsTxt="temps" :tempsTxtColor="textLoginColor" ></buttonMeteo>

            <b-navbar-toggle class="toggle-btn" toggle-class="text-dark" target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav >
                <b-button class="btn-login" v-b-toggle.sidebar-variant>Menú</b-button>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em :class="textLoginColor" >Hola: {{$store.state.userObj.name}}!</em>
                </template>
                <b-dropdown-item @click="logOut">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-sidebar id="sidebar-variant" title="MENÚ" bg-variant="dark" text-variant="light" shadow>
            <div class="px-3 py-2">
                
                <p>
                    PÀGINES
                </p>
                
                <hr>
                <div class="links-navbar-cont">
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToHOME()">Home</b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToCREA()">Modificar inventari</b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToINV()">Inventari</b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" @click="redirectToVEN()">Vendes</b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" v-if="$store.state.userObj.role === 'user'" @click="redirectToREG()">Registre de vendes <b-icon icon="file-lock2"></b-icon></b-button>
                    <b-button class="links-navbar-btn" variant="outline-warning" type="button" v-if="$store.state.userObj.role === 'admin'" @click="redirectToREG()">Registre de vendes</b-button>
                </div>
            </div>
            <hr>

        </b-sidebar>


        </div>


        
            <!-- SIDEBAR -->
        
        
    
</template>

<script>
import buttonMeteo from './buttonMeteo.vue'
    export default {
  components: { buttonMeteo },
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
            this.$router.push({ path: '/InventarioV' });
            },

            redirectToCREA() {
            this.$router.push({ path: '/CrearInventariV' });
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

            showMessage() {
                this.message = !this.message

            },

            getMeteo() {

                fetch('https://api.open-meteo.com/v1/forecast?latitude=41.3879&longitude=2.15992&current_weather=true', {
                    headers: {
                    'Accept': 'application/json'
                    }
                })
                .then((response)=>{
                    return response.json()
                }).then(
                    data =>{
                    this.temps = data.current_weather.temperature + 'º';
                    }
                )
                .catch((error)=>{
                    console.log(error);
                })
            },
            logOut() {
                this.$store.commit('logOut')
      }
        
        },
        mounted: function () {
            this.$nextTick(function () {
                this.getMeteo()
  })
}
    }
</script>

<style scoped>

.navbar {
    width: 70%;
    margin: auto;
    padding: 10px;
    display: flex;
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
    justify-self: right;
    font-size: 1rem
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

.container-temp {
    display: flex;
    justify-content: space-between;
}

.img-sol {
    width: 50px;
    height: 50px;
}

.tempText {
    font-size: 1rem;
    color: white;
}

#nav-collapse {
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