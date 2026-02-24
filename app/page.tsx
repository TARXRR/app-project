<<<<<<< HEAD
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon background effects */}
      <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-black to-white/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>
      
      {/* Floating particles for fun */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-float opacity-70"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
      
      <header className="relative flex items-center justify-center py-8 z-10">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">
          รีวิวเกมของฉัน
        </h1>
      </header>
      <main className="relative container mx-auto px-4 py-16 z-10">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-red-400 mb-4 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] animate-bounce">
            ยินดีต้อนรับสู่รีวิวเกม!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            ค้นพบเกมล่าสุด อ่านรีวิวที่ซื่อสัตย์ และหาเกมโปรดเกมต่อไปของคุณ
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/reviews" className="bg-gray-900/80 border-2 border-red-500 rounded-lg shadow-lg p-6 text-center hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:border-white hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer backdrop-blur-sm group">
            <div className="w-20 h-20 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:animate-glow-pulse">
              <span className="text-3xl group-hover:animate-bounce">🎮</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:text-red-300 transition-colors">รีวิวล่าสุด</h3>
            <p className="text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] group-hover:text-white transition-colors">ดูรีวิวเกมใหม่ล่าสุดจากชุมชนของเรา</p>
          </Link>
          <Link href="/top-rated" className="bg-gray-900/80 border-2 border-red-500 rounded-lg shadow-lg p-6 text-center hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:border-white hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer backdrop-blur-sm group">
            <div className="w-20 h-20 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:animate-glow-pulse">
              <span className="text-3xl group-hover:animate-spin">⭐</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:text-red-300 transition-colors">อันดับสูงสุด</h3>
            <p className="text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] group-hover:text-white transition-colors">สำรวจเกมที่มีคะแนนสูงสุดตลอดกาล</p>
          </Link>
          <Link href="/games" className="bg-gray-900/80 border-2 border-red-500 rounded-lg shadow-lg p-6 text-center hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:border-white hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer backdrop-blur-sm group">
            <div className="w-20 h-20 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:animate-glow-pulse">
              <span className="text-3xl group-hover:animate-pulse">🔍</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:text-red-300 transition-colors">ค้นหาเกม</h3>
            <p className="text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] group-hover:text-white transition-colors">ค้นหาเกมโปรดของคุณได้อย่างง่ายดาย</p>
          </Link>
        </section>
=======
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">My Game Review</h1>
          <nav className="mt-4">
            <a href="/login" className="mr-4 text-blue-500 hover:underline">เข้าสู่ระบบ</a>
            <a href="/register" className="mr-4 text-blue-500 hover:underline">สมัครสมาชิก</a>
            <a href="/games" className="text-blue-500 hover:underline">เกมทั้งหมด</a>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">ยินดีต้อนรับสู่แอปรีวิวเกม</h2>
        <p className="text-center text-gray-600">
          ค้นหาและรีวิวเกมที่คุณชื่นชอบ
        </p>
>>>>>>> 0b11e4e175a96f18405a55b929cb0d2f7a81cdf7
      </main>
    </div>
  );
}
