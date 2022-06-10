<template>
    <div class="container justify-content-start">
        <div>
            <button type="button" @click="$emit('showMessage')" class="btn btn-dark btn-sm ">Consulta el tiempo</button>
        </div>
        <div>
            <transition name="fade">
                <div v-if="msg === true">
                    <div class="meteo-cont">
                            <div class="meteo">
                                <div class="container-temp m-3">
                                    <img class="img-sol" src="../assets/temps-icon.png" alt="temps">
                                    <p :class="tempsTxtColor">
                                        El tiempo en Barcelona ahora es: {{tempsTxt}}
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </transition>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'buttonMeteo',
        props: {
            msg: Boolean,
            tempsTxt: String,
            tempsTxtColor: String

            
        }
    }
</script>

<style scoped>

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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>