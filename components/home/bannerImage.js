import Image from "next/image";

export default function BannerImage() {
  return (
    <div className="flex-1 relative">
      {/* image principale */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
        <Image
          src="/logo/logo.jpg"
          alt="Logo CYBELL-SANTE"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-200 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
    </div>
  );
}