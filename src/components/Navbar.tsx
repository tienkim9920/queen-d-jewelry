'use client';

import { Language } from '@/hooks/translations';
import { useTranslate } from '@/hooks/useTranslate';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type LinkList = {
  label: string;
  href: string;
  activeLink?: string;
};

const Navbar = () => {
  const { lang = 'vi' } = useParams();
  const { t } = useTranslate(lang as Language);
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const menuItems: LinkList[] = [
    { label: t('home'), href: lang == 'vi' ? '/' : `/${lang}`, activeLink: '' },
    { label: t('collection'), href: `/${lang}/collection`, activeLink: '/collection' },
    { label: t('aboutUs'), href: `/${lang}/about`, activeLink: '/about' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={`w-full max-w-6xl flex justify-between items-center px-8 py-4 rounded-2xl transition-all duration-500
  ${scrolled
            ? 'bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
            : 'bg-white/10 backdrop-blur-xl border border-white/20'
          }`}
      >
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src="/image/queen-jewelry.webp"
            alt="Nineweb Solution"
            width={400}
            height={40}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          {menuItems.map((item, idx) => {
            const cleanPath = pathname.replace(/\/$/, '');
            const segments = cleanPath.split('/').filter(Boolean);
            const currentRoute = segments[1] || '';

            const active =
              item.activeLink === ''
                ? segments.length <= 1
                : currentRoute === item.activeLink!.replace('/', '');

            return (
              <Link
                key={idx}
                href={item.href}
                className={`px-5 py-2 text-[15px] rounded-full transition-all duration-300
      ${active
                    ? 'bg-gradient-to-r from-[#6c40c9] to-[#804fa0] text-white font-semibold'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Language Switcher */}
        {/* <div className="hidden md:flex items-center 
bg-[rgba(108,64,201,0.08)] 
border border-[rgba(108,64,201,0.2)]
rounded-full p-1">

          {['vi', 'en', 'ko'].map((lng) => {
            const cleanPath = pathname.replace(/\/$/, '');
            const currentLang = cleanPath.split('/')[1] || 'vi';
            const active = currentLang === lng;

            const targetPath =
              cleanPath === '' || cleanPath === '/'
                ? `/${lng}`
                : cleanPath.replace(`/${currentLang}`, `/${lng}`);

            return (
              <Link
                key={lng}
                href={targetPath}
                className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200
        ${active
                    ? 'bg-gradient-to-r from-[#6c40c9] to-[#804fa0] text-white font-semibold'
                    : 'text-gray-300 hover:text-[#6c40c9]'
                  }`}
              >
                {lng.toUpperCase()}
              </Link>
            );
          })}

        </div> */}

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>



      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full 
  bg-[rgba(108,64,201,0.06)] 
  backdrop-blur-xl
  shadow-2xl z-50
  transform transition-transform duration-300 md:hidden
  ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[rgba(108,64,201,0.15)]">
          <span className="font-semibold text-lg text-[#6c40c9]">Nineweb</span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} className="text-[#6c40c9]" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 p-6">
          {menuItems.map((item, idx) => {
            const cleanPath = pathname.replace(/\/$/, '');
            const segments = cleanPath.split('/').filter(Boolean);
            const currentRoute = segments[1] || '';

            const active =
              item.activeLink === ''
                ? segments.length <= 1
                : currentRoute === item.activeLink!.replace('/', '');

            return (
              <Link
                key={idx}
                href={item.href}
                className={`px-4 py-3 rounded-xl text-[16px] transition-all duration-200
            ${active
                    ? 'bg-gradient-to-r from-[#6c40c9] to-[#804fa0] text-white font-semibold'
                    : 'text-gray-300 hover:text-[#6c40c9] hover:bg-[rgba(108,64,201,0.08)]'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        {/* Language Switcher */}
        {/* <div className="px-6 py-4 border-t border-[rgba(108,64,201,0.15)]">
          <div className="flex gap-2 bg-[rgba(108,64,201,0.08)] p-1 rounded-full w-fit">
            {['vi', 'en', 'ko'].map((lng) => {
              const cleanPath = pathname.replace(/\/$/, '');
              const segments = cleanPath.split('/').filter(Boolean);
              const currentLang = segments[0] || 'vi';

              const activeLang = currentLang === lng;

              const targetPath =
                segments.length === 0
                  ? `/${lng}`
                  : cleanPath.replace(`/${currentLang}`, `/${lng}`);

              return (
                <Link
                  key={lng}
                  href={targetPath}
                  className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200
            ${activeLang
                      ? 'bg-gradient-to-r from-[#6c40c9] to-[#804fa0] text-white font-semibold'
                      : 'text-gray-300 hover:text-[#6c40c9]'
                    }`}
                >
                  {lng.toUpperCase()}
                </Link>
              );
            })}
          </div>

        </div> */}
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;