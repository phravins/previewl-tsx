import { Link, useLocation } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup, signOut } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { cn } from '../lib/utils';

export default function TopNavBar() {
  const [user] = useAuthState(auth);
  const location = useLocation();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleSignOut = () => signOut(auth);

  const navLinks = [
    { name: 'Preview', path: '/workspace' },
    { name: 'Convert', path: '/convert' },
    { name: 'Saved', path: '/saved' },
    { name: 'Docs', path: '/docs' },
  ];

  return (
    <nav className="bg-surface text-primary flex justify-between items-center w-full px-6 py-3 border-b-[0.5px] border-outline-variant z-50 sticky top-0">
      <Link to="/" className="font-mono font-bold text-primary text-lg tracking-tighter">
        PreviewIt ⚡
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-tight">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "transition-colors",
              location.pathname === link.path 
                ? "text-primary font-semibold border-b-2 border-primary pb-1" 
                : "text-surface-container-highest hover:text-primary"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <img 
              src={user.photoURL || ''} 
              alt={user.displayName || ''} 
              className="w-8 h-8 rounded-full border-[0.5px] border-outline-variant"
              referrerPolicy="no-referrer"
            />
            <button 
              onClick={handleSignOut}
              className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              Sign out
            </button>
          </div>
        ) : (
          <button 
            onClick={handleSignIn}
            className="font-mono text-sm bg-primary-container text-on-primary-container px-4 py-1.5 rounded-[4px] font-bold hover:bg-primary transition-all active:scale-[0.98]"
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}
