'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@package/ui/components/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@package/ui/components/dropdown-menu';
import { Separator } from '@package/ui/components/separator';
import {
  Sidebar as SidebarComp,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@package/ui/components/sidebar';
import {
  Bell,
  LaptopMinimal,
  LayoutDashboardIcon,
  LogOut,
  LogInIcon,
  Moon,
  PanelLeftOpen,
  PanelRightOpen,
  PencilLine,
  Settings,
  Sun,
  User,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { useAuthModal } from '@left-note/providers/login-provider';
import { getAuthState } from '@left-note/actions/auth';
import { getNoteSettingState } from '@left-note/actions/note';

type MenuItemsType = {
  label?: string;
  icon?: ReactNode;
  url?: string;
  childrent?: MenuItemsType;
};

type MenuType = {
  main: MenuItemsType[];
  footer: MenuItemsType[];
};

const menuItems: MenuType = {
  main: [
    {
      label: 'Dashboard',
      icon: <LayoutDashboardIcon />,
    },
    {
      label: 'Note',
      icon: <PencilLine />,
      url: 'note',
    },
  ],
  footer: [],
};

function Sidebar() {
  const { isMobile, setOpen, open } = useSidebar();
  const { setTheme, theme, themes } = useTheme();
  const path = usePathname();
  const { isLogin, user } = getAuthState();
  const { isFullScreen } = getNoteSettingState();
  console.log('user', user);
  console.log('isLogin', isLogin);

  const { setOpenModalLogin } = useAuthModal();

  return isFullScreen ? null : (
    <>
      <SidebarComp
        collapsible="icon"
        variant="sidebar"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-none"
              >
                <div className={`flex justify-between flex-row-reverse hover:bg-none`}>
                  {open ? (
                    <PanelRightOpen
                      onClick={() => setOpen(false)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <PanelLeftOpen
                      onClick={() => setOpen(true)}
                      className="cursor-pointer"
                    />
                  )}
                  <span className="text-base font-semibold ">LEFT NOTE</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <Separator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.main.map((item) => {
                  return (
                    <SidebarMenuItem key={item.label}>
                      <Link href={item.url ?? '#'}>
                        <SidebarMenuButton
                          isActive={path === '/' + item.url}
                          className="rounded-[0.2rem]"
                        >
                          {item.icon}
                          {item.label}
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg grayscale">
                      <AvatarImage
                        src={user?.avatar}
                        alt={user?.name}
                      />
                      <AvatarFallback className="rounded-lg">
                        {user?.name?.substring(0, 1) || 'N'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{user?.name}</span>
                      <span className="text-muted-foreground truncate text-xs">{user?.email}</span>
                    </div>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                  side={isMobile ? 'bottom' : 'right'}
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={user?.avatar}
                          alt={user?.name}
                        />
                        <AvatarFallback className="rounded-lg">
                          {user?.name?.substring(0, 1) || 'N'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{user?.name}</span>
                        <span className="text-muted-foreground truncate text-xs">
                          {user?.email}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <User /> Account
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <Bell /> Notifications
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={(e) => {
                        const indexNextMode = themes.findIndex((t) => t === theme) + 1;
                        setTheme(themes[indexNextMode > themes.length - 1 ? 0 : indexNextMode]);
                        e.preventDefault();
                      }}
                    >
                      {theme === 'light' ? (
                        <>
                          <Sun /> Light Mode
                        </>
                      ) : theme === 'system' ? (
                        <>
                          <LaptopMinimal />
                          System Mode
                        </>
                      ) : (
                        <>
                          <Moon /> Dark Mode
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <Settings /> Setting
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  {isLogin ? (
                    <DropdownMenuItem>
                      <LogOut /> Log out
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onSelect={(e) => setOpenModalLogin(true)}>
                      <LogInIcon /> Login
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarComp>
    </>
  );
}

export { Sidebar };
