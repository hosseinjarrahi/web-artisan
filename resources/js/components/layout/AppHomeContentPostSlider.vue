<template>
    <v-container fluid>
        <div class="text-center">
            <h3 class="pa-3 mofid">
                <v-icon color="white">mdi-file-outline</v-icon>
                <span>آخرین مقالات</span>
            </h3>
        </div>
        <v-container fluid class="posts">
            <v-slide-group
                    prev-icon="mdi-arrow-left-circle"
                    next-icon="mdi-arrow-right-circle"
                    :show-arrows="!isMobile"
            >
                <v-slide-item v-for="(content,index) in contents" :key="index">
                    <AppHomeContentPost :content="content"/>
                </v-slide-item>
            </v-slide-group>
        </v-container>
    </v-container>
</template>

<script>
    import AppHomeContentPost from './AppHomeContentPost'

    export default {
        name: "AppHomeContentPostSlider",
        components: {
            AppHomeContentPost
        },
        created(){
            axios.get('/api/post')
            .then((res) => {
                this.contents = res.data.data;
            }).catch((err) => {
                console.log(err);
            });
        },
        data() {
            return {
                contents: []
            }
        },
    }
</script>

<style scoped>
    .posts {
        background: #33d9b2;
        border-radius: 10px;
    }

    .mofid {
        background: #33d9b2;
        border-radius: 10px 10px 0px 0px;
        color:white;
        display:inline-block;
    }
</style>
