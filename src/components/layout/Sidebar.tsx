import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  Globe2, University, Star, BarChart3,
  ClipboardList, FileText, Clock, Search,
  GraduationCap, BookOpen, DollarSign,
  MapPin, Send, Eye, Plane,
  Stamp, Settings, FileCheck, MessageSquare, RefreshCw,
  Shuffle,
  Building2, Stethoscope, UtensilsCrossed, Bus, Heart, Users2,
  UserCircle, FormInput, Upload, Activity,
  HelpCircle, Bot, Mail, Phone, Database,
  Home, MapPinned, AtSign, Share2, Timer,
  ChevronRight, ChevronLeft,
  LogIn
} from 'lucide-react'
import { useLang } from '../../context/LangContext'
import logo from '../../assets/logo.png'

interface SubItem {
  label: { ru: string; en: string; kz: string }
  path: string
  icon: React.ElementType
}

interface NavSection {
  id: string
  label: { ru: string; en: string; kz: string }
  icon: React.ElementType
  basePath: string
  children: SubItem[]
}

const navSections: NavSection[] = [
  {
    id: 'about',
    label: { ru: 'О портале', en: 'About Portal', kz: 'Портал туралы' },
    icon: Globe2,
    basePath: '/about',
    children: [
      { label: { ru: 'О Казахстане и Кызылорде', en: 'About Kazakhstan', kz: 'Қазақстан туралы' }, path: '/about/kazakhstan', icon: MapPin },
      { label: { ru: 'Об университете', en: 'About University', kz: 'Университет туралы' }, path: '/about/university', icon: University },
      { label: { ru: 'Преимущества обучения', en: 'Study Benefits', kz: 'Оқу артықшылықтары' }, path: '/about/advantages', icon: Star },
      { label: { ru: 'Статистика и цифры', en: 'Stats & Figures', kz: 'Статистика' }, path: '/about/stats', icon: BarChart3 },
    ],
  },
  {
    id: 'rules',
    label: { ru: 'Правила приема', en: 'Admission Rules', kz: 'Қабылдау ережелері' },
    icon: ClipboardList,
    basePath: '/rules',
    children: [
      { label: { ru: 'Общие требования', en: 'General Requirements', kz: 'Жалпы талаптар' }, path: '/rules/requirements', icon: FileCheck },
      { label: { ru: 'Документы', en: 'Documents', kz: 'Құжаттар' }, path: '/rules/documents', icon: FileText },
      { label: { ru: 'Сроки подачи', en: 'Deadlines', kz: 'Мерзімдер' }, path: '/rules/deadlines', icon: Clock },
      { label: { ru: 'Процесс рассмотрения', en: 'Review Process', kz: 'Қарау процесі' }, path: '/rules/review', icon: Search },
    ],
  },
  {
    id: 'programs',
    label: { ru: 'Программы', en: 'Programs', kz: 'Бағдарламалар' },
    icon: GraduationCap,
    basePath: '/programs',
    children: [
      { label: { ru: 'Бакалавриат', en: "Bachelor's", kz: 'Бакалавриат' }, path: '/programs/bachelor', icon: BookOpen },
      { label: { ru: 'Магистратура', en: "Master's", kz: 'Магистратура' }, path: '/programs/master', icon: GraduationCap },
      { label: { ru: 'Стоимость обучения', en: 'Tuition Fees', kz: 'Оқу құны' }, path: '/programs/tuition', icon: DollarSign },
    ],
  },
  {
    id: 'roadmap',
    label: { ru: 'Путь поступления', en: 'Admission Roadmap', kz: 'Түсу жолы' },
    icon: MapPin,
    basePath: '/roadmap',
    children: [
      { label: { ru: 'Выбор программы', en: 'Choose Program', kz: 'Бағдарлама таңдау' }, path: '/roadmap/choose', icon: Search },
      { label: { ru: 'Подача документов', en: 'Submit Documents', kz: 'Құжат тапсыру' }, path: '/roadmap/submit', icon: Send },
      { label: { ru: 'Рассмотрение заявки', en: 'Application Review', kz: 'Өтінімді қарау' }, path: '/roadmap/review', icon: Eye },
      { label: { ru: 'Получение приглашения', en: 'Invitation Letter', kz: 'Шақыру хаты' }, path: '/roadmap/invite', icon: Mail },
      { label: { ru: 'Оформление визы', en: 'Visa Process', kz: 'Виза рәсімдеу' }, path: '/roadmap/visa', icon: Plane },
      { label: { ru: 'Прибытие и регистрация', en: 'Arrival & Registration', kz: 'Келу және тіркелу' }, path: '/roadmap/arrive', icon: Home },
    ],
  },
  {
    id: 'migration',
    label: { ru: 'Миграция и виза', en: 'Visa & Migration', kz: 'Миграция және виза' },
    icon: Plane,
    basePath: '/migration',
    children: [
      { label: { ru: 'Типы виз', en: 'Visa Types', kz: 'Виза түрлері' }, path: '/migration/types', icon: Stamp },
      { label: { ru: 'Процесс оформления', en: 'Application Process', kz: 'Рәсімдеу процесі' }, path: '/migration/process', icon: Settings },
      { label: { ru: 'Необходимые документы', en: 'Required Documents', kz: 'Қажетті құжаттар' }, path: '/migration/documents', icon: FileText },
      { label: { ru: 'Консультация', en: 'Consultation', kz: 'Кеңес беру' }, path: '/migration/consult', icon: MessageSquare },
      { label: { ru: 'Регистрация', en: 'Registration', kz: 'Тіркелу' }, path: '/migration/register', icon: MapPinned },
      { label: { ru: 'Продление визы', en: 'Visa Extension', kz: 'Визаны ұзарту' }, path: '/migration/extend', icon: RefreshCw },
    ],
  },
  {
    id: 'mobility',
    label: { ru: 'Программы мобильности', en: 'Mobility Programs', kz: 'Мобильділік бағдарламалары' },
    icon: Shuffle,
    basePath: '/mobility',
    children: [],
  },
  {
    id: 'life',
    label: { ru: 'Быт и адаптация', en: 'Life & Adaptation', kz: 'Тұрмыс және бейімделу' },
    icon: Building2,
    basePath: '/life',
    children: [
      { label: { ru: 'Общежития и жилье', en: 'Housing & Dorms', kz: 'Тұрғын үй' }, path: '/life/dorms', icon: Building2 },
      { label: { ru: 'Медицинское обслуживание', en: 'Health Services', kz: 'Медициналық қызмет' }, path: '/life/health', icon: Stethoscope },
      { label: { ru: 'Питание', en: 'Food & Dining', kz: 'Тамақтану' }, path: '/life/food', icon: UtensilsCrossed },
      { label: { ru: 'Транспорт', en: 'Transport', kz: 'Көлік' }, path: '/life/transport', icon: Bus },
      { label: { ru: 'Культурная адаптация', en: 'Cultural Adaptation', kz: 'Мәдени бейімделу' }, path: '/life/culture', icon: Heart },
      { label: { ru: 'Студенческая жизнь', en: 'Student Life', kz: 'Студент өмірі' }, path: '/life/social', icon: Users2 },
    ],
  },
  {
    id: 'apply',
    label: { ru: 'Подача заявки', en: 'Apply', kz: 'Өтінім беру' },
    icon: Send,
    basePath: '/apply',
    children: [
      { label: { ru: 'Личный кабинет', en: 'Personal Account', kz: 'Жеке кабинет' }, path: '/apply/cabinet', icon: UserCircle },
      { label: { ru: 'Форма заявки', en: 'Application Form', kz: 'Өтінім нысаны' }, path: '/apply/form', icon: FormInput },
      { label: { ru: 'Загрузка документов', en: 'Upload Documents', kz: 'Құжат жүктеу' }, path: '/apply/documents', icon: Upload },
      { label: { ru: 'Статус заявки', en: 'Track Status', kz: 'Өтінім мәртебесі' }, path: '/apply/status', icon: Activity },
    ],
  },
  {
    id: 'support',
    label: { ru: 'Помощь и поддержка', en: 'Help & Support', kz: 'Көмек және қолдау' },
    icon: HelpCircle,
    basePath: '/support',
    children: [
      { label: { ru: 'FAQ', en: 'FAQ', kz: 'Жиі сұрақтар' }, path: '/support/faq', icon: HelpCircle },
      { label: { ru: 'Чат-бот', en: 'Chatbot', kz: 'Чат-бот' }, path: '/support/chat', icon: Bot },
      { label: { ru: 'Обратная связь', en: 'Feedback', kz: 'Кері байланыс' }, path: '/support/feedback', icon: Mail },
      { label: { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' }, path: '/support/contacts', icon: Phone },
      { label: { ru: 'База знаний', en: 'Knowledge Base', kz: 'Білім базасы' }, path: '/support/knowledge', icon: Database },
    ],
  },
  {
    id: 'contacts',
    label: { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' },
    icon: Phone,
    basePath: '/contacts',
    children: [
      { label: { ru: 'Адрес университета', en: 'University Address', kz: 'Мекенжай' }, path: '/contacts/address', icon: MapPin },
      { label: { ru: 'Телефоны', en: 'Phone Numbers', kz: 'Телефондар' }, path: '/contacts/phones', icon: Phone },
      { label: { ru: 'Email', en: 'Email', kz: 'Email' }, path: '/contacts/email', icon: AtSign },
      { label: { ru: 'Социальные сети', en: 'Social Media', kz: 'Әлеуметтік желілер' }, path: '/contacts/social', icon: Share2 },
      { label: { ru: 'Часы работы', en: 'Working Hours', kz: 'Жұмыс уақыты' }, path: '/contacts/hours', icon: Timer },
    ],
  },
]

interface SidebarProps {
  collapsed: boolean
  onCollapse: (v: boolean) => void
  mobileOpen: boolean
  onMobileClose: () => void
}

export default function Sidebar({ collapsed, onCollapse, mobileOpen, onMobileClose }: SidebarProps) {
  const { lang } = useLang()
  const location = useLocation()
  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    const active = navSections.find(s =>
      location.pathname.startsWith(s.basePath)
    )
    return new Set(active ? [active.id] : [])
  })

  const toggleSection = (id: string) => {
    if (collapsed) return
    setOpenSections(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const sidebarClasses = [
    'portal-sidebar',
    collapsed ? 'collapsed' : '',
    mobileOpen ? 'mobile-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="sidebar-mobile-overlay" onClick={onMobileClose} />
      )}

      <aside className={sidebarClasses} aria-label="Main navigation">
        {/* Logo */}
        <div className="sidebar-logo-area">
          <img src={logo} alt="Korkyt Ata" className="sidebar-logo-img" />
          <div className="sidebar-logo-text">
            Коркыт Ата
            <span>Admission Portal</span>
          </div>
        </div>

        {/* Collapse button (desktop only) */}
        <button
          className="sidebar-collapse-btn"
          onClick={() => onCollapse(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          id="sidebar-collapse-desktop"
        >
          <ChevronLeft size={13} />
        </button>

        {/* Navigation */}
        <nav className="sidebar-nav" aria-label="Portal sections">
          {/* Home link */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `sidebar-item-btn${isActive ? ' active' : ''}`
            }
            onClick={onMobileClose}
          >
            <Home size={18} className="sidebar-item-icon" />
            <span className="sidebar-item-label">
              {lang === 'en' ? 'Home' : lang === 'kz' ? 'Басты бет' : 'Главная'}
            </span>
          </NavLink>

          {navSections.map(section => {
            const Icon = section.icon
            const isOpen = openSections.has(section.id)
            const isSectionActive = location.pathname.startsWith(section.basePath)
            const hasChildren = section.children.length > 0

            return (
              <div key={section.id} className="sidebar-item">
                {hasChildren ? (
                  <>
                    <button
                      className={`sidebar-item-btn${isSectionActive ? ' active' : ''}`}
                      onClick={() => toggleSection(section.id)}
                      aria-expanded={isOpen}
                    >
                      <Icon size={18} className="sidebar-item-icon" />
                      <span className="sidebar-item-label">{section.label[lang]}</span>
                      <ChevronRight
                        size={14}
                        className={`sidebar-item-chevron${isOpen ? ' open' : ''}`}
                      />
                    </button>

                    <div className={`sidebar-submenu${isOpen ? ' open' : ''}`}>
                      {section.children.map(child => {
                        const ChildIcon = child.icon
                        return (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              `sidebar-sub-link${isActive ? ' active' : ''}`
                            }
                            onClick={onMobileClose}
                          >
                            <ChildIcon size={14} style={{ flexShrink: 0, opacity: 0.6 }} />
                            {child.label[lang]}
                          </NavLink>
                        )
                      })}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={section.basePath}
                    className={({ isActive }) =>
                      `sidebar-item-btn${isActive ? ' active' : ''}`
                    }
                    onClick={onMobileClose}
                  >
                    <Icon size={18} className="sidebar-item-icon" />
                    <span className="sidebar-item-label">{section.label[lang]}</span>
                  </NavLink>
                )}
              </div>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          {/* Apply CTA */}
          <NavLink
            to="/apply/form"
            className="sidebar-item-btn"
            style={{ background: 'var(--accent-subtle)', color: 'var(--accent)', fontWeight: 700 }}
            onClick={onMobileClose}
          >
            <LogIn size={18} className="sidebar-item-icon" style={{ color: 'var(--accent)' }} />
            <span className="sidebar-item-label">{lang === 'en' ? 'Apply now' : lang === 'kz' ? 'Өтінім беру' : 'Подать заявку'}</span>
          </NavLink>
        </div>
      </aside>
    </>
  )
}
