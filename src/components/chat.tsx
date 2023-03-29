import { ANSWERS } from '@/data/answers'
import { QUESTIONS } from '@/data/questions'
import Message from '@/ui/message'
import { apiBot } from '@/utils/api'
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useId,
  useRef,
  useState
} from 'react'
type ChatProps = {
  setChatBotOpen: Dispatch<SetStateAction<boolean>>
}

const Chat = ({ setChatBotOpen }: ChatProps) => {
  const [inputText, setInputText] = useState('')
  const [messages, setMessages] = useState<any>([])
  const [loadingMessage, setLoadingMessage] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)

  const id = useId()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      setMessages((prev: any) => [
        ...prev,
        { isBot: false, message: inputText }
      ])

      setLoadingMessage(true)
      const data = await apiBot
        .post('', {
          model: 'large',
          inputs: [inputText],
          examples: QUESTIONS
        })
        .then((res) => {
          setLoadingMessage(false)
          return res.data
        })
      console.log(data)
      setInputText('')

      setMessages((prev: any) => [
        ...prev,
        {
          isBot: true,
          message:
            ANSWERS[data.classifications[0].prediction] || ANSWERS['default']
        }
      ])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight)

    if (inputRef?.current) {
      inputRef?.current.focus()
    }
  }, [messages])

  return (
    <div className='ref={inputRef} absolute left-0 right-0 top-0 z-50  flex max-h-full min-h-full  flex-col  gap-5 rounded-lg border-2 border-lightBrown bg-darkBrown p-4 text-white'>
      <header className='flex items-center justify-between'>
        <span>Chat</span>

        <button onClick={() => setChatBotOpen(false)}>X</button>
      </header>
      <span className='rounded bg-zinc-900 p-2 text-center text-sm'>
        Este bot puede responder preguntas sobre Mi
      </span>

      <div
        ref={chatRef}
        className='mt-5 grid  grid-cols-2 gap-4 overflow-auto text-base'
      >
        <Message
          isBot={true}
          message={'Hola soy un chatBot puedo contestar tus preguntas'}
        />

        {messages.map((message: any, index: number) => (
          <Message
            key={`${id + index}`}
            isBot={message.isBot}
            message={message.message}
          />
        ))}
        {loadingMessage && <span>Cargando</span>}
      </div>

      <form className='mt-auto' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Escribe tu mensaje...'
          className='mt-5 w-full rounded-lg border-2 border-darkOrange bg-lightBrown p-3'
          value={inputText}
          disabled={loadingMessage}
          onChange={(e) => setInputText(e.target.value)}
          ref={inputRef}
        />
      </form>
      <span className='text-xs'>ChatBot puede cometer errores 🔔</span>
    </div>
  )
}

export default Chat
