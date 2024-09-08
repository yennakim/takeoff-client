import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { signIn } from '../utils/auth';
import logo from '../assets/logo.png';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-row justify-content-space-between align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        gap: '5vw',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <Image src={logo} alt="logo" width={300} height={150} />
      <Button type="button" size="md" className="btn-light" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
