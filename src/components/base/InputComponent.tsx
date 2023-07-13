import { FieldPath, UseFormReturn } from "react-hook-form";
import { ModuleSchemaType } from "@/lib/NNModuleSchema";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type InputComponentProps = {
  form: UseFormReturn<ModuleSchemaType>;
  fieldName: FieldPath<ModuleSchemaType>;
  label: string;
  description?: string;
};

const InputComponent = ({ form, fieldName, label, description }: InputComponentProps) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            {description && <FormDescription>({description})</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default InputComponent;
