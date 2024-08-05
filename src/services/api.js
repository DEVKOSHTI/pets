// src/services/api.js
import axios from "axios";

const API_BASE_URL =
  import.meta.env.REACT_APP_API_BASE_URL || "http://pets-v2.dev-apis.com";

const handleApiError = (error) => {
  console.error("API Error:", error);
  if (error.response) {
    return {
      success: false,
      message: `Server Error: ${error.response.status} - ${error.response.statusText}`,
    };
  } else if (error.request) {
    return {
      success: false,
      message: "Network Error: No response from server.",
    };
  } else {
    return {
      success: false,
      message: `Unexpected Error: ${error.message}`,
    };
  }
};

export const fetchBreeds = async (animal) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/breeds`, {
      params: { animal },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`, {
      params: { id },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const searchPets = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`, {
      params,
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const Pets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return handleApiError(error);
  }
};
