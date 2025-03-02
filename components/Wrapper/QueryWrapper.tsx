'use client';

import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export default function QueryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
