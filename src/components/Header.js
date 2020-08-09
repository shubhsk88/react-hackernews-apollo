import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../constants';
import { useHistory } from 'react-router';
const Header = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const history = useHistory();
  return (
    <div className="flex p-1 justify-between flex-no-wrap bg-orange-700 ">
      <div className="flex ">
        <div className="font-bold mr-6">Hacker News</div>
        <Link to="/" className="ml-1 no-underline text-black">
          new
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml-1">|</div>
            <Link to="/create" className="ml-1 no-undeline text-black">
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex">
        {authToken ? (
          <div
            className="ml-1 pointer text-black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              history.push('/');
            }}
          >
            Logout
          </div>
        ) : (
          <Link to="/login" className="ml-1 no-uderline text-black">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Header);
