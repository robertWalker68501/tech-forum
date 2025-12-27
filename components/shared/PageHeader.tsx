import { Item } from '@/components/ui/item';

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Item className='w-full bg-gray-800/30'>
      <h2 className='text-2xl text-orange-500'>{title}</h2>
    </Item>
  );
};

export default PageHeader;
