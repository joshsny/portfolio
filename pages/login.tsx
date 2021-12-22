import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <button onClick={() => signIn('spotify')} className="btn bg-slate-200">
      Login
    </button>
  );
}
