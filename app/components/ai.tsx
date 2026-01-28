

export default async function Home() {
    // Call our own API route
    const res = await fetch("http://localhost:3001/api/openai");
    
    
    const data = await res.json();
     return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-xl font-medium">
          {data.message}
        </p>
      </main>
    );
  }
 
 