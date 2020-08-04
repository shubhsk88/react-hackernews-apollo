import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { useHistory } from 'react-router';
const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;
const CreateLink = () => {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const history = useHistory();
  return (
    <div>
      <div className="flex flex-col mt-3">
        <input
          className="mb-2 border border-blue-600"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="mb-2 border border-blue-800"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <Mutation
        mutation={POST_MUTATION}
        variables={{ description, url }}
        onCompleted={() => history.push('/')}
      >
        {(postMutation) => (
          <button className="bg-yellow-400" onClick={postMutation}>
            Submit
          </button>
        )}
      </Mutation>
    </div>
  );
};

export default CreateLink;
