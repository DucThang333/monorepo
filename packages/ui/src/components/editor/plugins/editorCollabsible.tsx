import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@package/ui/components/shadcn/select';
import { ReactNode } from 'react';

type EditorCollabsibleItem = {
  value: string;
  label: React.ReactNode;
};

type EditorCollabsibleProps = {
  items: EditorCollabsibleItem[];
  selectValueNode?: ReactNode;
} & React.ComponentProps<typeof Select>;

function EditorCollabsible(props: EditorCollabsibleProps) {
  const { items, selectValueNode, value, onValueChange } = props;
  return (
    <Select
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger
        size="sm"
        className="focus-visible:border-0 focus-visible:ring-0"
      >
        {selectValueNode ? selectValueNode : <SelectValue />}
      </SelectTrigger>
      <SelectContent position='popper' portal={false}>
        <SelectGroup>
          {items.map((item) => {
            return (
              <SelectItem
                key={item.value}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { EditorCollabsible };
export type { EditorCollabsibleItem };
