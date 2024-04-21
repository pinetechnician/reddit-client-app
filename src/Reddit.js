import { Buffer } from "buffer";
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
let token;

const authorizeReddit = async() => {
    if(token) return token;

    const credentials = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    try {
        const response = await fetch('https://www.reddit.com/api/v1/access_token',
        {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                "Authorization": `Basic ${credentials}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        const data = await response.json();
        if(response.ok) {
            console.log(data);
            const { access_token, expires_in } = data;
            if (access_token && expires_in) {
                token = access_token;
                const millisecondsExpiresIn = Number(expires_in) * 1000;
                window.setTimeout(() => (token = ""), millisecondsExpiresIn);
                console.log(`token: ${token},\n expires: ${millisecondsExpiresIn}`)
                return token;
              }
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        console.error('Error getting access token:', error);
        return null;
    }

}

const fetchPopularPosts = async() => {
    const access_token = await authorizeReddit();
    const endpoint = "https://oauth.reddit.com/r/popular"

    try {
        const response = await fetch(endpoint,{
            method: "GET",
            headers: { 'Authorization': `Bearer ${access_token}`},
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            const data = jsonResponse.data.children;
            console.log(`data returned from oauth: ${JSON.stringify(data, null, 2)}`)
            return data;
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch(error) {
        console.log("Error loading posts: ", error);
    }
}

export { fetchPopularPosts };