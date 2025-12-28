import Link from 'next/link';

import PageHeader from '@/components/shared/PageHeader';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import prisma from '@/lib/prisma';

const ForumsPage = async () => {
  const forums = await prisma.forum.findMany();

  return (
    <div className='container'>
      <PageHeader title='Forums'>
        <div className=''>
          <Link
            href='/dashboard/forums/create'
            className={buttonVariants({ variant: 'secondary' })}
          >
            Create Forum
          </Link>
        </div>
      </PageHeader>

      <div className='mt-4 flex flex-col gap-y-4'>
        {forums.map((forum) => (
          <Card key={forum.id}>
            <CardHeader>
              <CardTitle>{forum.name}</CardTitle>
              <CardDescription>{forum.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ForumsPage;
