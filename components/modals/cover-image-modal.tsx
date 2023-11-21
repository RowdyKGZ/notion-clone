"use client";

import { useParams } from "next/navigation";
import { useMutation } from "convex/react";
import { useState } from "react";

import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "../single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
  const params = useParams();
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();
  const update = useMutation(api.documents.update);

  const [file, setFile] = useState<File>();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onClose = () => {
    setFile(undefined);
    setIsSubmiting(false);
    coverImage.onClose();
  };

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmiting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center font-semibold text-lg">Cover Image</h2>
        </DialogHeader>

        <SingleImageDropzone
          className="w-full outline-none"
          disabled={isSubmiting}
          value={file}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
};
