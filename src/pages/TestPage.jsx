import { useEffect, useState } from 'react';
import { supabase } from '../../server/supabase.js';

const TestPage = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: session } = await supabase.auth.getSession();

      if (session?.session) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.session.user.id)
          .single(); // Ensure we get a single row

        if (error) {
          setError('Error fetching profile: ' + error.message);
        } else {
          setProfile(data);
        }
      } else {
        setError('You are not logged in!');
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-96">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : profile ? (
          <div>
            <h1 className="text-2xl font-bold">Welcome, {profile.first_name}!</h1>
            <p>Your email: {profile.email}</p>
            <p>Your last name: {profile.last_name}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TestPage;

