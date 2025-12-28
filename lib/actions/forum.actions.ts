'use server';

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

import prisma from '@/lib/prisma';
import { createForumFormSchema } from '@/lib/schemas/createForumFormSchema';

export async function createForum(data: z.infer<typeof createForumFormSchema>) {
  const { userId } = await auth();
  if (!userId) {
    return {
      error: 'You must be logged in to create a forum.',
    };
  }

  const validatedFields = createForumFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: 'Invalid fields',
    };
  }

  const { name, description } = validatedFields.data;

  try {
    const newForum = await prisma.forum.create({
      data: {
        name,
        description,
      },
    });

    revalidatePath('/dashboard/forums');
    return { success: true, data: newForum };
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: 'A forum with this name already exists.' };
    }

    return { error: 'Failed to create forum.' };
  }
}
