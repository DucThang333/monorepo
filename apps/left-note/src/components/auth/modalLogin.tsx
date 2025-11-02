'use client';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@package/ui/components/dialog';
import { Button } from '@package/ui/components/button';
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormItemProps,
} from '@package/ui/components/shadcn/form';
import { Input } from '@package/ui/components/shadcn/input';
import { useForm } from '@package/ui/deps/react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { login } from '@left-note/actions/auth';
import { z } from '@package/ui/deps/zod';
import { zodResolver } from '@package/ui/deps/resolvers/zod';
import { toast } from '@package/ui/components/sonner';
import { useAuthModal } from '@left-note/providers/login-provider';
import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@package/ui/icons/lucide-react';
import { useDispatch } from 'react-redux';
import { AuthActionType } from '@left-note/reducers/auth';

const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

const formStyleStruct: FormItemProps = {
  labelCols: 1,
  contentCols: 4,
  align: 'start',
};

export default function ModalLogin({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [viewPassword, setViewPassword] = useState(false);

  const { setOpenModalRegister } = useAuthModal();
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const mutateLogin = useMutation({
    mutationFn: (data: { email: string; password: string }) => login(data),
    onSuccess: (data) => {
      dispatch({
        type: AuthActionType.SET_AUTH,
        payload: {
          isLogin: true,
          user: data.data.user,
        },
      });
      toast.success('Login successfully');
      onClose();
    },
    onError: (error: any) => {
      if (error.status === 404) {
        toast.error('Username or password is incorrect', {
          description: 'Please check your username or password',
        });
        return;
      }
      toast.error(error?.response?.data?.message || error.message);
    },
  });

  const onSubmit = (data: any) => {
    mutateLogin.mutate(data);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-3"
          >
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem {...formStyleStruct}>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem {...formStyleStruct}>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password ..."
                      {...field}
                      type={viewPassword ? 'text' : 'password'}
                      suffix={
                        viewPassword ? (
                          <EyeOffIcon
                            size={16}
                            className="cursor-pointer"
                            onClick={() => setViewPassword(false)}
                          />
                        ) : (
                          <EyeIcon
                            size={16}
                            className="cursor-pointer"
                            onClick={() => setViewPassword(true)}
                          />
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                variant="outline"
                className="cursor-pointer"
                type="button"
                onClick={() => {
                  setOpenModalRegister(true);
                  onClose();
                  form.reset();
                }}
              >
                Register
              </Button>
              <Button
                className="cursor-pointer"
                type="submit"
              >
                Login
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
