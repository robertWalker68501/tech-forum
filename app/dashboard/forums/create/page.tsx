import CreateForumForm from '@/components/forms/CreateForumForm';
import PageHeader from '@/components/shared/PageHeader';

const CreateFormPage = () => {
  return (
    <div className='container'>
      <div className='flex flex-col gap-y-4'>
        <PageHeader title='Create Forum' />
        <CreateForumForm />
      </div>
    </div>
  );
};

export default CreateFormPage;
