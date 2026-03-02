// components/RouteProgressBar.tsx
'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/nprogress-custom.css';

NProgress.configure({ showSpinner: false });

export default function RouteProgressBar() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      NProgress.start();
      prevPath.current = pathname;

      // Simulate delay (nextjs routing doesn't emit events)
      const timeout = setTimeout(() => {
        NProgress.done();
      }, 300); // adjust if needed

      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return null;
}
