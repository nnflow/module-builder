import ReactJson from "react-json-view";
import {
  Dialog,
  DialogContent,
//   DialogDescription,
//   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AiOutlineEye } from "react-icons/ai";

type ModulePreviewProps = {
    getData: CallableFunction;
    onCreate: CallableFunction;
    className?: string;
    previewClassName?: string;
}

const ModulePreview = ({ getData, className, previewClassName  }: ModulePreviewProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}><AiOutlineEye className="mr-2 text-xl" />Preview</Button>
      </DialogTrigger>
      <DialogContent className={previewClassName}>
        <DialogHeader>
          <DialogTitle>Preview</DialogTitle>
        </DialogHeader>
        <ReactJson src={getData()} />
      </DialogContent>
    </Dialog>
  );
};

export default ModulePreview;
