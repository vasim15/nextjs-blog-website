import axios from "axios";

const api =axios.create({
    baseURL: process.env.API_BASE_URL,
    headers:{
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    }
})

export const fetchCategories = ()=>api.get("/api/categories");
export const fetchArticles = (queryString: string)=>api.get(`/api/articles?${queryString}`);
export const fetchArticleBySlug = (queryString: string)=>api.get(`/api/articles?${queryString}`);

