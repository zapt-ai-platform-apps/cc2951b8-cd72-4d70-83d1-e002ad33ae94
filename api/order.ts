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

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }

    const { customerLocation, shopId, orderItems, paymentOption } = req.body;
    console.log('Received order:', req.body);

    // Simulated order processing logic
    const deliveryFee = 5.0;
    const platformFee = 2.0;
    let total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    total += deliveryFee + platformFee;

    const matchedRiderId = 'rider_12345';

    const responsePayload = {
      success: true,
      matchedRiderId,
      deliveryFee,
      platformFee,
      total,
    };

    console.log('Order processed successfully:', responsePayload);
    res.status(200).json(responsePayload);
  } catch (error) {
    console.error('Error processing order:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}