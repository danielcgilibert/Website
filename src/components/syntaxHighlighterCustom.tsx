import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type Props = {
  children: string
}

const SyntaxHighlighterCustom = ({ children }: Props) => {
  return (
    <SyntaxHighlighter
      style={dracula}
      showLineNumbers={true}
      customStyle={{
        width: '100%'
      }}
      language={'javascript'}
    >
      {children}
    </SyntaxHighlighter>
  )
}
export default SyntaxHighlighterCustom
