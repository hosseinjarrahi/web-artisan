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
        data() {
            return {
                contents: [
                    {
                        shortDescription: 'توضیحات کوتاهی درباره مطلب',
                        title: 'چگونه برای سایت خو یک قالب حرفه ای طراحی کنیم؟',
                        author: 'حسین جراحی',
                        avatar: '/svg/responsive-svgrepo-com.svg',
                        img: '/svg/responsive-svgrepo-com.svg'
                    }, {
                        shortDescription: 'توضیحات کوتاهی درباره مطلب',
                        title: 'دنیای بزرگ برنامه نویسی از کجا شروع شد؟',
                        author: 'حسین جراحی',
                        avatar: '/svg/responsive-svgrepo-com.svg',
                        img: '/svg/responsive-svgrepo-com.svg'
                    }, {
                        shortDescription: 'توضیحات کوتاهی درباره مطلب',
                        title: 'چگونه و چرا؟',
                        author: 'حسین جراحی',
                        avatar: '/svg/responsive-svgrepo-com.svg',
                        img: '/svg/responsive-svgrepo-com.svg'
                    }, {
                        shortDescription: 'توضیحات کوتاهی درباره مطلب',
                        title: 'عنوان آزمایشی',
                        author: 'حسین جراحی',
                        avatar: '/svg/responsive-svgrepo-com.svg',
                        img: '/svg/responsive-svgrepo-com.svg'
                    }, {
                        shortDescription: 'توضیحات کوتاهی درباره مطلب',
                        title: 'عنوان آزمایشی',
                        author: 'حسین جراحی',
                        avatar: '/svg/responsive-svgrepo-com.svg',
                        img: '/svg/responsive-svgrepo-com.svg'
                    }, {
                        shortDescription: 'توضیحات کوتاهی درباره مطلب',
                        title: 'عنوان آزمایشی',
                        author: 'حسین جراحی',
                        avatar: '/svg/responsive-svgrepo-com.svg',
                        img: '/svg/responsive-svgrepo-com.svg'
                    },
                ]
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