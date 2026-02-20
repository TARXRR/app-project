export default function Games() {
  const games = [
    { id: 1, title: 'เกม 1', description: 'คำอธิบายเกม 1', rating: 4.5 },
    { id: 2, title: 'เกม 2', description: 'คำอธิบายเกม 2', rating: 3.8 },
    { id: 3, title: 'เกม 3', description: 'คำอธิบายเกม 3', rating: 4.2 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">เกมทั้งหมด</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500">⭐ {game.rating}</span>
                <a href={`/games/${game.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  ดูรายละเอียด
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}