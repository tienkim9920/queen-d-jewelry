import { APP_URL, FAVICON } from '@/constans/common';
import type { Metadata } from 'next';

const PATH = "/trang-suc/admin";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;

  const alternates = {
    canonical: `${APP_URL}/${lang}${PATH}`,
    languages: {
      vi: `${APP_URL}/vi${PATH}`,
      en: `${APP_URL}/en${PATH}`,
      ko: `${APP_URL}/ko${PATH}`,
    },
  };

  switch (lang) {
    /* ======================= ENGLISH ======================= */
    case "en":
      return {
        title: "QUEEN D JEWELLERY Admin | Jewelry Management System",
        description:
          "Administrative dashboard for managing products, orders, customers, and inventory of QUEEN D JEWELLERY. Secure access and real-time system control.",
        keywords:
          "Queen D Jewellery admin, jewelry management system, admin dashboard, product management, order management, inventory management",
        alternates,
        openGraph: {
          title: "QUEEN D JEWELLERY Admin Dashboard",
          description:
            "Internal administration system for managing jewelry products, orders, customers, and business operations.",
          url: `${APP_URL}/en${PATH}`,
          type: "website",
          images: [
            {
              url: FAVICON,
              width: 294,
              height: 294,
              alt: "QUEEN D JEWELLERY Admin Dashboard",
            },
          ],
          siteName: "QUEEN D JEWELLERY Admin",
        },
      };

    /* ======================= KOREAN ======================= */
    case "ko":
      return {
        title: "QUEEN D JEWELLERY 관리자 | 주얼리 관리 시스템",
        description:
          "QUEEN D JEWELLERY 제품, 주문, 고객 및 재고를 관리하는 관리자 대시보드입니다. 안전한 접근과 실시간 시스템 관리 기능을 제공합니다.",
        keywords:
          "퀸디 주얼리 관리자, 주얼리 관리 시스템, 관리자 페이지, 주문 관리, 재고 관리",
        alternates,
        openGraph: {
          title: "QUEEN D JEWELLERY 관리자 대시보드",
          description:
            "주얼리 제품, 주문 및 비즈니스 운영을 관리하는 내부 관리자 시스템.",
          url: `${APP_URL}/ko${PATH}`,
          type: "website",
          images: [
            {
              url: FAVICON,
              width: 294,
              height: 294,
              alt: "QUEEN D JEWELLERY 관리자 시스템",
            },
          ],
          siteName: "QUEEN D JEWELLERY Admin",
        },
      };

    /* ======================= VIETNAMESE ======================= */
    default:
      return {
        title: "QUEEN D JEWELLERY Admin | Hệ Thống Quản Lý Trang Sức",
        description:
          "Hệ thống quản trị nội bộ của QUEEN D JEWELLERY dùng để quản lý sản phẩm, đơn hàng, khách hàng và tồn kho. Bảo mật cao, vận hành ổn định.",
        keywords:
          "Queen D Jewellery admin, quản lý trang sức, hệ thống quản trị, quản lý đơn hàng, quản lý tồn kho, dashboard admin",
        alternates,
        openGraph: {
          title: "QUEEN D JEWELLERY | Hệ Thống Quản Trị",
          description:
            "Trang quản lý nội bộ dành cho quản trị viên QUEEN D JEWELLERY.",
          url: `${APP_URL}/vi${PATH}`,
          type: "website",
          images: [
            {
              url: FAVICON,
              width: 294,
              height: 294,
              alt: "QUEEN D JEWELLERY Admin Dashboard",
            },
          ],
          siteName: "QUEEN D JEWELLERY Admin",
        },
      };
  }
}

export function generateStaticParams() {
  return [{ lang: "vi" }, { lang: "en" }, { lang: "ko" }];
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
