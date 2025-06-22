import { useEffect, useState } from 'react';
import AxiosInstance from '../../api';

const Account = () => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    getEmail();
  }, []);

  /* Used to get email, need to make a api url for email */
  const getEmail = () => {
    AxiosInstance.get('/api/notes/')
      .then((res) => res.data)
      .then((data) => {
        setEmail(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <div>
        <p>Hi, Your email is {email}</p>
      </div>
    </>
  );
};

export default Account;
