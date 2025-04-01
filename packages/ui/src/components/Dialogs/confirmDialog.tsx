import { DialogContent } from "@radix-ui/react-dialog";
import { Button } from "../button";
import { Dialog, DialogHeader, DialogTrigger } from "@/components/inits/dialog";
import React from "react";
import { useTranslation } from "@package/i18next";

type ConfirmDialogParams = {
  trigger: JSX.Element;
  icon: JSX.Element;
  content: JSX.Element | string;
  onOK: () => void;
  onCancle: () => void;
};
export function ConfirmDialog({
  trigger,
  icon,
  content,
  onCancle,
  onOK,
}: ConfirmDialogParams) {
  const { t } = useTranslation();
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>{t("confirm", { ns: "translation" })}</DialogHeader>
        {icon}
        {content}
        <Button onClick={onOK}>{t("confirm", { ns: "translation" })}</Button>
        <Button onClick={onCancle}>{t("cancle", { ns: "translation" })}</Button>
      </DialogContent>
    </Dialog>
  );
}
