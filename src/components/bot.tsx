import { Popover } from '@headlessui/react'
import { useState } from 'react'
import Chat from './chat'

const Bot = () => {
  const [open, setOpen] = useState(false)
  const [chatBotOpen, setChatBotOpen] = useState(false)
  return (
    <>
      <Popover className='relative'>
        <>
          <Popover.Button
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setChatBotOpen(!chatBotOpen)}
          >
            🤖
          </Popover.Button>

          {open && (
            <div>
              <Popover.Panel
                static
                className='absolute top-4 left-6 w-28   rounded-lg rounded-tl-none bg-lightBrown p-2 text-sm text-white'
              >
                <Popover.Button>Click para abrir el chat bot 💬</Popover.Button>
              </Popover.Panel>
            </div>
          )}
        </>
      </Popover>

      {chatBotOpen && <Chat setChatBotOpen={setChatBotOpen} />}
    </>
  )
}

export default Bot
