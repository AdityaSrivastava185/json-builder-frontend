import JsonSchemaBuilder from "@/components/FileBuilder";

export default function HomePage() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">JSON Schema Builder</h1>
      <JsonSchemaBuilder />
    </main>
  );
}