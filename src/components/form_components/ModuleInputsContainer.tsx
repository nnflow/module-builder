import { ModuleInput } from "components/form_components";
import { ModuleSchemaType } from "@/lib/NNModuleSchema";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";

type ModuleInputsContainerProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
  inputsFieldArray: UseFieldArrayReturn<ModuleSchemaType, "inputs">;
};

const ModuleInputsContainer = ({ formInstance, inputsFieldArray }: ModuleInputsContainerProps) => {
  const { fields, append, remove, move } = inputsFieldArray;
  return (
    <div>
      <h2 className="text-2xl mb-3">Inputs</h2>
      <DragDropContext
        onDragEnd={({ source, destination }) => {
          if (destination) {
            move(source.index, destination.index);
          }
        }}
      >
        <Droppable droppableId="inputs">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields.map(({ id }, idx) => (
                <Draggable key={id} draggableId={id} index={idx}>
                  {(provided) => (
                    <ModuleInput
                      draggableProvided={provided}
                      formInstance={formInstance}
                      inputNameFieldName={`inputs.${idx}.name`}
                      inputDataTypeFieldName={`inputs.${idx}.type`}
                      inputValueFieldName={`inputs.${idx}.value`}
                      className="group relative border-2 rounded p-4 pb-6 my-4"
                      onRemove={() => remove(idx)}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        type="button"
        className="mb-4 relative inset-x-1/2 transform -translate-x-1/2"
        onClick={(_) => append({})}
      >
        <AiOutlinePlus className="mr-2" /> Add Input
      </Button>
    </div>
  );
};

export default ModuleInputsContainer;
