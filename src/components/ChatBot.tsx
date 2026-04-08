import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { useLang } from '../context/LangContext'
import './ChatBot.css'

interface Message {
  id: number
  text: string
  from: 'bot' | 'user'
}

const botReplies: Record<string, string[]> = {
  ru: [
    'Университет Коркыт Ата расположен в Кызылорде, Казахстан 🎓',
    'Приём документов для иностранных студентов открыт. Перейдите в раздел «Подать заявку».',
    'Обучение ведётся на казахском и русском языках. Также есть программы на английском.',
    'Стоимость обучения зависит от программы. Свяжитесь с нами для уточнения деталей.',
    'Мы поможем с оформлением визы, общежитием и адаптацией в Казахстане.',
  ],
  en: [
    'Korkyt Ata University is located in Kyzylorda, Kazakhstan 🎓',
    'Applications for international students are open. Visit the "Apply" section.',
    'Studies are conducted in Kazakh and Russian. English-medium programs are also available.',
    'Tuition costs depend on the program. Contact us for more details.',
    'We assist with visa processing, dormitory accommodation, and settling in Kazakhstan.',
  ],
  kz: [
    'Қорқыт Ата университеті Қызылордада орналасқан 🎓',
    'Шет елдік студенттерге құжат қабылдау ашық. «Өтінім беру» бөліміне өтіңіз.',
    'Оқыту қазақ және орыс тілдерінде жүргізіледі. Ағылшын тіліндегі бағдарламалар да бар.',
    'Оқу құны бағдарламаға байланысты. Толық ақпарат үшін бізбен байланысыңыз.',
    'Виза рәсімдеу, жатақхана және Қазақстанға бейімделуге жәрдем береміз.',
  ],
}

let msgIdCounter = 0

export default function ChatBot() {
  const { lang } = useLang()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [typing, setTyping] = useState(false)
  const [pulse, setPulse] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Stop pulse after first open
  useEffect(() => {
    if (open) setPulse(false)
  }, [open])

  // Initial bot greeting when chat opens
  useEffect(() => {
    if (open && messages.length === 0) {
      const greetings: Record<string, string> = {
        ru: 'Привет! Я ассистент Коркыт Ата 👋 Чем могу помочь?',
        en: 'Hello! I\'m the Korkyt Ata assistant 👋 How can I help you?',
        kz: 'Сәлем! Мен Қорқыт Ата ассистентімін 👋 Қалай көмектесе аламын?',
      }
      setMessages([{ id: ++msgIdCounter, text: greetings[lang] ?? greetings.ru, from: 'bot' }])
    }
  }, [open, lang])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: Message = { id: ++msgIdCounter, text: trimmed, from: 'user' }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const replies = botReplies[lang] ?? botReplies.ru
      const reply = replies[Math.floor(Math.random() * replies.length)]
      setMessages(prev => [...prev, { id: ++msgIdCounter, text: reply, from: 'bot' }])
      setTyping(false)
    }, 1000 + Math.random() * 600)
  }

  return (
    <div className="chatbot-root" id="chatbot-widget">
      {/* Chat Panel */}
      <div className={`chatbot-panel ${open ? 'chatbot-panel--open' : ''}`} aria-hidden={!open}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar-sm">
              <Bot size={16} />
            </div>
            <div>
              <div className="chatbot-name">Korkyt Ata Assistant</div>
              <div className="chatbot-status"><span className="chatbot-dot" />Online</div>
            </div>
          </div>
          <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
            <X size={18} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.from}`}>
              {msg.from === 'bot' && (
                <div className="chatbot-msg-avatar"><Bot size={13} /></div>
              )}
              <div className="chatbot-msg-bubble">{msg.text}</div>
            </div>
          ))}
          {typing && (
            <div className="chatbot-msg chatbot-msg--bot">
              <div className="chatbot-msg-avatar"><Bot size={13} /></div>
              <div className="chatbot-msg-bubble chatbot-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chatbot-input-row">
          <input
            className="chatbot-input"
            type="text"
            placeholder={lang === 'kz' ? 'Хабар жазыңыз...' : lang === 'en' ? 'Type a message...' : 'Написать сообщение...'}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
          />
          <button className="chatbot-send" onClick={sendMessage} aria-label="Send" disabled={!input.trim()}>
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button
        className={`chatbot-fab ${pulse ? 'chatbot-fab--pulse' : ''} ${open ? 'chatbot-fab--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Open assistant chat"
        id="chatbot-fab-btn"
      >
        <div className="chatbot-fab-icon">
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </div>
        {!open && pulse && <span className="chatbot-badge">1</span>}
      </button>
    </div>
  )
}
