import cn from "classnames";
import { styleTextWithComments } from "lib/style-text-with-comments";
import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react";
import { Card } from "./card";

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
          { styleTextWithComments(issue.body) }
        </Card>
      }
    </Card>
  );
};