import { ModuleSchemaType } from "@/lib/NNModuleSchema";
import { FieldPath, UseFormReturn } from "react-hook-form";
import ModuleInputComponent from "components/base/InputComponent";
import DataTypeSelector from "components/base/DataTypeSelectorComponent";
import { AiOutlineClose } from "react-icons/ai";
import { DraggableProvided } from "react-beautiful-dnd";

type ModuleInputProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
  inputNameFieldName: FieldPath<ModuleSchemaType>;
  inputDataTypeFieldName: FieldPath<ModuleSchemaType>;
  inputValueFieldName: FieldPath<ModuleSchemaType>;
  onRemove: CallableFunction;
  draggableProvided: DraggableProvided;
  className?: string;
};

const ModuleInput = ({
  formInstance: form,
  inputNameFieldName,
  inputDataTypeFieldName,
  inputValueFieldName,
  onRemove,
  draggableProvided,
  className,
}: ModuleInputProps) => {
  return (
    <div
      className={className}
      ref={draggableProvided.innerRef}
      {...draggableProvided.draggableProps}
      {...draggableProvided.dragHandleProps}
    >
      <ModuleInputComponent form={form} label="Input Name" fieldName={inputNameFieldName} />
      <DataTypeSelector form={form} fieldName={inputDataTypeFieldName} />
      <ModuleInputComponent form={form} label="Input Value" fieldName={inputValueFieldName} />
      <button type="button" onClick={() => onRemove()} className="hidden group-hover:block absolute top-4 right-5">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default ModuleInput;
