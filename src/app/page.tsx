"use client";

import { useState } from "react";
import FieldBuilder from "@/components/FileBuilder";
import JsonPreview from "@/components/JsonPreview";
import { Field } from "@/types/schema";
import { generateId } from "@/lib/builder-utility";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [fields, setFields] = useState<Field[]>([]);

  const handleAddField = () => {
    const newField: Field = {
      id: generateId(),
      key: "",
      type: "String",
    };
    setFields([...fields, newField]);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Tabs defaultValue="builder">
        <TabsList>
          <TabsTrigger value="builder">Builder</TabsTrigger>
          <TabsTrigger value="json">JSON Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="builder">
          <div className="mt-4 mb-4">
            <Button onClick={handleAddField}>+ Add Field</Button>
          </div>

          <FieldBuilder fields={fields} setFields={setFields} />
        </TabsContent>

        <TabsContent value="json">
          <JsonPreview fields={fields} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
