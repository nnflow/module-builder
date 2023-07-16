# NNFlow Module Builder

This project provides a easy to use visual frontend to create custom modules which can be exported to NNFlow to create all kinds of complex applications.

> This module builder is specifically made to design isolated modules (eg. Pytorch Modules like nn.Linear, nn.Conv2d etc.) without visual graph node builder. Please use NNFlow if you want to access graphical node builder. 

## Features
* Supports adding arguments, inputs, outputs visually 
* Supports import of other NNFlow Modules

## Contributions
If you have any queries or suggestions regarding the project or codebase please feel to open a new PR. We welcome contributions of all kinds.

### TODO

- [ ] Add File System Support (Adapter for extra file systems)
- [ ] Add custom implementation component
- [ ] Add NNModule dependency field
- [ ] Add Dark Theme support
- [ ] Add Initializer component (torch.nn.Linear, CustomModule)
- [ ] Add Python intellisense using local python environments
- [ ] Add github pages action

### Completed

- [x] Add Icons to the project
- [x] Add delete button to args, inputs, output
- [x] Add Drag functionality to args, inputs, output
- [x] Add class / function radio button
- [x] Add readme component
- [x] Add library dependency field
- [x] Add Requirements dependency field
- [x] Add Save Json File
- [x] Add Preview Module JSON 
- [x] Add https serving support in localhost to access filesystem features
- [x] Add File System Preview while saving the json
