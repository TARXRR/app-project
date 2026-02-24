import Link from 'next/link';

export default function Search() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-black to-white/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>
      
      <header className="relative flex items-center justify-center py-8 z-10">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">ค้นหาเกม</h1>
        <Link href="/" className="absolute left-4 top-8 text-red-400 hover:text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-colors">← กลับ</Link>
      </header>
      <main className="relative container mx-auto px-4 py-16 z-10">
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="ค้นหาเกม..."
            className="w-full px-4 py-3 bg-gray-900/80 border-2 border-red-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-white drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
          />
          <button className="mt-4 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-500 border-2 border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] transition-all duration-300">ค้นหา</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-4 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-2">Cyberpunk 2077</h4>
            <p className="text-gray-300 text-sm">เกม RPG แนวไซเบอร์พังก์ในเมืองอนาคต</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2 text-sm">(4.2/5)</span>
            </div>
          </div>
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-4 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-2">The Witcher 3: Wild Hunt</h4>
            <p className="text-gray-300 text-sm">เกม RPG แฟนตาซีที่สมบูรณ์แบบ</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2 text-sm">(4.8/5)</span>
            </div>
          </div>
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-4 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-2">Red Dead Redemption 2</h4>
            <p className="text-gray-300 text-sm">เกมผจญภัยในโลกเปิดตะวันตก</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2 text-sm">(4.7/5)</span>
            </div>
          </div>
          <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-4 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-2">Grand Theft Auto V</h4>
            <p className="text-gray-300 text-sm">เกมแอ็กชันผจญภัยในเมือง</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 ml-2 text-sm">(4.5/5)</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}