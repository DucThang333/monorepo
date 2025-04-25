import React, { useState } from "react";
import { Slider } from "@/components/Slider";

// Basic examples
export const DefaultExample = () => (
  <Slider defaultValue={[50]} min={0} max={100} step={1} showValue />
);

export const RangeExample = () => (
  <Slider defaultValue={[25, 75]} min={0} max={100} step={1} showValue />
);

export const CustomRangeExample = () => (
  <Slider defaultValue={[0]} min={-50} max={50} step={5} showValue />
);

export const DisabledExample = () => (
  <Slider defaultValue={[50]} disabled showValue />
);

export const VerticalExample = () => (
  <Slider defaultValue={[50]} orientation="vertical" showValue className="h-40" />
);

export const VariantsExample = () => (
  <div className="flex flex-col gap-6 w-80">
    <div>
      <label className="text-sm font-medium mb-2 block">Default</label>
      <Slider defaultValue={[50]} variant="default" showValue />
    </div>
    <div>
      <label className="text-sm font-medium mb-2 block">Primary</label>
      <Slider defaultValue={[50]} variant="primary" showValue />
    </div>
    <div>
      <label className="text-sm font-medium mb-2 block">Secondary</label>
      <Slider defaultValue={[50]} variant="secondary" showValue />
    </div>
  </div>
);

export const ThicknessesExample = () => (
  <div className="flex flex-col gap-6 w-80">
    <div>
      <label className="text-sm font-medium mb-2 block">Thin</label>
      <Slider defaultValue={[50]} thickness="thin" showValue />
    </div>
    <div>
      <label className="text-sm font-medium mb-2 block">Normal</label>
      <Slider defaultValue={[50]} thickness="normal" showValue />
    </div>
    <div>
      <label className="text-sm font-medium mb-2 block">Thick</label>
      <Slider defaultValue={[50]} thickness="thick" showValue />
    </div>
  </div>
);

export const CustomValueDisplayExample = () => (
  <Slider 
    defaultValue={[50]} 
    showValue 
    valueDisplay={(value) => `${value[0]}%`}
  />
);

export const PriceRangeExample = () => (
  <Slider
    defaultValue={[25, 75]}
    min={0}
    max={1000}
    step={10}
    showValue
    valueDisplay={(value) => `$${value[0]} - $${value[1]}`}
  />
);

// Interactive examples
export const InteractiveSliderExample = () => {
  const [value, setValue] = useState([50]);

  return (
    <div className="w-full max-w-md space-y-4">
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={1}
        showValue
      />
      
      <div className="text-sm text-muted-foreground">
        Current value: {value[0]}
      </div>
    </div>
  );
};

export const InteractiveRangeSliderExample = () => {
  const [value, setValue] = useState([200, 800]);

  return (
    <div className="w-full max-w-md space-y-4">
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={1000}
        step={10}
        showValue
        valueDisplay={(val) => `$${val[0]} - $${val[1]}`}
      />
      
      <div className="text-sm text-muted-foreground">
        Price range: ${value[0]} - ${value[1]}
      </div>
    </div>
  );
};

// All Slider Variations
export const AllVariationsExample = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-xl">
      {/* Basic Sliders */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Sliders</h3>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Single Value</label>
            <Slider defaultValue={[50]} showValue />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Range</label>
            <Slider defaultValue={[25, 75]} showValue />
          </div>
        </div>
      </div>
      
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Variants</h3>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Default</label>
            <Slider defaultValue={[50]} variant="default" showValue />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Primary</label>
            <Slider defaultValue={[50]} variant="primary" showValue />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Secondary</label>
            <Slider defaultValue={[50]} variant="secondary" showValue />
          </div>
        </div>
      </div>
      
      {/* Thicknesses */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Thicknesses</h3>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Thin</label>
            <Slider defaultValue={[50]} thickness="thin" showValue />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Normal</label>
            <Slider defaultValue={[50]} thickness="normal" showValue />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Thick</label>
            <Slider defaultValue={[50]} thickness="thick" showValue />
          </div>
        </div>
      </div>
      
      {/* Disabled State */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Disabled State</h3>
        <Slider defaultValue={[60]} disabled showValue />
      </div>
      
      {/* Vertical Orientation */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Vertical Orientation</h3>
        <div className="h-40">
          <Slider 
            defaultValue={[70]} 
            orientation="vertical" 
            showValue 
            className="h-full"
          />
        </div>
      </div>
      
      {/* Custom Ranges */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Custom Ranges</h3>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Temperature (-20°C to 40°C)</label>
            <Slider 
              defaultValue={[22]} 
              min={-20} 
              max={40} 
              showValue 
              valueDisplay={(val) => `${val[0]}°C`}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Price Range ($0 - $1000)</label>
            <Slider 
              defaultValue={[200, 800]} 
              min={0} 
              max={1000} 
              step={10} 
              showValue 
              valueDisplay={(val) => `$${val[0]} - $${val[1]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
