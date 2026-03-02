import { APP_URL } from '@/constans/common';
import type { Metadata } from 'next';

const PATH = "/";

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
    case "en":
      return {
        title: "Nineweb Solution - SEO Website & Landing Page Design",
        description:
          "Nineweb Solution specializes in SEO-optimized websites, high-converting landing pages, and ecommerce solutions for businesses. Comprehensive website solutions that drive sustainable growth and maximize revenue.",
        keywords:
          "website design, SEO website, landing page optimization, ecommerce design, business website solutions, Nineweb Solution",
        alternates,
        openGraph: {
          title: "Nineweb Solution - SEO Website & Growth Solutions",
          description:
            "Professional website design, high-performance landing pages, and ecommerce systems optimized for SEO and digital growth.",
          url: `${APP_URL}/en${PATH}`,
          type: "website",
          images: [
            {
              url: `${APP_URL}/img/queen-d-jewelry-share.png`,
              width: 1200,
              height: 630,
              alt: "Nineweb Solution - SEO Website & Landing Page",
            },
          ],
        },
      };

    case "ko":
      return {
        title: "Nineweb Solution - SEO 최적화 웹사이트 및 랜딩페이지 제작",
        description:
          "Nineweb Solution은 기업을 위한 SEO 최적화 웹사이트, 전환율 높은 랜딩페이지, 이커머스 구축을 전문으로 합니다. 지속 가능한 성장과 매출 극대화를 지원합니다.",
        keywords:
          "웹사이트 제작, SEO 웹사이트, 랜딩페이지 최적화, 이커머스 구축, 기업 웹 솔루션, Nineweb Solution",
        alternates,
        openGraph: {
          title: "Nineweb Solution - SEO 웹사이트 및 성장 솔루션",
          description:
            "SEO 최적화, 고성능 랜딩페이지 및 이커머스 시스템 구축으로 디지털 성장과 전환율 향상을 지원합니다.",
          url: `${APP_URL}/ko${PATH}`,
          type: "website",
          images: [
            {
              url: `${APP_URL}/img/queen-d-jewelry-share.png`,
              width: 1200,
              height: 630,
              alt: "Nineweb Solution - SEO 웹사이트 제작",
            },
          ],
        },
      };

    default:
      return {
        title:
          "Nineweb Solution - Thiết Kế Website & Landing Page Chuẩn SEO",
        description:
          "Nineweb Solution chuyên thiết kế website chuẩn SEO, Landing Page tối ưu chuyển đổi và Ecommerce cho cá nhân, doanh nghiệp. Giải pháp website toàn diện giúp tăng trưởng bền vững và tối đa doanh thu.",
        keywords:
          "thiết kế website, website chuẩn SEO, landing page chuyển đổi, thiết kế ecommerce, giải pháp website doanh nghiệp, Nineweb Solution",
        alternates,
        openGraph: {
          title:
            "Nineweb Solution - Giải Pháp Website Chuẩn SEO & Tăng Trưởng",
          description:
            "Cung cấp giải pháp thiết kế website doanh nghiệp, landing page bán hàng và ecommerce tối ưu SEO, hiệu suất cao, hỗ trợ tăng trưởng và chuyển đổi số toàn diện.",
          url: `${APP_URL}/vi${PATH}`,
          type: "website",
          images: [
            {
              url: `${APP_URL}/img/queen-d-jewelry-share.png`,
              width: 1200,
              height: 630,
              alt: "Nineweb Solution - Thiết kế Website & Landing Page Chuẩn SEO",
            },
          ],
        },
      };
  }
}

export function generateStaticParams() {
  return [{ lang: 'vi' }, { lang: 'en' }, { lang: 'ko' }];
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}