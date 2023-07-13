import { ModuleSchemaType } from "lib/NNModuleSchema";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type ModuleImportsProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
};

const ModuleImports = ({ formInstance: form }: ModuleImportsProps) => {
  return (
    <FormField
      control={form.control}
      name="imports"
      render={({ field }) => (
        <FormItem className="my-4">
          <FormLabel className="text-xl">Imports</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormDescription>List all the Library imports here. Eg. import torch</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ModuleImports;