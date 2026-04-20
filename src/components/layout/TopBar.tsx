import { NavLink, useLocation } from 'react-router-dom'
import { Menu, Sun, Moon, ChevronRight } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLang, type Lang } from '../../context/LangContext'

interface TopBarProps {
  onMenuToggle: () => void
}

type LocalizedLabel = { ru: string; en: string; kz: string }

const breadcrumbMap: Record<string, { label: LocalizedLabel; parent?: LocalizedLabel }> = {
  '/': { label: { ru: 'Главная', en: 'Home', kz: 'Басты бет' } },
  '/about/kazakhstan': { label: { ru: 'О Казахстане', en: 'About Kazakhstan', kz: 'Қазақстан туралы' }, parent: { ru: 'О портале', en: 'About Portal', kz: 'Портал туралы' } },
  '/about/university': { label: { ru: 'Об университете', en: 'About University', kz: 'Университет туралы' }, parent: { ru: 'О портале', en: 'About Portal', kz: 'Портал туралы' } },
  '/about/advantages': { label: { ru: 'Преимущества', en: 'Advantages', kz: 'Артықшылықтар' }, parent: { ru: 'О портале', en: 'About Portal', kz: 'Портал туралы' } },
  '/about/stats': { label: { ru: 'Статистика', en: 'Statistics', kz: 'Статистика' }, parent: { ru: 'О портале', en: 'About Portal', kz: 'Портал туралы' } },
  '/rules/requirements': { label: { ru: 'Общие требования', en: 'Requirements', kz: 'Жалпы талаптар' }, parent: { ru: 'Правила приема', en: 'Admission Rules', kz: 'Қабылдау ережелері' } },
  '/rules/documents': { label: { ru: 'Документы', en: 'Documents', kz: 'Құжаттар' }, parent: { ru: 'Правила приема', en: 'Admission Rules', kz: 'Қабылдау ережелері' } },
  '/rules/deadlines': { label: { ru: 'Сроки подачи', en: 'Deadlines', kz: 'Мерзімдер' }, parent: { ru: 'Правила приема', en: 'Admission Rules', kz: 'Қабылдау ережелері' } },
  '/rules/review': { label: { ru: 'Процесс рассмотрения', en: 'Review Process', kz: 'Қарау процесі' }, parent: { ru: 'Правила приема', en: 'Admission Rules', kz: 'Қабылдау ережелері' } },
  '/programs/bachelor': { label: { ru: 'Бакалавриат', en: "Bachelor's", kz: 'Бакалавриат' }, parent: { ru: 'Программы', en: 'Programs', kz: 'Бағдарламалар' } },
  '/programs/master': { label: { ru: 'Магистратура', en: "Master's", kz: 'Магистратура' }, parent: { ru: 'Программы', en: 'Programs', kz: 'Бағдарламалар' } },
  '/programs/tuition': { label: { ru: 'Стоимость обучения', en: 'Tuition', kz: 'Оқу құны' }, parent: { ru: 'Программы', en: 'Programs', kz: 'Бағдарламалар' } },
  '/roadmap/choose': { label: { ru: 'Выбор программы', en: 'Choose Program', kz: 'Бағдарлама таңдау' }, parent: { ru: 'Путь поступления', en: 'Admission Roadmap', kz: 'Түсу жолы' } },
  '/roadmap/submit': { label: { ru: 'Подача документов', en: 'Submit Documents', kz: 'Құжат тапсыру' }, parent: { ru: 'Путь поступления', en: 'Admission Roadmap', kz: 'Түсу жолы' } },
  '/roadmap/review': { label: { ru: 'Рассмотрение заявки', en: 'Application Review', kz: 'Өтінімді қарау' }, parent: { ru: 'Путь поступления', en: 'Admission Roadmap', kz: 'Түсу жолы' } },
  '/roadmap/invite': { label: { ru: 'Получение приглашения', en: 'Invitation Step', kz: 'Шақыру кезеңі' }, parent: { ru: 'Путь поступления', en: 'Admission Roadmap', kz: 'Түсу жолы' } },
  '/roadmap/visa': { label: { ru: 'Оформление визы', en: 'Visa Step', kz: 'Виза кезеңі' }, parent: { ru: 'Путь поступления', en: 'Admission Roadmap', kz: 'Түсу жолы' } },
  '/roadmap/arrive': { label: { ru: 'Прибытие и регистрация', en: 'Arrival & Registration', kz: 'Келу және тіркелу' }, parent: { ru: 'Путь поступления', en: 'Admission Roadmap', kz: 'Түсу жолы' } },
  '/migration/types': { label: { ru: 'Типы виз', en: 'Visa Types', kz: 'Виза түрлері' }, parent: { ru: 'Миграция и виза', en: 'Visa & Migration', kz: 'Миграция және виза' } },
  '/migration/process': { label: { ru: 'Процесс оформления', en: 'Application Process', kz: 'Рәсімдеу процесі' }, parent: { ru: 'Миграция и виза', en: 'Visa & Migration', kz: 'Миграция және виза' } },
  '/migration/documents': { label: { ru: 'Необходимые документы', en: 'Required Documents', kz: 'Қажетті құжаттар' }, parent: { ru: 'Миграция и виза', en: 'Visa & Migration', kz: 'Миграция және виза' } },
  '/migration/consult': { label: { ru: 'Консультация', en: 'Consultation', kz: 'Кеңес беру' }, parent: { ru: 'Миграция и виза', en: 'Visa & Migration', kz: 'Миграция және виза' } },
  '/migration/register': { label: { ru: 'Регистрация', en: 'Registration', kz: 'Тіркелу' }, parent: { ru: 'Миграция и виза', en: 'Visa & Migration', kz: 'Миграция және виза' } },
  '/migration/extend': { label: { ru: 'Продление визы', en: 'Visa Extension', kz: 'Визаны ұзарту' }, parent: { ru: 'Миграция и виза', en: 'Visa & Migration', kz: 'Миграция және виза' } },
  '/mobility': { label: { ru: 'Программы мобильности', en: 'Mobility Programs', kz: 'Мобильділік бағдарламалары' } },
  '/life/dorms': { label: { ru: 'Общежития и жилье', en: 'Housing & Dorms', kz: 'Жатақхана және тұрғын үй' }, parent: { ru: 'Быт и адаптация', en: 'Life & Adaptation', kz: 'Тұрмыс және бейімделу' } },
  '/life/health': { label: { ru: 'Медицинское обслуживание', en: 'Health Services', kz: 'Медициналық қызмет' }, parent: { ru: 'Быт и адаптация', en: 'Life & Adaptation', kz: 'Тұрмыс және бейімделу' } },
  '/life/food': { label: { ru: 'Питание', en: 'Food', kz: 'Тамақтану' }, parent: { ru: 'Быт и адаптация', en: 'Life & Adaptation', kz: 'Тұрмыс және бейімделу' } },
  '/life/transport': { label: { ru: 'Транспорт', en: 'Transport', kz: 'Көлік' }, parent: { ru: 'Быт и адаптация', en: 'Life & Adaptation', kz: 'Тұрмыс және бейімделу' } },
  '/life/culture': { label: { ru: 'Культурная адаптация', en: 'Cultural Adaptation', kz: 'Мәдени бейімделу' }, parent: { ru: 'Быт и адаптация', en: 'Life & Adaptation', kz: 'Тұрмыс және бейімделу' } },
  '/life/social': { label: { ru: 'Студенческая жизнь', en: 'Student Life', kz: 'Студенттік өмір' }, parent: { ru: 'Быт и адаптация', en: 'Life & Adaptation', kz: 'Тұрмыс және бейімделу' } },
  '/apply/cabinet': { label: { ru: 'Личный кабинет', en: 'Personal Account', kz: 'Жеке кабинет' }, parent: { ru: 'Подача заявки', en: 'Apply', kz: 'Өтінім беру' } },
  '/apply/form': { label: { ru: 'Форма заявки', en: 'Application Form', kz: 'Өтінім нысаны' }, parent: { ru: 'Подача заявки', en: 'Apply', kz: 'Өтінім беру' } },
  '/apply/documents': { label: { ru: 'Загрузка документов', en: 'Upload Documents', kz: 'Құжат жүктеу' }, parent: { ru: 'Подача заявки', en: 'Apply', kz: 'Өтінім беру' } },
  '/apply/status': { label: { ru: 'Статус заявки', en: 'Application Status', kz: 'Өтінім мәртебесі' }, parent: { ru: 'Подача заявки', en: 'Apply', kz: 'Өтінім беру' } },
  '/support/faq': { label: { ru: 'FAQ', en: 'FAQ', kz: 'FAQ' }, parent: { ru: 'Помощь и поддержка', en: 'Help & Support', kz: 'Көмек және қолдау' } },
  '/support/chat': { label: { ru: 'Чат-бот', en: 'Chatbot', kz: 'Чат-бот' }, parent: { ru: 'Помощь и поддержка', en: 'Help & Support', kz: 'Көмек және қолдау' } },
  '/support/feedback': { label: { ru: 'Обратная связь', en: 'Feedback', kz: 'Кері байланыс' }, parent: { ru: 'Помощь и поддержка', en: 'Help & Support', kz: 'Көмек және қолдау' } },
  '/support/contacts': { label: { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' }, parent: { ru: 'Помощь и поддержка', en: 'Help & Support', kz: 'Көмек және қолдау' } },
  '/support/knowledge': { label: { ru: 'База знаний', en: 'Knowledge Base', kz: 'Білім базасы' }, parent: { ru: 'Помощь и поддержка', en: 'Help & Support', kz: 'Көмек және қолдау' } },
  '/contacts/address': { label: { ru: 'Адрес', en: 'Address', kz: 'Мекенжай' }, parent: { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' } },
  '/contacts/phones': { label: { ru: 'Телефоны', en: 'Phones', kz: 'Телефондар' }, parent: { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' } },
  '/contacts/email': { label: { ru: 'Email', en: 'Email', kz: 'Email' }, parent: { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' } },
  '/contacts/social': { label: { ru: 'Социальные сети', en: 'Social Media', kz: 'Әлеуметтік желілер' }, parent: { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' } },
  '/contacts/hours': { label: { ru: 'Часы работы', en: 'Working Hours', kz: 'Жұмыс уақыты' }, parent: { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' } },
}

export default function TopBar({ onMenuToggle }: TopBarProps) {
  const { theme, toggleTheme } = useTheme()
  const { t, lang, setLang } = useLang()
  const location = useLocation()

  const current = breadcrumbMap[location.pathname]
  const labelFor = (value?: LocalizedLabel) => (value ? value[lang] : undefined)
  const langOptions: { code: Lang; label: string }[] = [
    { code: 'ru', label: 'РУ' },
    { code: 'en', label: 'EN' },
    { code: 'kz', label: 'ҚАЗ' },
  ]

  return (
    <div className="portal-topbar">
      {/* Mobile menu burger */}
      <button
        className="topbar-icon-btn"
        onClick={onMenuToggle}
        aria-label="Toggle sidebar"
        id="topbar-menu-btn"
        style={{ display: 'none' }}
      >
        <Menu size={18} />
      </button>

      {/* Breadcrumb */}
      <div className="topbar-breadcrumb">
        <NavLink to="/">{labelFor(breadcrumbMap['/'].label)}</NavLink>
        {location.pathname !== '/' && current?.parent && (
          <>
            <span className="bc-sep"><ChevronRight size={13} /></span>
            <span>{labelFor(current.parent)}</span>
          </>
        )}
        {location.pathname !== '/' && current && (
          <>
            <span className="bc-sep"><ChevronRight size={13} /></span>
            <span className="bc-current">{labelFor(current.label)}</span>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="topbar-actions">
        <div className="topbar-lang" role="group" aria-label="Language switcher">
          {langOptions.map(option => (
            <button
              key={option.code}
              type="button"
              className={`topbar-lang-btn${lang === option.code ? ' active' : ''}`}
              onClick={() => setLang(option.code)}
              aria-pressed={lang === option.code}
            >
              {option.label}
            </button>
          ))}
        </div>

        <button className="topbar-icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        <NavLink to="/apply/form" className="topbar-apply-btn">
          {t('nav.apply')}
          <ChevronRight size={14} />
        </NavLink>
      </div>
    </div>
  )
}
