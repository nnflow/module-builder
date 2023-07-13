import { ModuleOutput } from "components/form_components";
import { ModuleSchemaType } from "@/lib/NNModuleSchema";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";

type ModuleOutputsContainerProps = {
  formInstance: UseFormReturn<ModuleSchemaType>;
  outputsFieldArray: UseFieldArrayReturn<ModuleSchemaType, "outputs">;
};

const ModuleOutputsContainer = ({ formInstance, outputsFieldArray }: ModuleOutputsContainerProps) => {
  const { fields, append, remove, move } = outputsFieldArray;
  return (
    <div>
      <h2 className="text-2xl mb-3">Outputs</h2>
      <DragDropContext
        onDragEnd={({ source, destination }) => {
          if (destination) {
            move(source.index, destination.index);
          }
        }}
      >
        <Droppable droppableId="outputs">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields.map(({ id }, idx) => (
                <Draggable key={id} draggableId={id} index={idx}>
                  {(provided) => (
                    <ModuleOutput
                      draggableProvided={provided}
                      formInstance={formInstance}
                      outputNameFieldName={`outputs.${idx}.name`}
                      outputDataTypeFieldName={`outputs.${idx}.type`}
                      outputValueFieldName={`outputs.${idx}.value`}
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
        <AiOutlinePlus className="mr-2" /> Add Output
      </Button>
    </div>
  );
};

export default ModuleOutputsContainer;
