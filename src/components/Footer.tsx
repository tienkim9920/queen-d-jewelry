'use client'

import { Language } from "@/hooks/translations";
import { useTranslate } from "@/hooks/useTranslate";
import Link from "next/link";
import { useParams } from "next/navigation";

const Footer = () => {
  const { lang = 'vi' } = useParams();
  const { t } = useTranslate(lang as Language);

  return (
    <footer className="relative bg-[#0a0a12] border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">

      {/* Glow subtle */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-r 
      from-purple-600/10 via-fuchsia-500/10 to-pink-500/10 
      blur-[120px] rounded-full opacity-70" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">
              Nineweb
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footerDescription')}
            </p>

            <div className="space-y-2 text-gray-400 text-sm">
              <div>Email: contact@nineweb.vn</div>
              <div>{t('footerHotline')}: 0909 123 456</div>
              <div>{t('footerLocation')}</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              {t('footerServices')}
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">{t('service1')}</li>
              <li className="hover:text-white transition cursor-pointer">{t('service2')}</li>
              <li className="hover:text-white transition cursor-pointer">{t('service3')}</li>
              <li className="hover:text-white transition cursor-pointer">{t('service4')}</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              {t('footerCompany')}
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">{t('company1')}</li>
              <li className="hover:text-white transition cursor-pointer">{t('company2')}</li>
              <li className="hover:text-white transition cursor-pointer">{t('company3')}</li>
              <li className="hover:text-white transition cursor-pointer">{t('company4')}</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              {t('footerNewsletter')}
            </h4>

            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              {t('footerNewsletterDesc')}
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder={t('footerEmailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-l-xl bg-white/5 
              border border-white/10 text-white placeholder-gray-500 
              focus:outline-none focus:border-purple-500 transition"
              />
              <button
                className="px-5 py-3 rounded-r-xl 
              bg-gradient-to-r from-purple-600 to-pink-500 
              text-white font-semibold hover:opacity-90 
              active:scale-95 transition"
              >
                {t('footerSubmit')}
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row 
      justify-between items-center text-gray-500 text-sm">

          <div>
            © {new Date().getFullYear()} Nineweb. {t('footerRights')}
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/nkt.9920/" target="_blank" className="hover:text-white transition">
              Facebook
            </Link>
            <Link href="https://www.linkedin.com/in/nguyenkimtien-0909-2000xyz/" target="_blank" className="hover:text-white transition">
              LinkedIn
            </Link>
            <Link href="https://www.youtube.com/@ninedev99" target="_blank" className="hover:text-white transition">
              YouTube
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
