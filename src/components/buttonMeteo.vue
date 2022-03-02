<template>
    <div class="container justify-content-start">
        <div>
            <button type="button" @click="$emit('showMessage')" class="btn btn-dark btn-sm ">Consulta el temps</button>
        </div>
        <div>
            <div v-if="msg === true">
                <div class="meteo-cont">
                        <div class="meteo">
                            <div class="container-temp m-3">
                                <img class="img-sol" src="../assets/temps-icon.png" alt="temps">
                                <p :class="tempsTxtColor">
                                    El temps a Barcelona ara és: {{tempsTxt}}
                                </p>
                            </div>
                        </div>
                </div>
            </div>
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

</style>