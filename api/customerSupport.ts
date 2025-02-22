import { initializeZapt } from '@zapt/zapt-js';
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID,
    },
  },
});

const APP_ID = process.env.VITE_PUBLIC_APP_ID;
if (!APP_ID) {
  throw new Error('Missing VITE_PUBLIC_APP_ID environment variable');
}
const { customerSupport } = initializeZapt(APP_ID);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ error: 'Missing email' });
      return;
    }
    const zaptSecretKey = process.env.ZAPT_SECRET_KEY;
    if (!zaptSecretKey) {
      throw new Error('Missing ZAPT_SECRET_KEY environment variable');
    }
    const supportResponse = await customerSupport(email, zaptSecretKey);
    console.log('Customer support response:', supportResponse);
    res.status(200).json(supportResponse);
  } catch (error) {
    console.error('Error in customerSupport endpoint:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: error.message });
  }
}