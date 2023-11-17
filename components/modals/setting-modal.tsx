/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useSettings } from "@/hooks/use-setting";
import { Label } from "../ui/label";
import { ModeToggle } from "../mode-toggle";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My Settings</h2>
        </DialogHeader>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Apperance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize look for device
            </span>
          </div>

          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
