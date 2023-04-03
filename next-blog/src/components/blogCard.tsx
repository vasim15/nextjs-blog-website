import { IArticle } from '@/types'
import { formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPropType {
    article: IArticle
}

const BlogCard = ({ article }: IPropType) => {
    return (
        <div>
            <Link href={`/article/${article.attributes.slug}`}>
                <h1 className='text-xl test-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>{article.attributes.title}</h1>
            </Link>
            <div className='flex items-center my-4'>
                <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>
                    <Image width={40} height={40} alt={article.attributes.author.data.attributes.firstname}
                        src={`http://127.0.0.1:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                    />
                </div>

                <span className='text-sm font-bold text-gray-600'>
                    {article.attributes.author.data.attributes.firstname} {" "}
                    {article.attributes.author.data.attributes.lastname} on &nbsp;
                    <span className='text-gray-400'>
                        {formatDate(article.attributes.createdAt)}
                    </span>
                </span>
            </div>
            <div className='text-gray-500'>
                {article.attributes.sortDescription.slice(0, 250)}
                {article.attributes.sortDescription.length > 250 ? `...`: '' }
            </div>
        </div>
    )
}

export default BlogCard