'use client'
import React from 'react'
import Markdown from '@/components/markdown'

export default function ClientPost({ post }: any) {
  return (
    <article className='prose mx-auto w-full'>
      <Markdown mdxSource={post.attributes.content} />
    </article>
  )
}
