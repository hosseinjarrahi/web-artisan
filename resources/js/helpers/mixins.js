const GlobalMixin = {
    computed:{
        isMobile(){
            return this.$vuetify.breakpoint.mdAndDown;
        },
        open:{
            get(){ return window.EventBus.$data.openLoginForm},
            set(value){ window.EventBus.$data.openLoginForm = value }
        }
    }
}

export default GlobalMixin;