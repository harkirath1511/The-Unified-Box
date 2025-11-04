import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // At this point, better-auth has already completed the OAuth exchange
    // and (optionally) set your session cookie.
    // You can add an optional call to your /api/auth/account or session endpoint if needed.
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-gray-600">Completing authentication...</div>
    </div>
  );
}

export default AuthCallback;
