import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image
              src="/bpeai_logo.png"
              alt="BPE AI Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-lg font-semibold text-white">BPE AI</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 BPE AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
