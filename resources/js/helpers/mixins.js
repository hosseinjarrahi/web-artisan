const GlobalMixin = {
    computed:{
        isMobile(){
            return this.$vuetify.breakpoint.mdAndDown;
        }
    }
}

export default GlobalMixin;