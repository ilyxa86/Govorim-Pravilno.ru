import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface CertificatesDialogProps {
  src: string;
  alt: string;
}

const CertificatesDialog = ({ src, alt }: CertificatesDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain"
          />
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CertificatesDialog;
