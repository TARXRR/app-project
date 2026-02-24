import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { gameId, userId, rating, comment } = body;

        if (!gameId || !userId || !rating) {
            return NextResponse.json(
                { error: 'gameId, userId, and rating are required' },
                { status: 400 }
            );
        }

        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: 'Rating must be between 1 and 5' },
                { status: 400 }
            );
        }

        const review = await prisma.review.create({
            data: {
                gameId,
                userId,
                rating,
                comment: comment || null,
            },
            include: {
                user: true,
                game: true,
            },
        });

        // Update game's average rating
        const reviews = await prisma.review.findMany({
            where: { gameId },
        });
        const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
        await prisma.game.update({
            where: { id: gameId },
            data: { averageRating },
        });

        return NextResponse.json(review, { status: 201 });
    } catch (error) {
        console.error('Failed to create review:', error);
        return NextResponse.json(
            { error: 'Failed to create review', details: String(error) },
            { status: 500 }
        );
    }
}
