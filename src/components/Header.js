import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = () => {
  return (
    <div className="flex p-1 justify-between flex-no-wrap bg-orange-700 ">
      <div className="flex ">
        <div className="font-bold mr-6">Hacker News</div>
        <Link to="/" className="ml-1 no-underline text-black">
          new
        </Link>
        <div className="ml-1">|</div>
        <Link to="/create" className="ml-1 no-undeline text-black">
          submit
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Header);
