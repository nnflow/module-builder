export const ModuleDataTypes = {
    // python datatypes
    INT : "int",
    FLOAT : "float",
    DOUBLE : "double",
    COMPLEX : "complex",
    BOOLEAN : "boolean",
    STRING : "str",
    NONE : "None",
    LIST : "list",
    TUPLE : "tuple",
    DICT : "dict",

    // https://pytorch.org/docs/stable/tensors.html#data-types
  
    // float datatypes
    TORCH_FLOAT16 : "torch.float16", TORCH_HALF : "torch.half",
    TORCH_FLOAT32 : "torch.float32", TORCH_FLOAT : "torch.float",
    TORCH_FLOAT64 : "torch.float64", TORCH_DOUBLE : "torch.double",
  
    // complex datatypes
    TORCH_COMPLEX32 : "torch.complex32", TORCH_CHALF : "torch.chalf",
    TORCH_COMPLEX64 : "torch.complex64", TORCH_CFLOAT : "torch.cfloat",
  
    // int datatypes
    TORCH_UINT8 : "torch.uint8",
    TORCH_INT8 : "torch.int8",
    TORCH_INT16 : "torch.int16", TORCH_SHORT : "torch.short",
    TORCH_INT32 : "torch.int32", TORCH_INT : "torch.int",
    TORCH_INT64 : "torch.int64", TORCH_LONG : "torch.long",
  
    // boolean dataypes
    TORCH_BOOL : "torch.bool",
  
    // quantised datatypes
    TORCH_QUINT8 : "torch.quint8",
    TORCH_QINT8 : "torch.qint8",
    TORCH_QINT32 : "torch.qint32",
    TORCH_QINT4 : "torch.quint4x2",

    // custom
    CUSTOM : "custom"
  }