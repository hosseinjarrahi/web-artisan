const GlobalMixin = {
    computed:{
        isMobile(){
            return this.$vuetify.breakpoint.mdAndDown;
        },
        open:{
            get(){ return window.EventBus.$data.openLoginForm},
            set(value){ window.EventBus.$data.openLoginForm = value }
        },
        goToUp(){
            this.$vuetify.goTo(
                0,
                {
                duration: 300,
                offset: 0,
                easing: 'easeInOutCubic',
              });
        }
    }
}

export default GlobalMixin;
