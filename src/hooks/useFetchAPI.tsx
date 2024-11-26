import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { Category } from "../services/api-types";
import { CreateCategoryData, CreateTransactionData } from "../validators/types";
import { APIService } from "../services/api";
import { formateDate } from "../utils/format-date";

interface FetchAPIProps {
    createCategory: (data: CreateCategoryData) => Promise<void>
    createTransaction: (data: CreateTransactionData) => Promise<void>
    fetchCategories: () => Promise<void>
    categories: Category[]
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps)

type FetchAPIProviderProps = {
    children: ReactNode
}

export function FetchAPIProvider({ children }: FetchAPIProviderProps) {
    const [categories, setCategories] = useState<Category[]>([])

    const createTransaction = useCallback(async (data: CreateTransactionData) => {
        await APIService.createTransaction({
            ...data,
            date: formateDate(data.date),
            amount: Number(data.amount.replace(/[^0-9]/g, '')),
        })
    }, [])

    const createCategory = useCallback(async (data: CreateCategoryData) => {
        await APIService.createCategory(data)
    }, [])

    const fetchCategories = useCallback(async () => {
        const data = await APIService.getCategories()
        setCategories(data)
    }, [])

    return (
        <FetchAPIContext.Provider value={{ categories, createCategory, fetchCategories, createTransaction }}>
            {children}
        </FetchAPIContext.Provider>
    )
}

export function useFetchAPI(): FetchAPIProps {
    return useContext(FetchAPIContext)
}