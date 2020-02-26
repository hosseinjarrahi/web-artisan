<template>
    <v-container fluid class="pa-0 ma-0 svg-bg">
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
        data() {
            return {
                samples: [
                    {
                        title: 'سایت ایران باگت',
                        img: '/svg/landing.svg',
                        techs: ['Jquery', 'Bootstrap', 'Laravel', 'Php7'],
                        price: 3000000,
                        description: 'سایتی که به همت بچه های تیم فلانی ساخته شده البته نیاز به توضیح نداره ولی عالیه',
                    }, {
                        title: 'سایت ایران باگت',
                        img: '/svg/landing.svg',
                        techs: ['Jquery', 'Bootstrap', 'Laravel', 'Php7'],
                        price: 3000000,
                        description: 'سایتی که به همت بچه های تیم فلانی ساخته شده البته نیاز به توضیح نداره ولی عالیه',
                    }, {
                        title: 'سایت ایران باگت',
                        img: '/svg/landing.svg',
                        techs: ['Jquery', 'Bootstrap', 'Laravel', 'Php7'],
                        price: 3000000,
                        description: 'سایتی که به همت بچه های تیم فلانی ساخته شده البته نیاز به توضیح نداره ولی عالیه',
                    },
                ]
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