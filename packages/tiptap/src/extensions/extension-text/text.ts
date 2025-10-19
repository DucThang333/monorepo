import { Node } from '@tiptap/react';

/**
 * This extension allows you to create text nodes.
 * @see https://www.tiptap.dev/api/nodes/text
 */
export const Text = Node.create({
  name: 'text',
  group: 'inline',
});
