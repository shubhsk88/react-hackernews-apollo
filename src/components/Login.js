import React, { useState } from 'react';
import { AUTH_TOKEN } from '../constants';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { useHistory } from 'react-router';

const saveUserData = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
};
const Login = () => {
  const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
      $email: String!
      $password: String!
      $name: String!
    ) {
      signup(email: $email, password: $password, name: $name) {
        token
      }
    }
  `;
  const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;
  const history = useHistory();
  const [login, setlogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const confirm = async (data) => {
    const { token } = login ? data.login : data.signup;
    saveUserData(token);
    history.push('/');
  };

  return (
    <>
      <div>
        <h4 className="my-3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-col">
          {!login && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose a safe password"
          />
        </div>
      </div>
      <div className="flex mt-3">
        <Mutation
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variable={{ email, password, name }}
          onCompleted={(data) => confirm(data)}
        >
          {(mutation) => (
            <div className="cursor-pointer bg-blue-300 mr-2" onClick={mutation}>
              {login ? 'login' : 'create account'}
            </div>
          )}
        </Mutation>
      </div>
      <div
        className="cursor-pointer w-32 bg-green-200"
        onClick={() => setlogin(!login)}
      >
        {login ? 'need to create an account?' : 'already have an account?'}
      </div>
    </>
  );
};

export default Login;
