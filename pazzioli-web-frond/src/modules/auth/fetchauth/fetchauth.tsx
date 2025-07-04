import api from '../../../apicofig'
export const fetchAuth = {
    login: async (data: any) => {
        try {
        const response = await api.post('auth/login', data);
        return response.data;
        } catch (error) {
        throw error;
        }
    },
    
}
