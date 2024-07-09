import { api } from "./axios";

export const postCompany = async (company: any) => {
  try {
    const response = await api.post("/company", company);
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

export const getMarketingFocus = async () => {
  try {
    const response = await api.get("/targetAudience");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
