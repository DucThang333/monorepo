export const handleAppShortcut = (event: KeyboardEvent) => {
    const isInEditor = document.activeElement?.closest(".tiptap");

    if (isInEditor) return; // let TipTap handle it

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "b") {
      event.preventDefault();
      console.log("App-level Ctrl+B");
    }
};