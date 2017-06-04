export default (
  {
    result,
    frontMatter,
    options,
  }
) => {
  if (result.head && (result.head.panelBody || result.head.layout != 'Panel')) {
    return result;
  }

  return {
    ...result,
    head: {
      ...result.head,
      panelBody: result.body,
    },
  }
}