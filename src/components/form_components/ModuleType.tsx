import { ModuleSchemaType } from "lib/NNModuleSchema";
import { UseFormReturn } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type ModuleTypeProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
  className?: string;
};

const ModuleType = ({ formInstance, className }: ModuleTypeProps) => {
  return (
    <div className={className}>
      <FormField
        control={formInstance.control}
        name="moduleType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl">Select Module Type</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                <FormItem className="flex items-center space-x-3 space-y-0 mt-2">
                  <FormControl>
                    <RadioGroupItem value="class" />
                  </FormControl>
                  <FormLabel className="font-normal">Class</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="function" />
                  </FormControl>
                  <FormLabel className="font-normal">Function</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ModuleType;
