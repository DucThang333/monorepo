import { Editor } from "@tiptap/react";
import { FloatingMenu } from "@tiptap/react/menus";

export default function FloatingMenuCustom({ editor }: { editor: Editor }) {
    return (
        <FloatingMenu editor={editor}>
            floating menu
        </FloatingMenu>
    )
}