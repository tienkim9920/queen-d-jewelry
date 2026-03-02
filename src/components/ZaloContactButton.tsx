// components/ZaloContactButton.tsx

import Image from "next/image";
import Link from "next/link";

const ZaloContactButton = () => {
  return (
    <div
      className="fixed bottom-7 right-7 z-[999]"
    >
      <div
        className="relative w-[64px] h-[64px] rounded-full 
  flex justify-center items-center
  bg-[linear-gradient(#6c40c9,#804fa0)]
  animate-pulse-glow
  transition-all duration-300"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(#6c40c9,#804fa0)] blur-xl opacity-40"></div>

        <Link
          href="https://zalo.me/0763557366"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex"
        >
          <Image
            src="/image/zalo.png"
            alt="Zalo liên hệ Nineweb Solution"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
};

export default ZaloContactButton;