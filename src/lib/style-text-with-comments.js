export const styleTextWithComments = (
    string,
    styles = {
      commentClass: 'my-2 text-gray-500',
      textClass: 'my-2 text-gray-300'
    }
  ) => {
  
  const commentClass = styles.commentClass;
  const textClass = styles.textClass;
    
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
        .map((line, index) => {
          const str = line.trim();
          return str
          ? <p
              key={`${str}-${index}`}
              className={textClass}
            >
              {str}
            </p>
          : <br/>;
        })
      content.push(...lines)
    }
  }
  return content;
};