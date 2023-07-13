import { ModuleSchemaType } from "@/lib/NNModuleSchema";
import { FieldPath, UseFormReturn } from "react-hook-form";
import DataTypeSelector from "components/base/DataTypeSelectorComponent";
import ModuleInputComponent from "components/base/InputComponent";
import { AiOutlineClose } from "react-icons/ai";
import { DraggableProvided } from "react-beautiful-dnd";

type ModuleOutputProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
  outputNameFieldName: FieldPath<ModuleSchemaType>;
  outputDataTypeFieldName: FieldPath<ModuleSchemaType>;
  outputValueFieldName: FieldPath<ModuleSchemaType>;
  className?: string;
  onRemove: CallableFunction;
  draggableProvided: DraggableProvided;
};

const ModuleOutput = ({
  formInstance: form,
  outputNameFieldName,
  outputDataTypeFieldName,
  outputValueFieldName,
  onRemove,
  className,
  draggableProvided,
}: ModuleOutputProps) => {
  return (
    <div
      className={className}
      ref={draggableProvided.innerRef}
      {...draggableProvided.dragHandleProps}
      {...draggableProvided.draggableProps}
    >
      <ModuleInputComponent form={form} label="Output Name" fieldName={outputNameFieldName} />
      <DataTypeSelector form={form} fieldName={outputDataTypeFieldName} />
      <ModuleInputComponent form={form} label="Output Value" fieldName={outputValueFieldName} />
      <button type="button" onClick={() => onRemove()} className="hidden group-hover:block absolute top-4 right-5">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default ModuleOutput;
