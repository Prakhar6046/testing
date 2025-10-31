'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'

import { FaBars, FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import type { Header, Media } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'

import HeaderNav from './HeaderNav'

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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

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

  // Convert config data to MenuItem format for HeaderNav
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

  const handleMobileMenuItemClick = () => {
    if (closeOnItemClick) {
      setmblMenu(false)
    }
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mblMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mblMenu])

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

          {/* Navigation */}
          <HeaderNav
            menuItems={menuItems}
            mblMenu={mblMenu}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={setActiveSubmenu}
            activeMegaMenu={activeMegaMenu}
            setActiveMegaMenu={setActiveMegaMenu}
            setmblMenu={setmblMenu}
            onMobileItemClick={handleMobileMenuItemClick}
            mobileMenuEnabled={mobileMenuEnabled}
          />

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
                <button
                  onClick={toggleSearch}
                  className="bg-secondary rounded-full text-white hover:bg-primary md:w-[52px] w-[32px] md:h-[52px] h-[32px] flex items-center justify-center transition-colors"
                  aria-label={searchAriaLabel}
                >
                  <FaSearch className="md:text-xl text-lg" />
                </button>
                {showSearchInput && (
                  <form
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
                  </form>
                )}
              </div>
            )}
            {contactEnabled && data.contactButton?.text && data.contactButton?.href && (
              <Link
                href={data.contactButton.href}
                className="bg-primary hover:bg-secondary text-xl font-medium text-white px-7 py-3 rounded-[18px] md:inline-flex hidden"
              >
                {data.contactButton.text}
              </Link>
            )}
          </div>
        </div>
      </header>
      {/* Desktop mega menu overlay */}
      {activeMegaMenu !== null && !mblMenu && (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-[#8181814D] z-10" />
      )}
    </>
  )
}
