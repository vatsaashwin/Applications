
import auth0 from 'auth0-js';
import Cookies from 'js-cookie'
// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

class Auth0 {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-ygcohjqk.auth0.com',
            clientID: 'lPRGHLCKHpe2045jEdqoShfCl8X50Kup',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        })
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.handleAuthentication = this.handleAuthentication.bind(this)
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err);
                }
            })

        });
    }

    setSession(authResult) {
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    }

    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: 'http://localhost:3000',
            clientID: 'lPRGHLCKHpe2045jEdqoShfCl8X50Kup'

        })
    }

    login() {
        this.auth0.authorize()
    }

    isAuthenticated() {
        const expiresAt = Cookies.getJSON('expiresAt')
        console.log(new Date().getTime() < expiresAt)
        return new Date().getTime() < expiresAt
    }

    clientAuth() {
        return this.isAuthenticated()
    }

    serverAuth(req) {
        if (req.headers.cookie) {
            // const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt='))
            // if (!expiresAtCookie) { return undefined }
            // const expiresAt = expiresAtCookie.split('=')[1]
            // return new Date().getTime() < expiresAt
            const cookies = req.headers.cookie;
            const splitedCookies = cookies.split(';');
            const expirestAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));
            if (!expirestAtCookie) { return undefined };
            const expiresAtArray = expirestAtCookie.split('=');
            const expiresAt = expiresAtArray[1];

            return new Date().getTime() < expiresAt;
        }
    }
}






const auth0Client = new Auth0()
export default auth0Client


