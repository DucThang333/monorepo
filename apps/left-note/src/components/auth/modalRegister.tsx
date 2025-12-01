'use client';
import { Button } from '@package/ui/components/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@package/ui/components/dialog';
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
import { z } from '@package/ui/deps/zod';
import { zodResolver } from '@package/ui/deps/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@package/ui/components/sonner';
import { register, RegisterPayload } from '@left-note/actions/auth';
import { useForm } from '@package/ui/deps/react-hook-form';
import { useAuthModal } from '@left-note/providers/auth-provider';
import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@package/ui/icons/lucide-react';

const formStyleStruct: FormItemProps = {
  labelCols: 1,
  contentCols: 4,
  align: 'start',
};

const registerSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export default function ModalRegister({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [viewPassword, setViewPassword] = useState(false);

  const { setOpenModalLogin } = useAuthModal();

  const form = useForm({
    resolver: zodResolver(registerSchema),
  });

  const mutateRegister = useMutation({
    mutationFn: (data: RegisterPayload) => register(data),
    onSuccess: () => {
      toast.success('Register successfully');
      form.reset();
    },
    onError: (error: any) => {
      if (error.status === 409) {
        toast.error('Username or email is already exists', {
          description: 'Please check your username or email',
        });
        return;
      }
      toast.error(error?.response?.data?.message || error.message);
    },
  });

  const onSubmit = (data: any) => {
    mutateRegister.mutate(data);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-3"
          >
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem {...formStyleStruct}>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem {...formStyleStruct}>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your confirm password ..."
                      {...field}
                      type={viewPassword ? 'text' : 'password'}
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
                  setOpenModalLogin(true);
                  onClose();
                  form.reset();
                }}
              >
                Login
              </Button>
              <Button
                className="cursor-pointer"
                type="submit"
                isLoading={mutateRegister.isPending}
              >
                Register
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
