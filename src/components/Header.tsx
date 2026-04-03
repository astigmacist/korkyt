import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLang, type Lang } from '../context/LangContext'
import { User, Globe, Sun, Moon, ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import './Header.css'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '#journey', label: t('nav.journey') },
    { href: '#programs', label: t('nav.programs') },
    { href: '#support', label: t('nav.support') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contacts', label: t('nav.contact') },
  ]

  const langOptions: { code: Lang; label: string }[] = [
    { code: 'kz', label: 'Қаз' },
    { code: 'ru', label: 'Рус' },
    { code: 'en', label: 'Eng' },
  ]

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
        <div className="header-inner">
          {/* Logo */}
          <a className="header-logo" href="#top">
            <img src={logo} alt="Korkyt Ata University" className="logo-img" />
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav-desktop">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            {/* Lang Switcher */}
            <div className="lang-dropdown">
              <button
                className="icon-btn lang-btn"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Switch language"
              >
                <Globe size={16} />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown size={13} className={langOpen ? 'rotate' : ''} />
              </button>
              {langOpen && (
                <div className="lang-menu">
                  {langOptions.map(opt => (
                    <button
                      key={opt.code}
                      className={`lang-option${lang === opt.code ? ' active' : ''}`}
                      onClick={() => { setLang(opt.code); setLangOpen(false) }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme */}
            <button className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Cabinet */}
            <a className="icon-btn cabinet-btn" href="#" aria-label="Personal account">
              <User size={18} />
            </a>

            {/* Apply */}
            <a className="btn-apply" href="#journey">{t('nav.apply')}</a>

            {/* Burger */}
            <button
              className="burger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a className="btn-primary btn-lg mobile-apply" href="#journey" onClick={() => setMenuOpen(false)}>
              {t('nav.apply')}
            </a>
          </nav>
        </div>
      )}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
