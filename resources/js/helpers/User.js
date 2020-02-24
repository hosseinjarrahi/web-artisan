import token from '../helpers/token';
import appStorage from '../helpers/appStorage';

class User {
    login(data){
        return axios.post('/api/auth/login',data)
            .then( res => {
                return this.responseAfterLogin(res);
            })
            .catch(err => console.log(err.data));
    }
    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const user = res.data.user;
        if (token.isValid(access_token)) {
            appStorage.store(user, access_token);
            window.EventBus.$emit('loggedIn');
            window.location = '/';
            return true;
        }
        return false;
    }
    hasToken(){
        var storedToken = appStorage.getToken();
        if(storedToken)
            return token.isValid(storedToken) ? true : this.logout();
        return false;
    }
    check(){
        return this.hasToken();
    }
    logout(){
        window.EventBus.$emit('logout');
        window.location = '/';
        appStorage.clear();
    }
    name(){
        if(this.check())
            return appStorage.getUser();
    }
    id(){
        if(this.check())
            return (token.payload(appStorage.getToken())).sub;
    }
}

export default new User();