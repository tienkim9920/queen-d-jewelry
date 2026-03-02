'use client';
import { usePathname } from 'next/navigation';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RouteProgressBar from "@/components/RouteProgressBar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ZaloContactButton from '@/components/ZaloContactButton';

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isLandingPage = pathname.includes('trang-suc');
    return (
        <>
            {!isLandingPage && <Navbar />}
            <RouteProgressBar />
            {children}
            <ScrollToTopButton />
            <ZaloContactButton />
            {!isLandingPage && <Footer />}
        </>
    );
}
