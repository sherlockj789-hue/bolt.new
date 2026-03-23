import { createRequestHandler } from '@remix-run/netlify';
import * as serverBuild from '../build/server';

export const handler = createRequestHandler({
  build: serverBuild,
  mode: process.env.NODE_ENV,
});
