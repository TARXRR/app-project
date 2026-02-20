interface GamePageProps {
  params: {
    id: string;
  };
}

export default function GameDetail({ params }: GamePageProps) {
  const game = {
    id: params.id,
    title: `เกม ${params.id}`,
    description: `คำอธิบายละเอียดของเกม ${params.id}`,
    rating: 4.5,
    reviews: [
      { user: 'ผู้ใช้ 1', comment: 'เกมดีมาก!', rating: 5 },
      { user: 'ผู้ใช้ 2', comment: 'สนุกดี', rating: 4 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
        <p className="text-gray-600 mb-6">{game.description}</p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">ข้อมูลเกม</h2>
          <p>เรตติ้งเฉลี่ย: ⭐ {game.rating}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">รีวิว</h2>
          {game.reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{review.user}</span>
                <span className="text-yellow-500">⭐ {review.rating}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
          <a href={`/reviews/${game.id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            เขียนรีวิว
          </a>
        </div>
      </div>
    </div>
  );
}