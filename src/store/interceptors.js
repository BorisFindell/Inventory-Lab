import * as fetchIntercept from 'fetch-intercept';
import store from '.'

fetchIntercept.register({
    request: function (url, config) {
        config.headers = {
            Authorization: "Bearer " + store.state.userObj?.jwt
        }
        return [url, config];
    },

    response: function (response) {
        if (!response.ok && response.status == 401) {
            store.commit('logOut')
        }
        return response;
    }
});