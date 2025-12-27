import { Item } from '@/components/ui/item';

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Item className='w-full border border-gray-400/30 bg-gray-200/20 shadow-md dark:bg-gray-800/30 dark:shadow-none'>
      <h2 className='text-2xl text-orange-500'>{title}</h2>
    </Item>
  );
};

export default PageHeader;
