import { NavLink, useLocation } from 'react-router-dom'
import { Menu, Sun, Moon, ChevronRight } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'

interface TopBarProps {
  onMenuToggle: () => void
}

const breadcrumbMap: Record<string, { label: string; parent?: string; parentPath?: string }> = {
  '/': { label: 'Главная' },
  '/about/kazakhstan': { label: 'О Казахстане', parent: 'О портале', parentPath: '/about/university' },
  '/about/university': { label: 'Об университете', parent: 'О портале', parentPath: '/about/university' },
  '/about/advantages': { label: 'Преимущества', parent: 'О портале', parentPath: '/about/university' },
  '/about/stats': { label: 'Статистика', parent: 'О портале', parentPath: '/about/university' },
  '/rules/requirements': { label: 'Общие требования', parent: 'Правила приема', parentPath: '/rules/requirements' },
  '/rules/documents': { label: 'Документы', parent: 'Правила приема', parentPath: '/rules/requirements' },
  '/rules/deadlines': { label: 'Сроки подачи', parent: 'Правила приема', parentPath: '/rules/requirements' },
  '/rules/review': { label: 'Процесс рассмотрения', parent: 'Правила приема', parentPath: '/rules/requirements' },
  '/programs/bachelor': { label: 'Бакалавриат', parent: 'Программы', parentPath: '/programs/bachelor' },
  '/programs/master': { label: 'Магистратура', parent: 'Программы', parentPath: '/programs/bachelor' },
  '/programs/tuition': { label: 'Стоимость обучения', parent: 'Программы', parentPath: '/programs/bachelor' },
  '/roadmap/choose': { label: 'Выбор программы', parent: 'Путь поступления', parentPath: '/roadmap/choose' },
  '/roadmap/submit': { label: 'Подача документов', parent: 'Путь поступления', parentPath: '/roadmap/choose' },
  '/roadmap/review': { label: 'Рассмотрение заявки', parent: 'Путь поступления', parentPath: '/roadmap/choose' },
  '/roadmap/invite': { label: 'Получение приглашения', parent: 'Путь поступления', parentPath: '/roadmap/choose' },
  '/roadmap/visa': { label: 'Оформление визы', parent: 'Путь поступления', parentPath: '/roadmap/choose' },
  '/roadmap/arrive': { label: 'Прибытие и регистрация', parent: 'Путь поступления', parentPath: '/roadmap/choose' },
  '/migration/types': { label: 'Типы виз', parent: 'Миграция и виза', parentPath: '/migration/types' },
  '/migration/process': { label: 'Процесс оформления', parent: 'Миграция и виза', parentPath: '/migration/types' },
  '/migration/documents': { label: 'Необходимые документы', parent: 'Миграция и виза', parentPath: '/migration/types' },
  '/migration/consult': { label: 'Консультация', parent: 'Миграция и виза', parentPath: '/migration/types' },
  '/migration/register': { label: 'Регистрация', parent: 'Миграция и виза', parentPath: '/migration/types' },
  '/migration/extend': { label: 'Продление визы', parent: 'Миграция и виза', parentPath: '/migration/types' },
  '/mobility': { label: 'Программы мобильности' },
  '/life/dorms': { label: 'Общежития и жилье', parent: 'Быт и адаптация', parentPath: '/life/dorms' },
  '/life/health': { label: 'Медицинское обслуживание', parent: 'Быт и адаптация', parentPath: '/life/dorms' },
  '/life/food': { label: 'Питание', parent: 'Быт и адаптация', parentPath: '/life/dorms' },
  '/life/transport': { label: 'Транспорт', parent: 'Быт и адаптация', parentPath: '/life/dorms' },
  '/life/culture': { label: 'Культурная адаптация', parent: 'Быт и адаптация', parentPath: '/life/dorms' },
  '/life/social': { label: 'Студенческая жизнь', parent: 'Быт и адаптация', parentPath: '/life/dorms' },
  '/apply/cabinet': { label: 'Личный кабинет', parent: 'Подача заявки', parentPath: '/apply/cabinet' },
  '/apply/form': { label: 'Форма заявки', parent: 'Подача заявки', parentPath: '/apply/cabinet' },
  '/apply/documents': { label: 'Загрузка документов', parent: 'Подача заявки', parentPath: '/apply/cabinet' },
  '/apply/status': { label: 'Статус заявки', parent: 'Подача заявки', parentPath: '/apply/cabinet' },
  '/support/faq': { label: 'FAQ', parent: 'Помощь и поддержка', parentPath: '/support/faq' },
  '/support/chat': { label: 'Чат-бот', parent: 'Помощь и поддержка', parentPath: '/support/faq' },
  '/support/feedback': { label: 'Обратная связь', parent: 'Помощь и поддержка', parentPath: '/support/faq' },
  '/support/contacts': { label: 'Контакты', parent: 'Помощь и поддержка', parentPath: '/support/faq' },
  '/support/knowledge': { label: 'База знаний', parent: 'Помощь и поддержка', parentPath: '/support/faq' },
  '/contacts/address': { label: 'Адрес', parent: 'Контакты', parentPath: '/contacts/address' },
  '/contacts/phones': { label: 'Телефоны', parent: 'Контакты', parentPath: '/contacts/address' },
  '/contacts/email': { label: 'Email', parent: 'Контакты', parentPath: '/contacts/address' },
  '/contacts/social': { label: 'Социальные сети', parent: 'Контакты', parentPath: '/contacts/address' },
  '/contacts/hours': { label: 'Часы работы', parent: 'Контакты', parentPath: '/contacts/address' },
}

export default function TopBar({ onMenuToggle }: TopBarProps) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLang()
  const location = useLocation()

  const current = breadcrumbMap[location.pathname]

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
        <NavLink to="/">Главная</NavLink>
        {current?.parent && (
          <>
            <span className="bc-sep"><ChevronRight size={13} /></span>
            <span>{current.parent}</span>
          </>
        )}
        {current && (
          <>
            <span className="bc-sep"><ChevronRight size={13} /></span>
            <span className="bc-current">{current.label}</span>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="topbar-actions">
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
