interface ReviewPageProps {
  params: {
    gameId: string;
  };
}

export default function Review({ params }: ReviewPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-white neon-red">เขียนรีวิวสำหรับเกม {params.gameId}</h1>
        <div className="bg-red-50 rounded-lg shadow-md p-6 neon-white">
          <form>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-red-700 text-sm font-bold mb-2">
                เรตติ้ง
              </label>
              <select
                id="rating"
                className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                <option value="4">⭐⭐⭐⭐ (4)</option>
                <option value="3">⭐⭐⭐ (3)</option>
                <option value="2">⭐⭐ (2)</option>
                <option value="1">⭐ (1)</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="comment" className="block text-red-700 text-sm font-bold mb-2">
                ความคิดเห็น
              </label>
              <textarea
                id="comment"
                rows={4}
                className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="เขียนความคิดเห็นของคุณ..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 neon-red"
            >
              ส่งรีวิว
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}