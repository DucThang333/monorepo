'use client';
import {
  ColorPicker as ColorPickerShadcn,
  ColorPickerAlpha,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from '@package/ui/components/shadcn/color-picker';

const ColorPicker = () => (
  <ColorPickerShadcn className="max-w-sm rounded-md border p-4 shadow-sm bg-white">
    <ColorPickerSelection className="min-h-[100px]" />
    <div className="flex items-center gap-4">
      <ColorPickerEyeDropper />
      <div className="grid w-full gap-1">
        <ColorPickerHue />
        <ColorPickerAlpha />
      </div>
    </div>
    <div className="flex items-center gap-2">
      <ColorPickerOutput />
      <ColorPickerFormat />
    </div>
  </ColorPickerShadcn>
);
export { ColorPicker };
