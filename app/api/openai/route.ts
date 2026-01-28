import OpenAI from "openai";


// Create the OpenAI client (server-side only)
const client = new OpenAI(   {
 apiKey: process.env.OPENAI_API_KEY,});
// Handle GET request
export async function GET() {
 // Call OpenAI with a simple prompt
 const response = await client.responses.create({
   model: "gpt-5-nano",
   input: "Write a one-sentence about the US  history",
 });


 // Send the AI response back to the frontend
 return Response.json({
   message: response.output_text,
 });
}











