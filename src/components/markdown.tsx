'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('css', css)

type MarkdownProps = {
  mdxSource: string & { content?: string }
}

export default function Markdown({ mdxSource }: MarkdownProps) {
  return (
    <ReactMarkdown
      children={mdxSource}
      className='markdown'
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              customStyle={{
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px',
                background: '#1c1c21'
              }}
              children={String(children).replace(/\n$/, '')}
              style={oneDark}
              language={match[1]}
              className='codeStyle'
              PreTag='div'
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        }
      }}
    />
  )
}
