import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { useIntersection } from '../hooks/useIntersection'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const faqKeys = [
  { q: 'faq.1.q', a: 'faq.1.a' },
  { q: 'faq.2.q', a: 'faq.2.a' },
  { q: 'faq.3.q', a: 'faq.3.a' },
  { q: 'faq.4.q', a: 'faq.4.a' },
  { q: 'faq.5.q', a: 'faq.5.a' },
  { q: 'faq.6.q', a: 'faq.6.a' },
  { q: 'faq.7.q', a: 'faq.7.a' },
  { q: 'faq.8.q', a: 'faq.8.a' },
]

export default function FAQ() {
  const { t } = useLang()
  const { ref, isVisible } = useIntersection(0.1)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={`faq-section${isVisible ? ' visible' : ''}`} id="faq" ref={ref}>
      <div className="faq-container">
        <div className="faq-layout">
          {/* Left: header + list of questions */}
          <div className="faq-left">
            <span className="section-kicker">{t('faq.kicker')}</span>
            <h2 className="faq-title">{t('faq.title')}</h2>
            <p className="section-desc" style={{ maxWidth: 360 }}>{t('faq.subtitle')}</p>
          </div>

          {/* Right: accordion */}
          <div className="faq-list">
            {faqKeys.map((item, i) => (
              <div
                key={item.q}
                className={`faq-item${openIndex === i ? ' open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{t(item.q)}</span>
                  <ChevronDown size={18} strokeWidth={2.5} className="faq-chevron" />
                </button>
                <div className="faq-answer">
                  <p>{t(item.a)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
