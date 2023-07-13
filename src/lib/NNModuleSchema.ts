import { z } from "zod";
import { ModuleDataTypes } from "./ModuleDataTypes";

const ModuleTypes = {
  CLASS: "class",
  FUNCTION: "function"
}

export const ModuleDataTypeEnum = z.nativeEnum(ModuleDataTypes);
export const ModuleTypeEnum = z.nativeEnum(ModuleTypes);

export const ModuleSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  moduleType: ModuleTypeEnum.default("class"),
  imports: z.string().optional(),
  args: z
    .object({
      name: z.string().optional(),
      type: ModuleDataTypeEnum.optional(),
      value: z.any().optional(),
    })
    .array(),
  inputs: z
    .object({
      name: z.string().optional(),
      type: ModuleDataTypeEnum.optional(),
      value: z.number().optional(),
    })
    .array(),
  outputs: z
    .object({
      name: z.string().optional(),
      type: ModuleDataTypeEnum.optional(),
      value: z.number().optional(),
    })
    .array(),
  requirements: z.string().optional(),
  readme: z.string().optional()
});

export type ModuleSchemaType = z.infer<typeof ModuleSchema>;
