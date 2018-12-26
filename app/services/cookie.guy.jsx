import cookie from 'react-cookie';
class CookieGuy {
    constructor() {

    }

    setCookieForOneYear(name, value) {
        var targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 365);
        let options = {
            path: '/',
            expires: targetDate
        };
        this.setCookie(name, value, options)
    }

    setCookie(name, value, options) {
        cookie.save(name, value, options);
    }

    getCookie(name) {
        if (!navigator.cookieEnabled) {
            /// if cookies are enabled on browser set return true
            return true;
        }
        return cookie.load(name);
    }

    isCookieEnabled() {
        return navigator.cookieEnabled;
    }
}

export default (new CookieGuy());