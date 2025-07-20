import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

type NavItem = {
  path: string;
  label: string;
};

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleToggleDarkMode = (): void => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleToggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const getNavLinkClass = (path: string): string => {
    const isActive = location.pathname === path;
    return isActive
      ? 'text-blue-600 dark:text-blue-400'
      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-gray-800 dark:text-white"
            aria-label="Go to home page"
          >
            Alonso Bobadilla
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${getNavLinkClass(item.path)} transition-colors duration-200`}
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleToggleDarkMode}
              onKeyDown={(e) => handleKeyDown(e, handleToggleDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              tabIndex={0}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={handleToggleDarkMode}
              onKeyDown={(e) => handleKeyDown(e, handleToggleDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              tabIndex={0}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={handleToggleMobileMenu}
              onKeyDown={(e) => handleKeyDown(e, handleToggleMobileMenu)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMobileMenuOpen}
              tabIndex={0}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700" role="menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMobileNavClick}
                className={`block py-2 ${getNavLinkClass(item.path)} transition-colors duration-200`}
                aria-label={`Navigate to ${item.label} page`}
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 