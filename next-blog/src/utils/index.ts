import { IArticle } from "@/types";
import { serialize } from 'next-mdx-remote/serialize'

export const formatDate = (dateString: string): string => {
    const data = new Date(dateString).toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );
    return data;
}
export const removeDash = (d: string): string => {
    if (typeof d === "string") {
        return d.split('-').join(" ");
    }
    return "";
}

export const capitalFirstLetter = (d: string): string => {
    if (typeof d === "string") {
        return d.charAt(0).toLocaleUpperCase() + d.slice(1);
    }
    return d;
}

export const debounce = (fn: (q: string) => void, timeOut = 300) => {
    let timer: NodeJS.Timeout;
    return (...arg: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, timeOut);
    }
}

export const serializMarkDown = async (item: IArticle) => {
    const body = await serialize(item.attributes.body as string);
    return {
        ...item,
        attributes: {
            ...item.attributes,
            body
        }
    }
}