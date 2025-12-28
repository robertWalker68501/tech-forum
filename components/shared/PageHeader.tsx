import { Item } from '@/components/ui/item';

const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <Item className='w-full border border-gray-400/30 bg-gray-200/20 shadow-md dark:bg-gray-800/30 dark:shadow-none'>
      <div className='flex w-full items-center justify-between'>
        <h2 className='text-2xl text-orange-500'>{title}</h2>
        <div>{children}</div>
      </div>
    </Item>
  );
};

export default PageHeader;
