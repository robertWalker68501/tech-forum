'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupTextarea } from '@/components/ui/input-group';
import { createForum } from '@/lib/actions/forum.actions';
import { createForumFormSchema as schema } from '@/lib/schemas/createForumFormSchema';

const CreateForumForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  async function onSubmit(data: z.infer<typeof schema>) {
    try {
      const result = await createForum(data);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      if (result.success) {
        toast.success('Forum created successfully.');
        router.push('/dashboard/forums');
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
      console.log(error);
    }
  }

  const isPending = form.formState.isSubmitting;

  return (
    <Card className='w-full sm:max-w-md'>
      <CardHeader>
        <CardTitle>Create Forum</CardTitle>
        <CardDescription>
          Complete the form to create a new forum.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id='form-create-forum'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-create-forum-title'>
                    Forum Title
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-create-forum-title'
                    aria-invalid={fieldState.invalid}
                    placeholder="What's new in Next.js 16"
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='description'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-create-forum-description'>
                    Description
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id='form-create-forum-description'
                      placeholder='A short description.'
                      rows={6}
                      className='min-h-24 resize-none'
                      aria-invalid={fieldState.invalid}
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button
            type='button'
            variant='outline'
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button
            type='submit'
            form='form-create-forum'
            disabled={isPending}
          >
            {isPending ? 'Creating...' : 'Submit'}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default CreateForumForm;
