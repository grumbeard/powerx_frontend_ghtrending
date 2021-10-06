export const styleTextWithComments = (
  string,
  commentClass='my-2 text-gray-500',
  textClass='my-2 text-gray-300'
  ) => {
  if (!string) return ['-- No details provided --'];
    
  const regex = new RegExp('(?<comment><!--[^<>]*-->)|(?<text>[^<>]+)', 'g');
  const matches = string.matchAll(regex);
  let content = [];
  
  for (const match of matches) {
    const { comment, text } = match.groups;
    if (comment) content.push(<p className={commentClass}>{comment}</p>);
    if (text) {
      const lines = text
        .replace('\r\n', '\n')
        .split('\n')
        .map(line => (
          <p className={textClass}>{line}</p>
        ))
      content.push(...lines)
    }
  }
  return content;
};