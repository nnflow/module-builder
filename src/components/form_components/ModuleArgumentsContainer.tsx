import { ModuleArgument } from "components/form_components";
import { ModuleSchemaType } from "@/lib/NNModuleSchema";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";

type ModuleArgumentsContainerProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
  argsFieldArray: UseFieldArrayReturn<ModuleSchemaType, "args">;
};

const ModuleArgumentsContainer = ({ formInstance, argsFieldArray }: ModuleArgumentsContainerProps) => {
  const { fields, append, remove, move } = argsFieldArray;
  return (
    <div>
      <h2 className="text-2xl mb-3">Arguments</h2>
      <DragDropContext
        onDragEnd={({ source, destination }) => {
          if (destination) {
            move(source.index, destination.index);
          }
        }}
      >
        <Droppable droppableId="args">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields.map(({ id }, idx) => (
                <Draggable key={id} draggableId={id} index={idx}>
                  {(provided) => (
                    <ModuleArgument
                      draggableProvided={provided}
                      formInstance={formInstance}
                      argumentNameFieldName={`args.${idx}.name`}
                      argumentDataTypeFieldName={`args.${idx}.type`}
                      argumentValueFieldName={`args.${idx}.value`}
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
        <AiOutlinePlus className="mr-2" /> Add Argument 
      </Button>
    </div>
  );
};

export default ModuleArgumentsContainer;
