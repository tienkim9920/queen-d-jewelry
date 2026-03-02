'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Hoặc dùng biểu tượng khác nếu bạn thích

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-25 right-9 z-50 p-3 rounded-full bg-[linear-gradient(#6c40c9,#804fa0)] text-white shadow-lg hover:opacity-90 transition-all duration-300 cursor-pointer"
        aria-label="Scroll to top"
        style={{ zIndex: 999 }}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
