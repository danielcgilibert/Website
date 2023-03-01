import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const SyntaxHighlighterCustom = ({ children }) => {
  return (
    <SyntaxHighlighter style={dracula} wrapLines={true} showLineNumbers={true}>
      {children}
    </SyntaxHighlighter>
  )
}
export default SyntaxHighlighterCustom
