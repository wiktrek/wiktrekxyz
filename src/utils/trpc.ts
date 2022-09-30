import { createReactQueryHooks } from '@trpc/react';

import type { AppRouter } from '../backend/router/index';
export const trpc = createReactQueryHooks<AppRouter>();
