import { ModuleSchemaType } from "lib/NNModuleSchema";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type ModuleRequirementsProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
};

const ModuleRequirements = ({ formInstance: form }: ModuleRequirementsProps) => {
  return (
    <FormField
      control={form.control}
      name="requirements"
      render={({ field }) => (
        <FormItem className="my-4">
          <FormLabel className="text-xl">Requirements</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormDescription>List all the Library requirements here. Eg. torch==2.0.1</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ModuleRequirements;