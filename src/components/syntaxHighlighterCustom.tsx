import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type Props = {
  children: string
}

const SyntaxHighlighterCustom = ({ children }: Props) => {
  return (
    <>
      <SyntaxHighlighter
        style={anOldHope}
        showLineNumbers={false}
        customStyle={{
          width: '100%',
          borderRadius: '12px',
          padding: '0.8rem 1rem',
          background: 'rgb(32, 33, 36, 0.8)',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
        }}
      >
        {children}
      </SyntaxHighlighter>
    </>
  )
}
export default SyntaxHighlighterCustom
