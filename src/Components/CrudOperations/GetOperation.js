import axios from 'axios';

export const GetUserData = async () => {
    const response = localStorage.getItem('token');
    const token = JSON.parse(response);
    console.log(token.token);

    if (!token) {
        console.error('No Sanctum token found');
        return;
    }

    try {
        const response = await axios.get('http://localhost:8000/api/getUserData', {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        });

        if(response){
            return response;
        }

    } catch (error) {
        console.error('Error fetching tables', error);
    }
};

