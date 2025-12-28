import { WebhookEvent, verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const evt = (await verifyWebhook(req)) as WebhookEvent;

    const { id } = evt.data;
    const eventType = evt.type;

    if (!id) {
      return new Response('Error: Missing user ID', { status: 400 });
    }

    if (eventType === 'user.created') {
      const { email_addresses, first_name, last_name } = evt.data;

      const email = email_addresses[0].email_address;
      const name = `${first_name || ''} ${last_name || ''}`.trim();

      await prisma.user.create({
        data: {
          id: id as string,
          email,
          name: name || null,
        },
      });
    }

    if (eventType === 'user.updated') {
      const { email_addresses, first_name, last_name } = evt.data;

      const email = email_addresses[0].email_address;
      const name = `${first_name || ''} ${last_name || ''}`.trim();

      await prisma.user.update({
        where: { id: id as string },
        data: {
          email,
          name: name || null,
        },
      });
    }

    if (eventType === 'user.deleted') {
      await prisma.user.delete({
        where: { id: id as string },
      });
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }
}
