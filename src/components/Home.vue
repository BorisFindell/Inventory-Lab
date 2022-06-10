<template>
    <div class="container-gral">
        <div class="container-display">

            <div class="inventari-cont shadow-lg" style="cursor: pointer;" @click="redirectToINV()">
                <div class="inventari-titol-cont">
                    <h2 class="inventari-titol">
                        Inventario
                    </h2>
                </div>
            </div>

            <div class="vendes-cont shadow-lg" style="cursor: pointer;" @click="redirectToVEN()">
                <div class="vendes-titol-cont">
                    <h2 class="vendes-titol">
                        Ventas
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>




    export default {
        name: 'Home',
        data() {
            return {
                
            }
        },

        methods :{
            redirectToINV() {
            this.$router.push({ name: 'InventarioV' });
            },
             redirectToVEN() {
            this.$router.push({ name: 'VentasV' });

            }
        }
        
    }
</script>

<style scoped>


.container-gral {
    max-width: 100%;
    display: block;
}

.container-display {
    width: 60%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 3%;
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

.inventari-titol,
.vendes-titol {
    font-size: 2.7vw;
    color: white;
}

@media (max-width: 800px) {
    .container-display{
        width: 75%;
    }
}
@media (max-width: 500px) {
    .inventari-cont,
    .vendes-cont {
        width: 100%;
        height: 40%;
        margin-left: 0px;
        margin-top: 15px;
    }

    .inventari-cont {
        background-position-y: 20%;
    }

    .vendes-cont {
        background-position-y: 50%;
    }

    .container-display {
        display: block;
        width: 85%;
        text-align: center;
    }
}
</style>