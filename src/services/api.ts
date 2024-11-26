import axios from "axios";
import { Category, CreateCategory, CreateTransaction, Transaction } from "./api-types";

export class APIService {
    private static client = axios.create({
        baseURL: import.meta.env.VITE_API_URL
    })

    static async createTransaction(createTransactionData: CreateTransaction): Promise<Transaction> {
        const { data } = await APIService.client.post('/transactions', createTransactionData)

        return data
    }

    static async createCategory(createCategoryData: CreateCategory): Promise<Category> {

        const { data } = await APIService.client.post<Category>('/categories', createCategoryData)

        return data
    }

    static async getCategories(): Promise<Category[]> {

        const { data } = await APIService.client.post<Category>('/categories')

        return [data]
    }

}