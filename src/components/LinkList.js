import React from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
const LinkList = () => {
  return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>error</div>;
        const links = data.feed.links;
        return links.map((link) => {
          return <Link key={link.id} link={link} />;
        });
      }}
    </Query>
  );
};

export default LinkList;
