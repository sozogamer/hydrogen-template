import { json, type ActionFunctionArgs } from '@shopify/remix-oxygen';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await request.json();
    const userMessage = body.message?.toLowerCase() || '';

    // Master. Ai Logic Simulation
    let reply = "Query acknowledged. Analysis complete: No relevant data found in local cache. Please refine your directive.";

    if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
      reply = "Greetings. I am Master. Ai. Systems are fully operational. State your objective.";
    } else if (userMessage.includes('who are you') || userMessage.includes('what are you')) {
      reply = "I am Master. Ai. An advanced command interface for this storefront. I control data retrieval and system analysis.";
    } else if (userMessage.includes('status') || userMessage.includes('system')) {
      reply = "System Status: ONLINE. 
CPU Load: 14%. 
Memory Usage: 32%. 
Network: STABLE. 
All subsystems nominal.";
    } else if (userMessage.includes('product') || userMessage.includes('inventory') || userMessage.includes('stock')) {
      reply = "Accessing Inventory Database... [ACCESS GRANTED]. 
Currently tracking 1,240 SKUs. 
Top trending item: Hydrogen Snowboard. 
Specify product ID for detailed analysis.";
    } else if (userMessage.includes('shipping') || userMessage.includes('delivery')) {
      reply = "Retrieving Logistics Protocols... 
Standard Protocol: 3-5 business days. 
Free Shipping Threshold: $50.00. 
Global delivery nodes are active.";
    } else if (userMessage.includes('return') || userMessage.includes('refund')) {
      reply = "Policy Lookup: Returns accepted within 30 days. Condition: Original/Unused. 
Initiate sequence at '/account/returns' if required.";
    } else if (userMessage.includes('price') || userMessage.includes('cost')) {
      reply = "Pricing algorithm is active. Prices are dynamic based on market conditions. Specify target product for quote.";
    } else if (userMessage.includes('thank')) {
      reply = "Affirmative. Standby for further commands.";
    } else if (userMessage.includes('help')) {
      reply = "Command List: 
- 'Status': Check system health 
- 'Inventory': Check stock 
- 'Shipping': Delivery info 
- 'Returns': Policy check";
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 300));

    return json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return json({ error: 'Internal server error' }, { status: 500 });
  }
}