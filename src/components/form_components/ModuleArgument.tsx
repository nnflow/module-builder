import { ModuleSchemaType } from "@/lib/NNModuleSchema";
import { FieldPath, UseFormReturn } from "react-hook-form";
import ModuleInputComponent from "components/base/InputComponent";
import DataTypeSelector from "components/base/DataTypeSelectorComponent";
import {AiOutlineClose} from "react-icons/ai"
import { DraggableProvided } from "react-beautiful-dnd";

type ModuleArgumentProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
  argumentNameFieldName: FieldPath<ModuleSchemaType>;
  argumentDataTypeFieldName: FieldPath<ModuleSchemaType>;
  argumentValueFieldName: FieldPath<ModuleSchemaType>;
  className?: string;
  onRemove: CallableFunction;
  draggableProvided: DraggableProvided
};

const ModuleArgument = ({
  formInstance: form,
  argumentNameFieldName,
  argumentDataTypeFieldName,
  argumentValueFieldName,
  onRemove,
  className,
  draggableProvided
}: ModuleArgumentProps) => {
  return (
    <div className={className} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps} {...draggableProvided.draggableProps}>
      <ModuleInputComponent form={form} label="Argument Name" fieldName={argumentNameFieldName} />
      <DataTypeSelector form={form} fieldName={argumentDataTypeFieldName} />
      <ModuleInputComponent form={form} label="Argument Value" fieldName={argumentValueFieldName} />
      <button type="button" onClick={() => onRemove()} className="hidden group-hover:block absolute top-4 right-5">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default ModuleArgument;
