"use client";

import { Field, FieldType } from "@/types/schema";
import { generateId, updateFieldById, deleteFieldById, addNestedFieldById } from "@/lib/builder-utility";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

import { useState } from "react";

interface Props {
  fields: Field[];
  setFields: React.Dispatch<React.SetStateAction<Field[]>>;
  parentId?: string;
}

export default function FieldBuilder({ fields, setFields, parentId }: Props) {
  const handleAddField = (targetId?: string) => {
    const newField: Field = {
      id: generateId(),
      key: "",
      type: "String",
    };

    if (!targetId) {
      setFields([...fields, newField]);
    } else {
      setFields((prev) => addNestedFieldById(prev, targetId, newField));
    }
  };

  const handleUpdateField = (id: string, key: keyof Field, value: any) => {
    setFields((prev) => updateFieldById(prev, id, key, value));
  };

  const handleDeleteField = (id: string) => {
    setFields((prev) => deleteFieldById(prev, id));
  };

  return (
    <>
      {fields.map((field) => (
        <Card key={field.id} className="p-4 mb-2 ml-4 border border-muted">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <Input
              value={field.key}
              onChange={(e) => handleUpdateField(field.id, "key", e.target.value)}
              placeholder="Field Name"
              className="w-full md:w-[200px]"
            />

            <Select
              value={field.type}
              onValueChange={(val: FieldType) => handleUpdateField(field.id, "type", val)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="String">String</SelectItem>
                <SelectItem value="Number">Number</SelectItem>
                <SelectItem value="Nested">Nested</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => handleDeleteField(field.id)}>
              Delete
            </Button>

            {field.type === "Nested" && (
              <Button onClick={() => handleAddField(field.id)} variant="default">
                + Add Nested Field
              </Button>
            )}
          </div>

          {/* Recursive call for nested children */}
          {field.children && (
            <FieldBuilder fields={field.children} setFields={(newChildren) =>
              setFields((prev) =>
                prev.map((f:any) =>
                  f.id === field.id ? { ...f, children: newChildren } : f
                )
              )
            } parentId={field.id} />
          )}
        </Card>
      ))}
    </>
  );
}
