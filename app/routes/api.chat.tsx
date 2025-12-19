import { json, type ActionFunctionArgs } from '@shopify/remix-oxygen';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await request.json();
    const userMessage = body.message?.toLowerCase() || '';

    // Simulated AI Response Logic (FAQ)
    // In a real application, you would call OpenAI or Gemini API here.
    
    let reply = "I'm not sure about that. Could you please contact our support team at support@example.com?";

    if (userMessage.includes('hello') || userMessage.includes('hi')) {
      reply = "Hello! How can I assist you with your shopping today?";
    } else if (userMessage.includes('shipping') || userMessage.includes('delivery')) {
      reply = "We offer free shipping on orders over $50. Standard delivery takes 3-5 business days.";
    } else if (userMessage.includes('return') || userMessage.includes('refund')) {
      reply = "You can return items within 30 days of purchase if they are in original condition. Please visit our Returns page.";
    } else if (userMessage.includes('price') || userMessage.includes('cost')) {
      reply = "Our prices are competitive! Is there a specific product you are interested in?";
    } else if (userMessage.includes('thank')) {
      reply = "You're welcome! Happy shopping!";
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
}
