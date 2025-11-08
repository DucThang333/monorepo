'use client';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps, toast } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

const ToasterIOS = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <div onClick={(e) => e.preventDefault()}>
      <Sonner
        theme={theme as ToasterProps['theme']}
        className="toaster group"
        style={
          {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)',
          } as React.CSSProperties
        }
        closeButton={true}
        duration={3000}
        toastOptions={{
          cancelButtonStyle: {
            scale: 0,
          },
        }}
        richColors={true}
        {...props}
      />
    </div>
  );
};

export { Toaster, ToasterIOS, toast };
