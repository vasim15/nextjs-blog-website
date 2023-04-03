import { IArticle } from '@/types';
import React from 'react'
import BlogCard from './blogCard';
import BlogCardWithImage from './blogCardImage';
interface IPropType {
    articles: IArticle[]
}
const ArticleList = ({ articles }: IPropType) => {
    return (<div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16'>
        {articles.map((article, indx) => (
            <div  key={article.id}>
                {
                    indx === 1 ?
                        <BlogCardWithImage key={article.id} article={article} />
                        : < BlogCard key={article.id} article={article} />
                }
            </div>

        ))}
    </div>)
}

export default ArticleList;