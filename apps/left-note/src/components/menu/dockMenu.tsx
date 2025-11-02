'use client';
import { cn } from '@package/ui/lib/utils';
import { Button } from '@package/ui/components/button';
import {
  PencilIcon,
  SaveAllIcon,
  Maximize2Icon,
  Minimize2Icon,
  LockIcon,
  UnlockIcon,
  PencilOffIcon,
  ChevronRightIcon,
} from '@package/ui/icons/lucide-react';
import { useMemo, useState } from 'react';

import type { NoteSettingState } from '@left-note/reducers/note';
import { NoteSettingActionType } from '@left-note/reducers/note';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@left-note/deps/store';
import { Tooltip, TooltipContent, TooltipTrigger } from '@package/ui/components/shadcn/tooltip';

type DockMenuProps = {
  className?: string;
  positions?: ('left' | 'right' | 'bottom' | 'top')[];
  hidden?: boolean;
  size?: 'lg' | 'md' | 'sm';
  direction?: 'horizontal' | 'vertical';
};

const positionMap = {
  left: '2%',
  right: '2%',
  bottom: '2%',
  top: '2%',
};

export default function DockMenu({
  className,
  positions = ['right', 'bottom'],
  hidden,
  size = 'md',
  direction = 'horizontal',
}: DockMenuProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const dispatch = useDispatch();

  const { isUpdate, isFullScreen, isLocked } = useSelector((state: RootState) => state.noteSetting);

  const positionStyle = positions?.reduce<
    Partial<Record<'left' | 'right' | 'bottom' | 'top' | 'transform', string>>
  >((acc, pos) => {
    // caculate position center (both has left and right => center horizontal, both has top and bottom => center vertical)
    switch (pos) {
      case 'left':
      case 'right':
        if (positions?.includes('left') && positions?.includes('right')) {
          acc['left'] = '50%';
          acc['transform'] = 'translateX(-50%)';
          break;
        }
        acc[pos] = positionMap[pos];
        break;
      case 'bottom':
      case 'top':
        if (positions?.includes('bottom') && positions?.includes('top')) {
          acc['top'] = '50%';
          acc['transform'] = 'translateY(-50%)';
          break;
        }
        acc[pos] = positionMap[pos];
        break;
    }
    return acc;
  }, {});

  const handleUpdateNoteSetting = (payload: Partial<NoteSettingState>) => {
    dispatch({
      type: NoteSettingActionType.SET_NOTE_SETTING,
      payload: payload,
    });
  };

  const dockMenuItems = [
    {
      key: 'update',
      tooltip: isUpdate ? 'disable update note' : 'enable update note',
      onClick: () => {
        handleUpdateNoteSetting({
          isUpdate: !isUpdate,
        });
      },
      trigger: isUpdate ? <PencilOffIcon size={16} /> : <PencilIcon size={16} />,
    },
    {
      key: 'save',
      tooltip: 'save all',
      onClick: () => {},
      trigger: <SaveAllIcon size={16} />,
    },
    {
      key: 'full-screen',
      tooltip: isFullScreen ? 'full screen' : 'minimize',
      onClick: () => handleUpdateNoteSetting({ isFullScreen: !isFullScreen }),
      trigger: isFullScreen ? <Maximize2Icon size={16} /> : <Minimize2Icon size={16} />,
    },
    {
      key: 'lock',
      tooltip: isLocked ? 'lock' : 'unlock',
      onClick: () => handleUpdateNoteSetting({ isLocked: !isLocked }),
      trigger: isLocked ? <LockIcon size={16} /> : <UnlockIcon size={16} />,
    },
  ];

  const maxWidth = useMemo(() => {
    const number = (dockMenuItems.length || 1) < 10 ? dockMenuItems.length || 1 : 10;
    if (direction === 'vertical') {
      return {
        maxHeight: `${(number - 1) * 52 + 64}px`,
      };
    }
    return {
      maxWidth: `${(number - 1) * 52 + 64}px`,
    };
  }, [dockMenuItems]);

  return (
    <div
      className={cn(
        'absolute bg-accent bg-radial-[at_25%_25%] from-zinc-500 to-zinc-800 to-75% flex gap-3 w-[64px] h-[64px] transition-all duration-2000 delay-200 ease-in-out overflow-auto',
        size === 'lg' && 'rounded-2xl p-4',
        size === 'md' && 'rounded-lg p-3',
        size === 'sm' && 'rounded-md p-2',
        direction === 'vertical' && 'flex-col-reverse hover:h-full',
        direction === 'horizontal' && 'hover:w-full',
        className
      )}
      style={{
        visibility: hidden ? 'hidden' : 'visible',
        opacity: hidden ? 0 : 1,
        position: 'absolute',
        ...(positionStyle || {}),
        ...maxWidth,
      }}
    >
      {dockMenuItems.map((item) => (
        <DockMenuItem
          key={item.key}
          tooltip={item.tooltip}
          onClick={item.onClick}
          trigger={item.trigger}
          size={size}
          positions={positions}
          direction={direction}
        />
      ))}
    </div>
  );
}

function DockMenuItem({
  tooltip,
  onClick,
  trigger,
  size,
  positions,
  direction,
}: {
  tooltip: string;
  onClick: () => void;
  trigger: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  positions?: ('top' | 'bottom' | 'left' | 'right')[];
  direction?: 'horizontal' | 'vertical';
}) {
  const side = useMemo(() => {
    switch (direction) {
      case 'vertical':
        if (!positions?.includes('left')) {
          return 'left';
        }
        return 'right';
      case 'horizontal':
        if (positions?.includes('bottom')) {
          return 'top';
        }
        return 'bottom';
    }
  }, [positions]);
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={onClick}
          variant="outline"
          size="icon"
          className={cn(
            'cursor-pointer ',
            size === 'lg' && 'w-12 h-12 ',
            size === 'md' && 'w-10 h-10',
            size === 'sm' && 'w-8 h-8'
          )}
        >
          {trigger}
        </Button>
      </TooltipTrigger>
      <TooltipContent
        data-side="bottom"
        side={side}
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}
