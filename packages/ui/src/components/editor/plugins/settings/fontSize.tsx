import { Label } from '@package/ui/components/shadcn/label';
import { Input } from '@package/ui/components/shadcn/input';
import { Button } from '@package/ui/components/shadcn/button';
import { Separator } from '@package/ui/components/shadcn/separator';
import { cn } from '@package/ui/lib/utils';
import { useCallback, useContext, useEffect, useState } from 'react';
import { EditorContext } from '@package/ui/components/editor/provider/editorProvider';
import { Tooltip, TooltipContent, TooltipTrigger } from '@package/ui/components/shadcn/tooltip';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@package/ui/components/shadcn/collapsible';
import {
  ChevronDown,
  Laptop,
  LetterText,
  MonitorSmartphone,
  Smartphone,
  Tablet,
  TabletSmartphone,
} from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@package/ui/components/shadcn/popover';
import { FONT_SIZE, ResponisveKey } from '@package/ui/components/editor/constants/cscKey';

type ScreenItem = {
  key: string;
  keycss: string;
};

type Screen = {
  mobile: ScreenItem;
  ipadMini: ScreenItem;
  tablet: ScreenItem;
  laptop: ScreenItem;
  desktop: ScreenItem;
};

const screenConstants: Screen = {
  mobile: {
    key: 'mobile',
    keycss: FONT_SIZE + ResponisveKey.MOBILE,
  },
  ipadMini: {
    key: 'ipad-mini',
    keycss: FONT_SIZE + ResponisveKey.IPAD_MINI,
  },
  tablet: {
    key: 'tablet',
    keycss: FONT_SIZE + ResponisveKey.TABLET,
  },
  laptop: {
    key: 'laptop',
    keycss: FONT_SIZE + ResponisveKey.LAPTOP,
  },
  desktop: {
    key: 'desktop',
    keycss: FONT_SIZE + ResponisveKey.DESKTOP,
  },
};

const MIN_GLOBAL_FONT_SIZE = 3; // unit (px)
const MAX_GLOBAL_FONT_SIZE = 30; // unit (px)
export function SettingFontSize() {
  const [screen, setScreen] = useState<ScreenItem>(screenConstants.desktop);
  const { editorKey } = useContext(EditorContext);
  const element = document.getElementById(editorKey);
  const [fontSize, setFontSize] = useState<string | null>(null);

  const handleSwitchScreen = useCallback(
    (key: string) => {
      if (!element) return;
      setFontSize(getComputedStyle(element).getPropertyValue(key));
    },
    [element]
  );

  useEffect(() => {
    if (fontSize || !element) return;
    setFontSize(getComputedStyle(element).getPropertyValue(screenConstants.desktop.keycss));
  }, [element]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2">
          <LetterText />
          Font Size
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="p-3 w-auto"
        align="end"
      >
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Global Font Size</h4>
            <p className="text-muted-foreground text-sm">
              Set a global font size that applies to the entire editor.
            </p>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex gap-4">
              <Label>Screen</Label>
              <div className="flex gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ButtonScreen
                      isActive={screen.key === screenConstants.mobile.key}
                      onClick={() => {
                        setScreen(screenConstants.mobile);
                        handleSwitchScreen(screenConstants.mobile.keycss);
                      }}
                    >
                      <Smartphone color="gray" />
                    </ButtonScreen>
                  </TooltipTrigger>
                  <TooltipContent>mobile</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ButtonScreen
                      isActive={screen.key == screenConstants.ipadMini.key}
                      onClick={() => {
                        setScreen(screenConstants.ipadMini);
                        handleSwitchScreen(screenConstants.ipadMini.keycss);
                      }}
                    >
                      <TabletSmartphone color="gray" />
                    </ButtonScreen>
                  </TooltipTrigger>
                  <TooltipContent>ipad mini</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ButtonScreen
                      isActive={screen.key === screenConstants.tablet.key}
                      onClick={() => {
                        setScreen(screenConstants.tablet);
                        handleSwitchScreen(screenConstants.tablet.keycss);
                      }}
                    >
                      <Tablet color="gray" />
                    </ButtonScreen>
                  </TooltipTrigger>
                  <TooltipContent>tablet</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ButtonScreen
                      isActive={screen.key === screenConstants.laptop.key}
                      onClick={() => {
                        setScreen(screenConstants.laptop);
                        handleSwitchScreen(screenConstants.laptop.keycss);
                      }}
                    >
                      <Laptop color="gray" />
                    </ButtonScreen>
                  </TooltipTrigger>
                  <TooltipContent>labtop</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ButtonScreen
                      isActive={screen.key === screenConstants.desktop.key}
                      onClick={() => {
                        setScreen(screenConstants.desktop);
                        handleSwitchScreen(screenConstants.desktop.keycss);
                      }}
                    >
                      <MonitorSmartphone color="gray" />
                    </ButtonScreen>
                  </TooltipTrigger>
                  <TooltipContent>desktop</TooltipContent>
                </Tooltip>
              </div>
            </div>
            <div className="flex gap-4">
              <Label htmlFor="width">Font size (px)</Label>
              <Input
                id="width"
                value={Number(fontSize?.replace('px', ''))}
                onChange={(v) => {
                  const valueUpdated =
                    Number(v.target.value) > MIN_GLOBAL_FONT_SIZE
                      ? Number(v.target.value) < MAX_GLOBAL_FONT_SIZE
                        ? v.target.value
                        : MAX_GLOBAL_FONT_SIZE
                      : MIN_GLOBAL_FONT_SIZE;
                  setFontSize(valueUpdated + 'px');
                }}
                className="h-8 w-20"
                type="number"
              />
            </div>
            <Collapsible>
              <CollapsibleTrigger>
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600 text-gray-500 text-sm">
                  <p>Read more information</p>
                  <ChevronDown
                    color="gray"
                    size={17}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="text-gray-500 text-sm">
                  <p className="mb-2">Responsive setup:</p>
                  <div className="flex gap-3">
                    <Smartphone
                      size={16}
                      color="gray"
                    />
                    <span>Mobile: max width &gt; 640px and &lt; 768px</span>
                  </div>
                  19
                  <div className="flex gap-3">
                    <TabletSmartphone
                      size={16}
                      color="gray"
                    />
                    <span>iPad Mini: max width &gt; 768px and &lt; 1024px</span>
                  </div>
                  <div className="flex gap-3">
                    <Tablet
                      size={16}
                      color="gray"
                    />
                    <span>Tablet: max width &gt; 1024px and &lt; 1280px</span>
                  </div>
                  <div className="flex gap-3">
                    <Laptop
                      size={16}
                      color="gray"
                    />
                    <span>Laptop: max width &gt; 1280px and &lt; 1536px</span>
                  </div>
                  <div className="flex gap-3">
                    <MonitorSmartphone
                      size={16}
                      color="gray"
                    />
                    <span>Desktop: max width &gt; 1536px</span>
                  </div>
                  <span>your screen {window.innerWidth}px</span>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className="flex gap-2 pt-5">
            <Button
              onClick={() => handleSwitchScreen(screen.keycss)}
              className="cursor-pointer"
            >
              Reset
            </Button>
            <Button
              className="cursor-pointer"
              onClick={() => {
                element?.style.setProperty(screen.keycss, fontSize as string);
              }}
              disabled={!fontSize}
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ButtonScreen({
  isActive,
  ...props
}: { isActive?: boolean } & React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className={cn(
        'bg-transparent border border-transparent hover:bg-transparent hover:border-gray-300 cursor-pointer focus-visible:ring-0 focus-visible:border-0',
        isActive && 'border-gray-300'
      )}
    >
      {props.children}
    </Button>
  );
}
