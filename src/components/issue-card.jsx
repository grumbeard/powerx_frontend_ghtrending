import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react";
import cn from "classnames";
import { Card } from "./card";

const styleComments = (string, commentClass='my-1 text-gray-500', textClass='my-1 text-gray-300') => {
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

export const IssueCard = ({ issue, isOpen, ...props }) => {
  const className = cn(
    'grid grid-cols-6 items-center',
    props.className
  );
  
  return (
    <Card {...props} className={className}>
      <div className='md:col-span-1'>
        <img src={issue.user.avatar_url} alt='issue reporter avatar' className="w-10 h-10 rounded-full inline-block" />
        <span className='mx-2'>#{issue.number}:</span>
      </div>
      <div className='md:col-span-4'>
        <span>{issue.title}</span>
      </div>
      <div className='md:col-span-1 justify-self-end'>
        <span>
          { isOpen
            ? <ChevronUpIcon size={24} />
            : <ChevronDownIcon size={24} />
          }
        </span>
      </div>
      { isOpen &&
        <Card className='col-span-6'>
          { styleComments(issue.body) }
        </Card>
      }
    </Card>
  );
};