'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { Suspense } from 'react';

export default function Service() {
  const params = useParams<{ id: string }>();

  //access the client
  const queryClient = useQueryClient();

  //queries
  const { data, isLoading, isFetching, isPending, error } = useQuery({
    queryKey: ['albums'],
    queryFn: async () => {
      //to test suspense
      await new Promise((resolve) => setTimeout(resolve, 5500));
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
      );
      
      return await response.json();
    },
  });

  // if (isPending) {
  //   return 'Loading...';
  // }

  if (error) {
    return 'Error loading data.' + error.message;
  }

  return (
    <div className="flex flex-col gap-2">
      <Link href={'/services'}> go back to Services</Link>
      <h1>Service {params.id} </h1>
      <Suspense fallback={<div>Loading Albums...</div>}>

      {data?.map((item: { id: number; userId: number; title: string }) => {
        return (
          <div key={item.id} className="flex flex-col gap-2 ">
            <span>ID : {item.id}</span>
            <span>User id : {item.userId}</span>
            <span>Title : {item.title}</span>
          </div>
        );
      })}
      </Suspense>
    </div>
  );
}
