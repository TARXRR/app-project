'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  group: string;
  averageRating: number;
  reviews: Review[];
}

interface Review {
  id: number;
}

export default function AllGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    group: 'default',
  });

  const fetchGames = async () => {
    try {
      const res = await fetch('/api/games');
      const data = await res.json();
      setGames(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching games:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      await fetchGames();
    };
    void load();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      const res = await fetch('/api/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({ title: '', description: '', image: '', group: 'default' });
        setShowForm(false);
        setError(null);
        await fetchGames();
      } else {
        setError(data.details || data.error || 'ไม่สามารถเพิ่มเกมได้');
      }
    } catch (err) {
      console.error('Error creating game:', err);
      setError('เกิดข้อผิดพลาด: ' + String(err));
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return '⭐'.repeat(Math.round(rating));
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-black to-white/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>

      <header className="relative flex items-center justify-between py-8 px-4 z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-red-400 hover:text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-colors">← หน้าแรก</Link>
          <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">เกมทั้งหมด</h1>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg border-2 border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] transition-all"
        >
          {showForm ? 'ยกเลิก' : 'เพิ่มเกม'}
        </button>
      </header>

      <main className="relative container mx-auto px-4 py-16 z-10">
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-8 mb-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-6">เพิ่มเกมใหม่</h2>
            {error && (
              <div className="bg-red-900/50 border-2 border-red-500 rounded-lg p-4 mb-6 text-red-200">
                <p className="font-semibold">❌ เกิดข้อผิดพลาด</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            )}
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="ชื่อเกม"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-red-400 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                name="description"
                placeholder="คำอธิบาย"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-red-400 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="image"
                placeholder="URL รูปภาพ (ไม่บังคับ)"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 border border-red-400 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                name="group"
                placeholder="หมวดหมู่"
                value={formData.group}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 border border-red-400 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-red-600 hover:bg-red-500 disabled:bg-gray-600 text-white py-2 rounded border border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'กำลังสร้าง...' : 'สร้างเกม'}
              </button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-center text-gray-300">กำลังโหลด...</p>
        ) : games.length === 0 ? (
          <p className="text-center text-gray-300">ยังไม่มีเกม คลิก &quot;เพิ่มเกม&quot; เพื่อเริ่มต้น</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <Link key={game.id} href={`/games/${game.id}`}>
                <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:border-white hover:scale-105 transition-all duration-500 cursor-pointer backdrop-blur-sm group h-full">
                  {game.image && (
                    <div className="w-full h-40 bg-gray-800 overflow-hidden relative">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">{game.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{game.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">{renderStars(game.averageRating)}</span>
                        <span className="text-gray-400 text-sm">({game.averageRating.toFixed(1)})</span>
                      </div>
                      <span className="text-gray-400 text-xs bg-gray-800 px-3 py-1 rounded">
                        {game.reviews.length} รีวิว
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
