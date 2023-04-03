import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
    title: string;
    slug: string;

}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;

}
export interface IResourceMeta {
    pagination: IPagination;
}

export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;
}

export interface IImageData {
    data: {
        attributes: {
            url: string;
            formats: {
                small: {
                    url: string
                }
            }
        }
    }[]
}

export interface IAuther {
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string
                            }
                        }
                    }
                }
            }
        }
    }
}
export interface IArticlesAttributs {
    title: string;
    body: string | MDXRemoteSerializeResult;
    slug: string;
    image: IImageData;
    createdAt: string;
    author: IAuther;
    sortDescription: string,
}

export interface IArticle {
    id: number;
    attributes: IArticlesAttributs
}

export interface IQueryType {
    sort: any,
    filters: any,
    populate: any,
    pagination: {
        page: number,
        pageSize: number
    }
}

export type TDirection = 1 | -1;