<template>
    <v-container fluid :class="isMobile ? 'home-banner-md' : 'home-banner'">
        <v-img src="/img/webArt.png" max-width="500px" class="d-block mx-auto" alt="وب آرتیسان"/>
    </v-container>
</template>

<script>
    export default {
        name: "AppHomeBanner",
    }
</script>

<style scoped>
    .home-banner {
        background-image: url("/svg/landing.svg");
        background-size: 160%;
        height: 700px;
        background-position-y: -5px;
    }
    .home-banner-md {
        background: #00c6ff;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: 500px;
    }
</style>