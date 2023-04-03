
import { IArticle } from '@/types'
import { formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPropType {
    article: IArticle
}

const BlogCardWithImage = ({ article }: IPropType) => {
    console.log("articleb", article);
    return (
        <div className='bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64'>
            <Link href={"#"} className="p-6">
                <span className="text-2xl w-2/3 text-white font-bold after:content-[''] after:block after:bg-primary after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer ">
                    {article.attributes.title}
                </span>
            </Link>
            <Image src='/gitbook.svg' width={140} height={140} />
        </div>
    );
}

export default BlogCardWithImage