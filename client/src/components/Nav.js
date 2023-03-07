import React from 'react'

function Nav() {

  const signOut = (e) => {
    alert('Sign out');
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Threadify</a>
        <div className='d-flex'>
          <button className='btn btn-secondary' onClick={signOut}>Sign out</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav