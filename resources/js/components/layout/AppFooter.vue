<template>
    <v-container fluid class="pa-0 white--text">
        <v-container fluid :class="isMobile ? 'd-none' : 'home-banner'"></v-container>
        <div class="footer pa-5">
            <v-container>
                <v-row justify="center">

                    <v-col cols="11" md="4">
                        <h2 class="title pa-3">دسترسی ها</h2>
                        <ul>
                            <li class="px-3 py-2">نمونه</li>
                            <li class="px-3 py-2">نمونه</li>
                            <li class="px-3 py-2">نمونه</li>
                            <li class="px-3 py-2">نمونه</li>
                        </ul>
                    </v-col>

                    <v-col cols="11" md="4">
                        <v-avatar>
                            <v-img src="/img/logo.png"/>
                        </v-avatar>
<!--                        <h2 class="d-inline-block">وب آرتیسان</h2>-->
                        <p class="pa-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto minus officia quam, repudiandae sapiente
                            voluptatem? Consequatur debitis dolore odit porro, sint tempora! Doloremque eaque enim labore natus nemo odio optio!</p>
                    </v-col>

                    <v-col cols="11" md="4">
                        <h2 class="title py-3">با ما همراه باشید</h2>

                    </v-col>

                </v-row>
            </v-container>
        </div>

    </v-container>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
    .footer {
        text-align: center;
        width: 100%;
        background: #00c6ff; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #0081ff, #00c6ff); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #0081ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }

    .home-banner {
        background-image: url("/svg/landing.svg");
        background-size: 160%;
        height: 100px;
        background-position-y: -320px;
        transform: rotate(180deg);
    }

    li {
        border-radius: 10px;
        cursor: pointer;
        display: block;
        transition: all 0.5s;
    }

    li:hover {
        background-color: white;
        color: #0072ff;
        transform: translateY(-3px);
        box-shadow: 0px 3px 6px rgba(47, 53, 66, 0.5);
    }

    .title{
        width:auto;
        display: inline-block;
        border-radius: 10px;
        border-bottom: 2px solid white;
        transform: translateY(-3px);
    }

    ul {
        margin: 0;
        padding: 10px 5px;
        list-style-type: none;
    }
</style>