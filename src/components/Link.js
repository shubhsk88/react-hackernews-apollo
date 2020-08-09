import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { timeDifferenceForDate } from '../utils';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const authToken = localStorage.getItem(AUTH_TOKEN);

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;


const Link = ({ link, index }) => {
  return (
    <div className="flex my-2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1} </span>
        {authToken? (
          <Mutation mutation={VOTE_MUTATION} variables={{ linkId: link.id }}>
            {(voteMutation) => (
              <div
                className="mx-1 cursor-pointer text-md text-gray-900 "
                onClick={voteMutation}
              >
                {' '}
                ▲
              </div>
            )}
          </Mutation>
        ):null}
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
