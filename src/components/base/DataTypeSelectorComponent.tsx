import React from "react";
import { FieldPath, UseFormReturn } from "react-hook-form";
import { ModuleDataTypes } from "lib/ModuleDataTypes";
import { ModuleSchemaType } from "lib/NNModuleSchema";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui//select";
import { ScrollArea } from "@radix-ui/react-scroll-area";

type DataTypeSelectorComponentProps = {
  form: UseFormReturn<ModuleSchemaType>;
  fieldName: FieldPath<ModuleSchemaType>;
};

const DataTypeSelectorComponent = ({ form, fieldName }: DataTypeSelectorComponentProps) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>Input Data Type</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the datatype for input" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <ScrollArea className="h-[500px]">
                    {Object.values(ModuleDataTypes).map((val, _) => (
                      <SelectItem key={React.useId()} value={val}>
                        {val}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default DataTypeSelectorComponent;
