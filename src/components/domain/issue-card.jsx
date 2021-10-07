import cn from "classnames";
import { styleTextWithComments } from "lib/style-text-with-comments";
import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react";
import { Card } from "../presentation/card";
import { Badge } from "../presentation/badge";
import { PropTypes } from 'prop-types';

export const IssueCard = ({ issue, isOpen=true, commentClass, textClass, ...props }) => {
  const className = cn(
    'grid grid-cols-6 items-center',
    props.className
  );
  
  return (
    <Card {...props} className={className} color={issue.state === 'open' ? 'red' : 'gray'}>
      <div className='md:col-span-1'>
        <img src={issue.user.avatar_url} alt='issue reporter avatar' className="w-10 h-10 rounded-full inline-block" />
        <span className='mx-2'>#{issue.number}:</span>
      </div>
      <div className='md:col-span-4 flex justify-between'>
        <span>{issue.title}</span>
        {(issue.state === 'open') && 
          <Badge color='red' className='mx-4 self-center'>{issue.state}</Badge>
        }
        {(issue.state === 'closed') && 
          <Badge color='green' className='mx-4 self-center'>{issue.state}</Badge>
        }
        {(issue.state !== 'open') && (issue.state !== 'closed') &&
          <Badge color='yellow' className='mx-4 self-center'>{issue.state}</Badge>
        }
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
          { issue.body
              ? styleTextWithComments(issue.body, { commentClass: commentClass || 'my-2 text-gray-500', textClass: textClass || 'my-2 text-gray-300' })
              : <p className='my-2 text-gray-500'>-- No details provided --</p>
          }
        </Card>
      }
    </Card>
  );
};

IssueCard.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string.isRequired,
    /* Known states include: 'open', 'closed', 'all'
        'open' state renders in red,
        'closed' state renders in green,
        any other state renders in yellow
      */
    state: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired
    }).isRequired,
    body: PropTypes.string
  }),
};