import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(existingUser);
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
            },
        });

        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        console.error('Failed to create user:', error);
        return NextResponse.json(
            { error: 'Failed to create user', details: String(error) },
            { status: 500 }
        );
    }
}
