export function renderTreeMap(
  list: any[],
  idKey: string,
  parentKey: string
){
  return renderTreeMapWithOrphans(list, null, idKey, parentKey);
}

function renderTreeMapWithOrphans(
  list: any[],
  parentId: string | null,
  idKey: string,
  parentKey: string
): any[] {
  const map = new Map(list.map(item => [item[idKey], item]));

  // Recursive function to build children
  function build(parentId: string | null | number): any[] {
    return list
      .filter(item => item[parentKey] === parentId)
      .map(item => ({ ...item, children: build(item[idKey]) }));
  }

  const tree = build(parentId);

  // Include orphaned nodes (parent missing)
  const orphans = list
    .filter(item => item[parentKey] != null && !map.has(item[parentKey]))
    .map(item => ({ ...item, children: build(item[idKey]) }));

  return [...tree, ...orphans];
}
