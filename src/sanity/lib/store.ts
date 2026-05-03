import * as queryStore from '@sanity/react-loader';

import { client } from '@/sanity/lib/client';
import { readToken } from '../env';

queryStore.setServerClient(client.withConfig({ token: readToken }));

export const { loadQuery } = queryStore;
