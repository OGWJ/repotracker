import axios from 'axios';

export const fetchUserInfo = async userName => {
    try {
        const resp = await axios.get(`https://api.github.com/users/${userName}/repos`);
        console.log(resp);
        return resp;
    } catch (err) {
        console.warn(err);
        return undefined;
    }
}