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
      </main>
    </div>
  );
}
