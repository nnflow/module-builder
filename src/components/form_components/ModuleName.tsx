import { ModuleSchemaType } from "lib/NNModuleSchema";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type ModuleNameProps = {
  form: UseFormReturn<ModuleSchemaType>;
};
const ModuleName = ({ form }: ModuleNameProps) => {
  return (
    <FormField
      control={form.control}
      name={"name"}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-xl">Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>Name for the module eg. Linear, Conv2d etc</FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default ModuleName;
