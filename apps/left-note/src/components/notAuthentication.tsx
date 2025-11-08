import { useAuthModal } from '@left-note/providers/auth-provider';
import { Button } from '@package/ui/components/button';
import { goBack } from '@left-note/utils/history';
import { useRouter } from 'next/navigation';

export default function NotAuthentication() {
  const { setOpenModalLogin } = useAuthModal();
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p>Oops! Looks like you’re not logged in.</p>
      <p>
        Please
        <Button
          variant="outline"
          className="cursor-pointer mx-2"
          onClick={() => setOpenModalLogin(true)}
        >
          login
        </Button>
        or
        <Button
          variant="outline"
          className="cursor-pointer mx-2"
          onClick={() => goBack(router)}
        >
          go back
        </Button>
        to where you came from.
      </p>
    </div>
  );
}
