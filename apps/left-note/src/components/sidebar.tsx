'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Input } from '@/components/input';
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
} from '@package/ui/component/sidebar';
import {
  Bell,
  LayoutDashboardIcon,
  LogOut,
  PanelLeftOpen,
  PanelRightOpen,
  User,
} from 'lucide-react';
import { ReactNode } from 'react';

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
  ],
  footer: [],
};

function Sidebar() {
  const user = {
    name: 'Luu Duc Thang',
    email: 'thangld180401@gmail.com',
    avatar: '',
  };
  const { isMobile, setOpen, open } = useSidebar();
  return (
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
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {menuItems.main.map((item) => {
              return (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton>
                    {item.icon}
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
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
                      src={user.avatar}
                      alt={user.name}
                    />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="text-muted-foreground truncate text-xs">{user.email}</span>
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
                        src={user.avatar}
                        alt={user.name}
                      />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{user.name}</span>
                      <span className="text-muted-foreground truncate text-xs">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User /> Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell /> Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarComp>
  );
}

export { Sidebar };
