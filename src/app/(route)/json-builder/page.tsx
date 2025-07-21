"use client"
import { FieldRenderer } from '@/components/JsonPreview'
import { Button } from '@/components/ui/button';
import { generateId, addNestedField, updateNestedField, deleteNestedField, generateSchema } from '@/lib/builder-utility';
import { Field } from '@/types/schema';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import React, { useState } from 'react'

const page = () => {
  const [fields, setFields] = useState<Field[]>([]);

  const addField = (parentId?: string) => {
    const newField: Field = {
      id: generateId(),
      key: "",
      type: "String"
    };

    if (!parentId) {
      setFields([...fields, newField]);
    } else {
      setFields(addNestedField(fields, parentId, newField));
    }
  };

  const updateField = (id: string, key: string, value: any) => {
    setFields(updateNestedField(fields, id, key, value));
  };

  const deleteField = (id: string) => {
    setFields(deleteNestedField(fields, id));
  };
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <Tabs defaultValue="builder" className="mt-7">
        <TabsList>
          <TabsTrigger value="builder" className="cursor-pointer">JSON Builder</TabsTrigger>
          <TabsTrigger value="json" className="cursor-pointer">JSON Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="builder">
          <div className="mb-4">
            <Button onClick={() => addField()} className="bg-foreground text-background cursor-pointer">
              + Add Field
            </Button>
          </div>
          <FieldRenderer
            fields={fields}
            updateField={updateField}
            deleteField={deleteField}
            addField={addField}
          />
        </TabsContent>

        <TabsContent value="json">
          <pre className="bg-sidebar p-4 rounded overflow-auto text-sm">
            {JSON.stringify(generateSchema(fields), null, 2)}
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default page
