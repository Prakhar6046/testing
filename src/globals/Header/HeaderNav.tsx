import { MenuItem } from '@/types/Menus'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import MegaMenu from './Nav/MegaMenu'

interface HeaderNavProps {
  menuItems: MenuItem[]
  mblMenu: boolean
  activeSubmenu: string | null
  setActiveSubmenu: (submenu: string | null) => void
  activeMegaMenu: string | null
  setActiveMegaMenu: (megaMenu: string | null) => void
  setmblMenu: (menu: boolean) => void
  onMobileItemClick: () => void
  mobileMenuEnabled: boolean
}

export default function HeaderNav({
  menuItems,
  mblMenu,
  activeSubmenu,
  setActiveSubmenu,
  activeMegaMenu,
  setActiveMegaMenu,
  setmblMenu,
  onMobileItemClick,
  mobileMenuEnabled,
}: HeaderNavProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [mobileOpenMenus, setMobileOpenMenus] = useState<string[]>([])
  const [navItemRefs, setNavItemRefs] = useState<Map<string, HTMLElement>>(new Map())
  const [megaMenuPosition, setMegaMenuPosition] = useState({ left: 0, width: 0 })

  // Create a stable ref callback to prevent infinite loops
  const setNavItemRef = useCallback((itemName: string, el: HTMLElement | null) => {
    setNavItemRefs((prev) => {
      // If element is null or already in map with same reference, don't update
      if (!el || prev.get(itemName) === el) {
        return prev
      }
      const newMap = new Map(prev)
      newMap.set(itemName, el)
      return newMap
    })
  }, [])

  const handleItemClick = (item: MenuItem, event: React.MouseEvent) => {
    if (item.submenu) {
      event.preventDefault()
      const isSubmenuOpen = activeSubmenu === item.name
      setActiveSubmenu(isSubmenuOpen ? null : item.name)
    } else if (item.megaMenu) {
      // For mega menu items in mobile, toggle the mega menu
      if (mblMenu) {
        event.preventDefault()
        const isMegaMenuOpen = activeMegaMenu === item.name
        setActiveMegaMenu(isMegaMenuOpen ? null : item.name)
      } else {
        // For desktop, close the mega menu when clicking the nav item
        // This allows navigation while closing any open mega menu
        setActiveMegaMenu(null)
        setActiveSubmenu(null)
      }
    } else {
      // For items without submenu/megamenu, close mobile menu and call mobile click handler
      setmblMenu(false)
      onMobileItemClick()
      // Also close any open mega menus or submenus
      setActiveMegaMenu(null)
      setActiveSubmenu(null)
    }
  }

  const handleMegaMenuEnter = (itemName: string, hasMegaMenu: boolean) => {
    if (!hasMegaMenu || mblMenu) return
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    // Calculate position based on nav item
    const navItem = navItemRefs.get(itemName)
    if (navItem) {
      const rect = navItem.getBoundingClientRect()
      setMegaMenuPosition({
        left: rect.left,
        width: rect.width,
      })
    }

    setActiveMegaMenu(itemName)
  }

  const handleMegaMenuLeave = () => {
    if (mblMenu) return
    // Add a delay before closing the mega menu
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 300) // 300ms delay - gives more time to move mouse to mega menu
  }

  const handleMegaMenuItemClick = () => {
    // Close mega menu when an item inside it is clicked
    setActiveMegaMenu(null)
    setActiveSubmenu(null)
    // Close mobile menu if open
    if (mblMenu) {
      setmblMenu(false)
      onMobileItemClick()
    }
  }

  const toggleMobileMenu = (itemName: string) => {
    setMobileOpenMenus((prev) =>
      prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName],
    )
  }

  // Reset mobile menu state when closed
  useEffect(() => {
    if (!mblMenu) {
      setMobileOpenMenus([])
    }
  }, [mblMenu])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      // Check if click is outside both the menu nav AND the mega menu dropdown
      const isOutsideMenu = menuRef.current && !menuRef.current.contains(target)
      const isOutsideMegaMenu = megaMenuRef.current && !megaMenuRef.current.contains(target)

      if (isOutsideMenu && isOutsideMegaMenu) {
        setActiveMegaMenu(null)
        setActiveSubmenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [setActiveMegaMenu, setActiveSubmenu])

  if (!mobileMenuEnabled && mblMenu) {
    return null
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav ref={menuRef} className="relative hidden lg:block">
        <ul className="flex flex-row gap-0 mx-auto w-fit">
          {menuItems.map((item) => {
            const isSubmenuOpen = activeSubmenu === item.name
            const isMegaMenuOpen = activeMegaMenu === item.name
            const hasDropdown = item.submenu || item.megaMenu

            return (
              <li
                key={item.name}
                className="relative group list-none"
                ref={(el) => {
                  if (item.megaMenu) {
                    setNavItemRef(item.name, el)
                  }
                }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleItemClick(item, e)}
                  onMouseEnter={() => handleMegaMenuEnter(item.name, !!item.megaMenu)}
                  onMouseLeave={handleMegaMenuLeave}
                  className={`${
                    isMegaMenuOpen || isSubmenuOpen ? 'text-secondary' : 'text-black'
                  } px-4 py-2 hover:text-secondary text-lg font-normal flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200 no-underline whitespace-nowrap`}
                >
                  {item.name}
                  {hasDropdown && (
                    <FaChevronDown
                      className={`w-3 h-3 mt-1 transition-transform duration-200 ${
                        isMegaMenuOpen || isSubmenuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mega Menu - Positioned under the active nav item */}
      {activeMegaMenu && (
        <div
          ref={megaMenuRef}
          className="fixed z-50"
          style={{
            top: 'calc(104px + 0.5rem)',
            left: `${megaMenuPosition.left}px`,
          }}
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

      {/* Mobile Navigation - Slide-in Panel */}
      {mblMenu && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
            onClick={() => setmblMenu(false)}
          />

          {/* Slide-in Menu Panel */}
          <div className="fixed right-0 top-0 z-50 h-screen w-80 border-l border-gray-200 bg-white p-6 shadow-xl lg:hidden overflow-y-auto animate-in slide-in-from-right duration-300">
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
                          className={`h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-base font-medium text-black hover:text-secondary transition-colors"
                        onClick={() => {
                          setmblMenu(false)
                          onMobileItemClick()
                        }}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Mega Menu Dropdown for Mobile */}
                    {hasMegaMenu && isMegaMenuOpen && item.megaMenu && (
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
                                      setmblMenu(false)
                                      onMobileItemClick()
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
                    )}
                  </div>
                )
              })}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
