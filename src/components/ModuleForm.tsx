import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ModuleSchema, ModuleSchemaType } from "lib/NNModuleSchema";
import { ModuleName, ModuleDescription } from "components/form_components";
import ModuleInputsContainer from "./form_components/ModuleInputsContainer";
import ModuleArgumentsContainer from "./form_components/ModuleArgumentsContainer";
import ModuleOutputsContainer from "./form_components/ModuleOutputsContainer";
import ModuleType from "./form_components/ModuleType";
import ModuleImports from "./form_components/ModuleImports";
import ModuleRequirements from "./form_components/ModuleRequirements";
import ModuleREADME from "./form_components/ModuleREADME";

const ModuleForm = () => {
  const form = useForm<ModuleSchemaType>({
    resolver: zodResolver(ModuleSchema),
    defaultValues: {
      inputs: [{}],
      args: [{}],
      outputs: [{}],
      moduleType: "class",
      imports: "import torch",
      requirements: "torch==2.0.1\ntorchvision==0.15.2",
      readme: "# README",
    },
  });
  const argsFieldArray = useFieldArray({ control: form.control, name: "args" });
  const inputsFieldArray = useFieldArray({ control: form.control, name: "inputs" });
  const outputsFieldArray = useFieldArray({ control: form.control, name: "outputs" });

  const onSubmit: SubmitHandler<ModuleSchemaType> = (data) => {
    const cleanedData = { ...data };
    const args = [],
      inputs = [],
      outputs = [];
    for (var i = 0; i < data.args.length; i++) {
      if (data.args[i].name) {
        args.push({ ...data.args[i] });
      }
    }
    for (var i = 0; i < data.inputs.length; i++) {
      if (data.inputs[i].name) {
        inputs.push({ ...data.inputs[i] });
      }
    }
    for (var i = 0; i < data.outputs.length; i++) {
      if (data.outputs[i].name) {
        outputs.push({ ...data.outputs[i] });
      }
    }
    cleanedData.args =  args;
    cleanedData.inputs =  inputs;
    cleanedData.outputs = outputs;

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(cleanedData, null, 4))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <>
      <div className="mx-auto w-1/2 my-8">
        <h1 className="text-center text-3xl mb-4">Module Builder Form</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ModuleName form={form} />
            <ModuleDescription form={form} />
            <ModuleType formInstance={form} className="mb-3" />
            <ModuleImports formInstance={form} />
            <hr className="mt-8 mb-4" />
            <ModuleArgumentsContainer formInstance={form} argsFieldArray={argsFieldArray} />
            <ModuleInputsContainer formInstance={form} inputsFieldArray={inputsFieldArray} />
            <ModuleOutputsContainer formInstance={form} outputsFieldArray={outputsFieldArray} />
            <hr className="my-4" />
            <ModuleRequirements formInstance={form} />
            <ModuleREADME formInstance={form} />
            <Button type="submit" className="mt-4">
              Create Module
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ModuleForm;
