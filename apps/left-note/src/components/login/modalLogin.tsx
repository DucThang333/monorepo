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
} from '@package/ui/components/shadcn/form';
import { Input } from '@package/ui/components/shadcn/input';
import { useForm } from '@package/ui/deps/react-hook-form';
import { FormItemProps } from '@package/ui/components/shadcn/form';

export default function ModalLogin({ open, onClose }: { open: boolean; onClose: () => void }) {
  const form = useForm();

  const formStyleStruct: FormItemProps = {
    labelCols: 1,
    contentCols: 4,
    align: 'start',
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
            name="password"
            render={({ field }) => (
              <FormItem {...formStyleStruct}>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password ..."
                    {...field}
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
            >
              Register
            </Button>
            <Button
              variant="outline"
              className="cursor-pointer"
            >
              Login
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
