import { api } from './axios';

export const postCompany = async (campaign: any) => {
    try {
      const response = await api.post("/campaign", campaign);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  export const getNiches = async () => {
    try {
      const response = await api.get("/niches");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
