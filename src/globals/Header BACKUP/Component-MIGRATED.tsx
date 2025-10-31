'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import { FaBars, FaSearch, FaChevronDown } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import type { Header, Media } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import MegaMenu from './Nav/MegaMenu'

interface HeaderClientProps {
  data: Header
}

export function HeaderClient({ data }: HeaderClientProps) {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const router = useRouter()

  const [mblMenu, setmblMenu] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileOpenMenus, setMobileOpenMenus] = useState<string[]>([])

  const searchInputRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Focus input when search is opened
  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearchInput])

  // Close search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (showSearchInput && !target.closest('.search-container')) {
        setShowSearchInput(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showSearchInput])

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mega menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mblMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setMobileOpenMenus([])
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mblMenu])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSearchInput(false)
      setSearchQuery('')
    }
  }

  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput)
    if (showSearchInput) {
      setSearchQuery('')
    }
  }

  const handleMegaMenuEnter = (itemName: string, hasMegaMenu: boolean) => {
    if (!hasMegaMenu || mblMenu) return
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveMegaMenu(itemName)
  }

  const handleMegaMenuLeave = () => {
    if (mblMenu) return
    // Add a delay before closing the mega menu
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150) // 150ms delay
  }

  const handleMegaMenuItemClick = () => {
    // Close mega menu when an item inside it is clicked
    setActiveMegaMenu(null)
    // Close mobile menu if open
    if (mblMenu) {
      setmblMenu(false)
    }
  }

  const handleDesktopItemClick = (item: any, event: React.MouseEvent) => {
    if (item.megaMenu) {
      // For desktop, close the mega menu when clicking the nav item
      // This allows navigation while closing any open mega menu
      setActiveMegaMenu(null)
    }
  }

  const toggleMobileMenu = (itemName: string) => {
    setMobileOpenMenus((prev) =>
      prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName],
    )
  }

  // Convert config data to MenuItem format
  const menuItems =
    data.navItems?.map((item) => {
      const menuItem: any = {
        name: item.name,
        href: item.href,
      }

      // Handle mega menu
      if (item.useMegaMenu && item.megaMenu?.sections) {
        menuItem.megaMenu = item.megaMenu.sections.map((section) => ({
          title: section.title,
          items:
            section.items?.map((menuItem) => ({
              name: menuItem.name,
              href: menuItem.link?.url || menuItem.link?.reference?.value || '#',
            })) || [],
        }))
      }

      return menuItem
    }) || []

  // Get logo details
  const logoMedia = data.logo?.image as Media
  const logoUrl = logoMedia?.url ? getMediaUrl(logoMedia.url) : '/images/logo.png'
  const logoAlt = logoMedia?.alt || 'Logo'

  // Mobile menu settings
  const mobileMenuEnabled = data.mobileMenu?.enabled !== false
  const closeOnItemClick = data.mobileMenu?.closeOnItemClick !== false

  // Search button settings
  const searchEnabled = data.searchButton?.enabled !== false
  const searchAriaLabel = data.searchButton?.ariaLabel || 'Search'

  // Contact button settings
  const contactEnabled = data.contactButton?.enabled !== false

  return (
    <>
      {/* Spacer to prevent content jump when header becomes fixed */}
      {isScrolled && <div className="h-[88px]" />}

      <header
        className={`bg-background transition-all duration-300 ease-in-out ${
          isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 shadow-lg' : 'p-8'
        }`}
      >
        <div
          className={`container mx-auto bg-white flex justify-between items-center md:relative z-50 transition-all duration-300 ease-in-out ${
            isScrolled ? 'md:px-4 px-3 py-2 rounded-[50px]' : 'md:px-5 px-4 py-3 rounded-[100px]'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`flex justify-center items-center transition-all duration-300 ${
                isScrolled ? 'w-[100px] h-[40px]' : 'w-[128px] h-[52px]'
              }`}
            >
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={128}
                height={52}
                className="object-contain max-w-full max-h-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav ref={menuRef} className="relative hidden lg:block">
            <ul className="flex flex-row gap-0 mx-auto w-fit">
              {menuItems.map((item) => {
                const isMegaMenuOpen = activeMegaMenu === item.name
                const hasMegaMenu = !!item.megaMenu

                return (
                  <li key={item.name} className="relative group list-none">
                    <Link
                      href={item.href}
                      onClick={(e) => handleDesktopItemClick(item, e)}
                      onMouseEnter={() => handleMegaMenuEnter(item.name, hasMegaMenu)}
                      onMouseLeave={handleMegaMenuLeave}
                      className={`${
                        isMegaMenuOpen ? 'text-secondary' : 'text-black'
                      } px-4 py-2 hover:text-secondary text-lg font-normal flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200 no-underline whitespace-nowrap`}
                    >
                      {item.name}
                      {hasMegaMenu && (
                        <FaChevronDown
                          className={`w-3 h-3 mt-1 transition-transform duration-200 ${
                            isMegaMenuOpen ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
            {activeMegaMenu && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 z-50"
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
                    timeoutRef.current = null
                  }
                }}
                onMouseLeave={handleMegaMenuLeave}
              >
                {menuItems.map((item) => {
                  if (activeMegaMenu === item.name && item.megaMenu) {
                    return (
                      <MegaMenu
                        key={item.name}
                        sections={item.megaMenu}
                        onItemClick={handleMegaMenuItemClick}
                      />
                    )
                  }
                  return null
                })}
              </div>
            )}
          </nav>

          {/* Right Side: Search + Contact */}
          <div className="flex items-center space-x-4">
            {mobileMenuEnabled && (
              <button
                onClick={() => setmblMenu(!mblMenu)}
                className="lg:hidden flex text-2xl"
                aria-label={mblMenu ? 'Close menu' : 'Open menu'}
              >
                {!mblMenu ? <FaBars /> : <IoClose />}
              </button>
            )}
            {searchEnabled && (
              <div className="relative search-container">
                <motion.button
                  onClick={toggleSearch}
                  className="bg-secondary rounded-full text-white hover:bg-primary md:w-[52px] w-[32px] md:h-[52px] h-[32px] flex items-center justify-center transition-colors"
                  aria-label={searchAriaLabel}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaSearch className="md:text-xl text-lg" />
                </motion.button>
                <AnimatePresence>
                  {showSearchInput && (
                    <motion.form
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      onSubmit={handleSearchSubmit}
                      className="absolute right-0 top-full mt-2 z-50"
                    >
                      <div className="relative">
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-64 md:w-80 h-12 pl-4 pr-12 rounded-full border-2 border-gray-200 focus:border-primary focus:outline-none shadow-lg bg-white"
                        />
                        <button
                          type="submit"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                          aria-label="Submit search"
                        >
                          <FaSearch className="text-sm" />
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            )}
            {contactEnabled && data.contactButton?.text && data.contactButton?.href && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:inline-flex"
              >
                <Link
                  href={data.contactButton.href}
                  className="bg-primary hover:bg-secondary text-xl font-medium text-white px-7 py-3 rounded-[18px] inline-flex transition-colors"
                >
                  {data.contactButton.text}
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Desktop mega menu overlay */}
      <AnimatePresence>
        {activeMegaMenu !== null && !mblMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-0 bottom-0 bg-[#8181814D] z-10"
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation - Slide-in Panel */}
      <AnimatePresence>
        {mblMenu && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setmblMenu(false)}
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-0 z-50 h-screen w-80 border-l border-gray-200 bg-white p-6 shadow-xl lg:hidden overflow-y-auto"
            >
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => {
                  const hasMegaMenu = !!item.megaMenu
                  const isMegaMenuOpen = mobileOpenMenus.includes(item.name)

                  return (
                    <div key={item.name}>
                      {hasMegaMenu ? (
                        <button
                          className="flex w-full items-center justify-between text-base font-medium text-black hover:text-secondary transition-colors"
                          onClick={() => toggleMobileMenu(item.name)}
                        >
                          {item.name}
                          <FaChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-base font-medium text-black hover:text-secondary transition-colors"
                          onClick={() => {
                            if (closeOnItemClick) {
                              setmblMenu(false)
                            }
                          }}
                        >
                          {item.name}
                        </Link>
                      )}

                      {/* Mega Menu Dropdown for Mobile */}
                      <AnimatePresence>
                        {hasMegaMenu && isMegaMenuOpen && item.megaMenu && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-4 pl-4">
                              {item.megaMenu.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                  <h4 className="mb-2 text-sm font-semibold text-gray-900">
                                    {section.title}
                                  </h4>
                                  <ul className="space-y-2">
                                    {section.items.map((menuItem, itemIndex) => (
                                      <li key={itemIndex}>
                                        <Link
                                          href={menuItem.href}
                                          className="text-sm text-gray-600 hover:text-secondary transition-colors"
                                          onClick={() => {
                                            if (closeOnItemClick) {
                                              setmblMenu(false)
                                            }
                                          }}
                                        >
                                          {menuItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
