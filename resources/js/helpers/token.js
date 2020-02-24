class token {
    isValid(token){
        const payload = this.payload(token);
        if(payload)
            return payload.iss === "http://127.0.0.1:8000/api/auth/login";
        return false;
    }
    payload(token){
        return this.decode(token.split('.')[1]);
    }
    decode(payload){
        if(this.isBase64(payload))
            return JSON.parse(atob(payload));
        return false;
    }
    isBase64(str){
        return true;
        try{
            return btoa(atob(str)).replace(/=/g,'') == str;
        }
        catch (e) {
            window.EventBus.$emit('logout');
            return false;
        }
    }
}

export default new token();