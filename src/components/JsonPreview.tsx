"use client";

import { Field } from "@/types/schema";
import { buildJsonSchema } from "@/lib/builder-utility";

interface JsonPreviewProps {
  fields: Field[];
}

export default function JsonPreview({ fields }: JsonPreviewProps) {
  const schema = buildJsonSchema(fields);

  return (
    <pre className="bg-card p-4 rounded overflow-auto text-sm mt-4">
      {JSON.stringify(schema, null, 2)}
    </pre>
  );
}
