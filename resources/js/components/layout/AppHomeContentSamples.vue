<template>
    <v-container fluid :class="['pa-0','ma-0',{'svg-bg':!isMobile}]">
        <h2 class="text-center">
            <v-icon color="black">mdi-animation-outline</v-icon>
            <span>نمونه کار ها</span>
        </h2>
        <v-row justify="center">
            <v-col cols="11" md="3" v-for="(sample,index) in samples" :key="index">
                <app-home-content-sample :sample="sample"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AppHomeContentSample from './AppHomeContentSample';

    export default {
        name: "AppHomeContentSamples",
        components: {
            AppHomeContentSample
        },
        created(){
            axios.get('/api/sample')
                .then(res => { this.samples = res.data.data })
                .catch(err => console.log(res));
        },
        data() {
            return {
                samples:[]
            }
        }
    }
</script>

<style scoped>
    .svg-bg{
        background-image: url("/svg/samples.svg");
        background-position: 0px 150px;
        background-size: 140%;
    }
</style>
