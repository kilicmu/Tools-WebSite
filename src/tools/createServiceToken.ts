import { createContext } from "react";

export default function createServiceToken<T>(
    useFn: (...args: any) => T,
    initialData?: T | undefined
) {
    return createContext(initialData as T)
} 