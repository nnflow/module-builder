import { ModuleSchemaType } from "lib/NNModuleSchema";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type ModuleDescriptionProps = {
  form: UseFormReturn<ModuleSchemaType>;
};

const ModuleDescription = ({ form }: ModuleDescriptionProps) => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem className="my-4">
          <FormLabel className="text-xl">Description</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormDescription>Short Description for the module. If you want to provide extra details please use documentation field</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ModuleDescription;
