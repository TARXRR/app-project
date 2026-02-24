import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const games = await prisma.game.findMany({
      include: {
        reviews: true,
      },
    });
    return NextResponse.json(games);
  } catch (error) {
    console.error('Failed to fetch games:', error);
    return NextResponse.json(
      { error: 'Failed to fetch games', details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received body:', body);
    
    const { title, description, image, group } = body;

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    console.log('Creating game with:', { title, description, image, group });

    const game = await prisma.game.create({
      data: {
        title,
        description: description || null,
        image: image || null,
        group: group || 'default',
      },
    });

    console.log('Game created:', game);
    return NextResponse.json(game, { status: 201 });
  } catch (error) {
    console.error('Failed to create game:', error);
    return NextResponse.json(
      { error: 'Failed to create game', details: String(error) },
      { status: 500 }
    );
  }
}
