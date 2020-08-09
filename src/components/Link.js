import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { timeDifferenceForDate } from '../utils';

const authToken = localStorage.getItem(AUTH_TOKEN);
console.log(authToken);
const voteForLink = () => {};
const Link = ({ link, index }) => {
  return (
    <div className="flex my-2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}</span>
        {authToken && (
          <div
            className="mx-1 text-md text-gray-900 "
            onClick={() => voteForLink()}
          >
            {' '}
            ▲
          </div>
        )}
      </div>
      <div className="mx-1">
        <div>
          {link.description} ({link.url})
        </div>
        <div className="text-x  text-gray-900">
          {link.votes.length} votes | by{' '}
          {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
          {timeDifferenceForDate(link.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Link;
