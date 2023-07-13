import { ModuleSchemaType } from "@/lib/NNModuleSchema";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ModuleREADMEProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
};

const ModuleREADME = ({ formInstance }: ModuleREADMEProps) => {
  return (
      <FormField
        control={formInstance.control}
        name="readme"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl">README</FormLabel>
            <FormControl>
              <div className="grid grid-rows-1 grid-cols-2 space-x-2">
                <Textarea {...field} className="min-h-[400px]" />
                <ReactMarkdown
                  className="p-2 prose border-2 rounded"
                  children={field.value!}
                  remarkPlugins={[remarkGfm]}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
  );
};

export default ModuleREADME;
