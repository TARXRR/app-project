'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Review {
  id: number;
  rating: number;
  comment: string;
  user: { name: string };
  createdAt: string;
}

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  group: string;
  averageRating: number;
  reviews: Review[];
}

export default function GameDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);
  
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [userName, setUserName] = useState('');
  const [reviewData, setReviewData] = useState({
    rating: 5,
    comment: '',
  });

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const res = await fetch(`/api/games/${id}`);
        const data = await res.json();
        setGame(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching game:', error);
        setLoading(false);
      }
    };
    void fetchGameData();
  }, [id]);

  const fetchGame = async () => {
    try {
      const res = await fetch(`/api/games/${id}`);
      const data = await res.json();
      setGame(data);
    } catch (error) {
      console.error('Error fetching game:', error);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userName.trim()) {
      alert('กรุณากรอกชื่อของคุณ');
      return;
    }

    try {
      // Create user first
      const userRes = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, email: `${userName}@game-review.local` }),
      });
      const user = await userRes.json();

      // Create review
      const reviewRes = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId: id,
          userId: user.id,
          rating: reviewData.rating,
          comment: reviewData.comment,
        }),
      });

      if (reviewRes.ok) {
        setUserName('');
        setReviewData({ rating: 5, comment: '' });
        setShowReviewForm(false);
        fetchGame();
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-300">กำลังโหลด...</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-300">ไม่พบเกม</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-black to-white/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>

      <header className="relative z-10 py-8 px-4">
        <Link href="/games" className="text-red-400 hover:text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-colors">← กลับไปยังเกมทั้งหมด</Link>
      </header>

      <main className="relative container mx-auto px-4 py-16 z-10">
        <div className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-8 backdrop-blur-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {game.image && (
              <div className="md:col-span-1">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={300}
                  height={256}
                  className="w-full h-64 object-cover rounded border border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                />
              </div>
            )}
            <div className={game.image ? 'md:col-span-2' : 'md:col-span-3'}>
              <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">{game.title}</h1>
              <p className="text-gray-300 mb-6 text-lg">{game.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-2xl">{renderStars(Math.round(game.averageRating))}</span>
                  <span className="text-gray-400 text-lg">({game.averageRating.toFixed(1)}/5)</span>
                </div>
                <span className="text-gray-400 bg-gray-800 px-4 py-2 rounded">{game.reviews.length} รีวิว</span>
              </div>
              <span className="inline-block text-gray-300 bg-red-500/20 px-4 py-2 rounded border border-red-400">หมวดหมู่: {game.group}</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg border-2 border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] transition-all"
          >
            {showReviewForm ? 'ยกเลิก' : 'เพิ่มรีวิว'}
          </button>
        </div>

        {showReviewForm && (
          <form
            onSubmit={handleSubmitReview}
            className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-8 mb-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-6">เพิ่มรีวิวใหม่</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">ชื่อของคุณ</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="ระบุชื่อของคุณ"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-red-400 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-white mb-2">คะแนน (1-5)</label>
                <select
                  value={reviewData.rating}
                  onChange={(e) => setReviewData({ ...reviewData, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-800 border border-red-400 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="1">1 ⭐</option>
                  <option value="2">2 ⭐⭐</option>
                  <option value="3">3 ⭐⭐⭐</option>
                  <option value="4">4 ⭐⭐⭐⭐</option>
                  <option value="5">5 ⭐⭐⭐⭐⭐</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">ความเห็น</label>
                <textarea
                  value={reviewData.comment}
                  onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
                  placeholder="แสดงความเห็นของคุณ"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-red-400 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded border border-red-400 shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] transition-all"
              >
                ส่งรีวิว
              </button>
            </div>
          </form>
        )}

        <div>
          <h2 className="text-3xl font-bold text-white mb-6">รีวิวทั้งหมด ({game.reviews.length})</h2>
          {game.reviews.length === 0 ? (
            <p className="text-center text-gray-300">ยังไม่มีรีวิว เป็นคนแรกที่เพิ่มรีวิว!</p>
          ) : (
            <div className="space-y-4">
              {game.reviews.map((review) => (
                <div key={review.id} className="bg-gray-900/80 border-2 border-red-500 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{review.user.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {new Date(review.createdAt).toLocaleDateString('th-TH')}
                      </p>
                    </div>
                    <span className="text-yellow-400 text-lg">{renderStars(review.rating)}</span>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
