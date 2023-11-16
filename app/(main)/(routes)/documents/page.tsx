"use client";
import Image from "next/image";
import { toast } from "sonner";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { useUser } from "@clerk/clerk-react";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const DocumentPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed a new note",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        width={300}
        height={300}
        alt="document"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        width={300}
        height={300}
        alt="document"
        className="hidden dark:block"
      />

      <h2 className="text-lg font-medium ">
        Welcom to {user?.firstName} Jotion
      </h2>

      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note text
      </Button>
    </div>
  );
};

export default DocumentPage;
