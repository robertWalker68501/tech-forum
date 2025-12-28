'use client';

import { SignedIn, UserButton, useUser } from '@clerk/nextjs';

import PageHeader from '@/components/shared/PageHeader';

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  // Handle loading state
  if (!isLoaded) return <div>Loading...</div>;

  // Protect the page from unauthenticated users
  if (!isSignedIn) return <div>Sign in to view this page</div>;

  return (
    <div className='container'>
      <PageHeader title={`${user.firstName}'s dashboard`} />
    </div>
  );
};
export default Dashboard;
