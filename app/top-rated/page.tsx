import Link from 'next/link';

export default function TopRated() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-black to-white/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>
      
      <header className="relative flex items-center justify-center py-8 z-10">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">เกมอันดับสูงสุด</h1>
        <Link href="/" className="absolute left-4 top-8 text-red-400 hover:text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-colors">← กลับ</Link>
      </header>
      <main className="relative container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm hover:border-white transition-all duration-300">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">The Legend of Zelda: Breath of the Wild</h3>
            <div className="flex items-center mb-3">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2">(5/5)</span>
            </div>
            <p className="text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">โลกเปิดที่กว้างใหญ่และการสำรวจที่เสรี เกมที่ดีที่สุดตลอดกาล</p>
          </div>
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm hover:border-white transition-all duration-300">
            <div className="text-6xl mb-4">🥈</div>
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">God of War Ragnarök</h3>
            <div className="flex items-center mb-3">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2">(5/5)</span>
            </div>
            <p className="text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">เรื่องราวครอบครัวและการต่อสู้ที่ยอดเยี่ยม</p>
          </div>
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm hover:border-white transition-all duration-300">
            <div className="text-6xl mb-4">🥉</div>
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Elden Ring</h3>
            <div className="flex items-center mb-3">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2">(5/5)</span>
            </div>
            <p className="text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">โลกที่กว้างใหญ่และการต่อสู้ที่ท้าทาย</p>
          </div>
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm hover:border-white transition-all duration-300">
            <div className="text-4xl mb-4">4</div>
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Spider-Man 2</h3>
            <div className="flex items-center mb-3">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2">(5/5)</span>
            </div>
            <p className="text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">การผจญภัยในเมืองและการต่อสู้ที่สมจริง</p>
          </div>
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm hover:border-white transition-all duration-300">
            <div className="text-4xl mb-4">5</div>
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Baldur's Gate 3</h3>
            <div className="flex items-center mb-3">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2">(5/5)</span>
            </div>
            <p className="text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">RPG ที่สมบูรณ์แบบด้วยการเลือกที่หลากหลาย</p>
          </div>
        </div>
      </main>
    </div>
  );
}