import api from '../../../apicofig'
export const fetchAuth = {
    login: async (data: any) => {
        try {
          console.log(data)
        const response = await api.post('/auth/login', data,{
        headers: {
          'X-TenantID': data.db, // suponiendo que data.db contiene el nombre de la base de datos
        },
      });
        return response.data;
        } catch (error) {
        throw error;
        }
    },
    
}
