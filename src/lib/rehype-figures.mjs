// Markdown `![alt](img "caption")` alone in a paragraph becomes
// <figure><img><figcaption>caption</figcaption></figure>, so in-post photos
// carry a visible caption (and their short credit) under them.
export function rehypeFigures() {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      const kids = (child.children ?? []).filter((k) => !(k.type === 'text' && !k.value.trim()));
      if (child.type === 'element' && child.tagName === 'p' && kids.length === 1 && kids[0].tagName === 'img' && kids[0].properties?.title) {
        const img = kids[0];
        const caption = String(img.properties.title);
        delete img.properties.title;
        return {
          type: 'element',
          tagName: 'figure',
          properties: {},
          children: [img, { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: caption }] }],
        };
      }
      walk(child);
      return child;
    });
  };
  return (tree) => walk(tree);
}
