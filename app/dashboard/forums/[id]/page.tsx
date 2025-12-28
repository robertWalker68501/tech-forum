import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import prisma from '@/lib/prisma';

const ForumPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const forum = await prisma.forum.findUnique({
    where: { id },
    include: { posts: true },
  });

  return (
    <div className='container mt-10'>
      <Card>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div>
              <CardTitle className='text-2xl text-orange-500'>
                {forum?.name}
              </CardTitle>
              <CardDescription>{forum?.description}</CardDescription>
            </div>
            <div>
              <p className='text-sm'>Posts: {forum?.posts.length}</p>
              <p className='text-sm'>Likes: 0</p>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          <div>Content</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForumPage;
