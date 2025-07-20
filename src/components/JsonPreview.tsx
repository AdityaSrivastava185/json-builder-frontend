// app/components/schema-builder/FieldRenderer.tsx
import { Field } from "@/types/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

interface Props {
  fields: Field[];
  updateField: (id: string, key: string, value: any) => void;
  deleteField: (id: string) => void;
  addField: (parentId?: string) => void;
  parentId?: string;
}

export const FieldRenderer = ({ fields, updateField, deleteField, addField }: Props) => {
  return (
    <>
      {fields.map((field) => (
        <Card key={field.id} className="p-4 mb-2 ml-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <Input
              value={field.key}
              onChange={(e) => updateField(field.id, "key", e.target.value)}
              placeholder="Field Name"
              className="w-full md:w-[200px]"
            />

            <Select
              value={field.type}
              onValueChange={(val) => updateField(field.id, "type", val)}
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

            <Button variant="outline" onClick={() => deleteField(field.id)}>
              Delete
            </Button>

            {field.type === "Nested" && (
              <Button onClick={() => addField(field.id)} variant="default">
                Add Nested Field
              </Button>
            )}
          </div>

          {field.children && field.children.length > 0 && (
            <FieldRenderer
              fields={field.children}
              updateField={updateField}
              deleteField={deleteField}
              addField={addField}
              parentId={field.id}
            />
          )}
        </Card>
      ))}
    </>
  );
};
