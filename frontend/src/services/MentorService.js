import axios from "axios";

const API_URL = "http://localhost:8080/api/mentors";

export const getAllMentors = () => {
    return axios.get(API_URL);
};

export const getMentorById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const addMentor = (mentor) => {
    return axios.post(API_URL, mentor);
};

export const updateMentor = (id, mentor) => {
    return axios.put(`${API_URL}/${id}`, mentor);
};

export const deleteMentor = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};