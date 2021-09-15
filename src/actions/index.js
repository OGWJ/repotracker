import axios from 'axios';

const fetchUserInfo = async userName => {
    try {
        const resp = await axios.get(`https://api.github.com/users/${userName}`);
        return data;
    } catch (err) {
        return undefined;
    }
}