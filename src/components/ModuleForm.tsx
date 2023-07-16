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
import ModulePreview from "./form_components/ModulePreview";
import { AiOutlineDownload } from "react-icons/ai";

const ModuleForm = () => {
  const form = useForm<ModuleSchemaType>({
    resolver: zodResolver(ModuleSchema),
    defaultValues: {
      name: "CustomModule",
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

  const cleanData = (data: ModuleSchemaType) => {
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
    cleanedData.args = args;
    cleanedData.inputs = inputs;
    cleanedData.outputs = outputs;
    return cleanedData;
  };
  const onSubmit: SubmitHandler<ModuleSchemaType> = async (data) => {
    const cleanedData = cleanData(data);
    const str = JSON.stringify(cleanedData, null, 4);
    const options: SaveFilePickerOptions = {
      types: [
        {
          description: "Save",
          accept: {
            "application/json": [".json"],
          },
        },
      ],
      suggestedName: `${data.name}.json`
    };
    
    const handle = await window.showSaveFilePicker(options);
    const writable = await handle.createWritable();
    
    await writable.write(str);
    await writable.close();
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
              <AiOutlineDownload className="mr-2 text-xl" /> Create Module
            </Button>
            {/* <ModulePreview
              className="ml-8"
              getData={() => cleanData(form.getValues())}
              onCreate={() => form.handleSubmit(onSubmit)}
            /> */}
          </form>
        </Form>
      </div>
    </>
  );
};

export default ModuleForm;
