import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarTrigger,
  SidebarSeparator,
  SidebarInput,
  SidebarMenuSkeleton,
  SidebarRail,
  SidebarInset
} from ".";
import {
  Home,
  Settings,
  User,
  Mail,
  Calendar,
  HelpCircle,
  Search,
  Plus,
  Bell,
  FileText,
  Bookmark,
  Star,
  HeartPulse,
  Building2,
  Users,
  ShoppingCart,
  BarChart,
  Upload,
  Lightbulb,
  Layers,
  FolderClosed,
  Package,
  MoreHorizontal
} from "lucide-react";

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
  decorators: [(Story) => (
    <div style={{ height: 600, width: '100%', display: 'flex' }}>
      <Story />
    </div>
  )],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar style={{ height: 600 }}>
        <SidebarHeader>
          <div className="flex items-center px-3 py-2 justify-center">
            <h2 className="text-lg font-semibold group-data-[state=collapsed]:hidden">Dashboard</h2>
            <h2 className="text-lg font-semibold group-data-[state=collapsed]:block hidden">D</h2>
          </div>
          <div className="px-2 group-data-[state=collapsed]:hidden">
            <SidebarInput placeholder="Search..." />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus size={16} />
            </SidebarGroupAction>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip="Home dashboard">
                  <Home size={18} />
                  {/* <span>Home</span> */}
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Inbox messages">
                  <Mail size={18} />
                  <span>Messages</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>12</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Calendar">
                  <Calendar size={18} />
                  <span>Calendar</span>
                </SidebarMenuButton>
                <SidebarMenuAction>
                  <MoreHorizontal size={16} />
                </SidebarMenuAction>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Documents">
                  <FileText size={18} />
                  <span>Documents</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                      <span>Recent files</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton isActive>
                      <span>Shared with me</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                      <span>Archived</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton variant="outline" tooltip="Bookmarks">
                  <Bookmark size={18} />
                  <span>Bookmarks</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Analytics</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Performance dashboard">
                  <BarChart size={18} />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Reports">
                  <FileText size={18} />
                  <span>Reports</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings size={18} />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Help center">
                  <HelpCircle size={18} />
                  <span>Help</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="User profile">
                <User size={18} />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Bell size={18} />
                <span>Notifications</span>
              </SidebarMenuButton>
              <SidebarMenuBadge className="bg-primary rounded-full">
                <p className="text-xs text-white">5</p>
              </SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 p-4">
        <SidebarTrigger />
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p className="mt-2">Click the button above to toggle the sidebar.</p>
        </div>
      </div>
    </SidebarProvider>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <Sidebar style={{ height: 600 }}>
        <SidebarHeader>
          <div className="flex items-center justify-center px-3 py-4">
            <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
              <Layers size={18} />
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Home" isActive>
                  <Home size={18} />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Messages">
                  <Mail size={18} />
                  <span>Messages</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>3</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Calendar">
                  <Calendar size={18} />
                  <span>Calendar</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings size={18} />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Profile">
                <User size={18} />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 p-4">
        <SidebarTrigger />
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Collapsed Sidebar</h2>
          <p className="mt-2">Hover over icons to see tooltips.</p>
        </div>
      </div>
    </SidebarProvider>
  ),
};

export const RightSidebar: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex-1 p-4">
        <SidebarTrigger />
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p className="mt-2">Sidebar is on the right side.</p>
        </div>
      </div>
      <Sidebar side="right" style={{ height: 600 }}>
        <SidebarHeader>
          <div className="px-3 py-2">
            <h2 className="text-lg font-semibold">Right Sidebar</h2>
          </div>
          <div className="px-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <SidebarInput
                placeholder="Search..."
                className="pl-8"
              />
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home size={18} />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users size={18} />
                  <span>Team</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Building2 size={18} />
                  <span>Organizations</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton isActive>
                      <span>Current org</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                      <span>All organizations</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings size={18} />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  ),
};

export const WithSkeletons: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar style={{ height: 600 }}>
        <SidebarHeader>
          <div className="px-3 py-2">
            <h2 className="text-lg font-semibold">Loading State</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuSkeleton showIcon />
              <SidebarMenuSkeleton showIcon />
              <SidebarMenuSkeleton showIcon />
            </SidebarMenu>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Categories</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuSkeleton />
              <SidebarMenuSkeleton />
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 p-4">
        <SidebarTrigger />
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Content Loading</h2>
          <p className="mt-2">Example of skeleton loading state.</p>
        </div>
      </div>
    </SidebarProvider>
  ),
};

export const FloatingVariant: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="floating" style={{ height: 600 }}>
        <SidebarHeader>
          <div className="flex items-center px-3 py-2">
            <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center mr-2">
              <HeartPulse size={18} />
            </div>
            <h2 className="text-lg font-semibold">Healthcare App</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Medical Records</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <FolderClosed size={18} />
                  <span>Patient Files</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FileText size={18} />
                  <span>Prescriptions</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>New</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Bell size={18} />
                  <span>Appointments</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User size={18} />
                <span>Doctor Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 p-4 bg-slate-50">
        <SidebarTrigger />
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Floating Variant</h2>
          <p className="mt-2">The sidebar floats above the content with nice shadows.</p>
        </div>
      </div>
      <SidebarRail />
    </SidebarProvider>
  ),
};

export const InsetVariant: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="inset" style={{ height: 600 }}>
        <SidebarHeader>
          <div className="flex items-center px-3 py-2">
            <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center mr-2">
              <ShoppingCart size={18} />
            </div>
            <h2 className="text-lg font-semibold">E-Commerce</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Store</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Package size={18} />
                  <span>Products</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ShoppingCart size={18} />
                  <span>Orders</span>
                </SidebarMenuButton>
                <SidebarMenuBadge className="bg-red-500">2</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users size={18} />
                  <span>Customers</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Star size={18} />
                  <span>Reviews</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex-1 p-4">
          <SidebarTrigger />
          <div className="mt-4 p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold">Inset Variant</h2>
            <p className="mt-2">The content area is inset from the background.</p>
          </div>
        </div>
      </SidebarInset>
      <SidebarRail />
    </SidebarProvider>
  ),
};

export const CollapsibleMenuItems: Story = {
  render: () => {
    const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
      projects: true,
      settings: false,
    });

    const toggleItem = (key: string) => {
      setOpenItems(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    return (
      <SidebarProvider>
        <Sidebar style={{ height: 600 }}>
          <SidebarHeader>
            <div className="flex items-center px-3 py-2">
              <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center mr-2">
                <Layers size={18} />
              </div>
              <h2 className="text-lg font-semibold">Collapsible Items</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <Home size={18} />
                    <span>Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Collapsible Projects section */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => toggleItem('projects')}
                    aria-expanded={openItems.projects}
                  >
                    <FolderClosed size={18} />
                    <span>Projects</span>
                    <svg
                      className={`ml-auto h-4 w-4 shrink-0 transition-transform ${openItems.projects ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6" />
                    </svg>
                  </SidebarMenuButton>

                  {openItems.projects && (
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton isActive>
                          <span>Active Project</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Project Alpha</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Project Beta</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Calendar size={18} />
                    <span>Calendar</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Administration</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users size={18} />
                    <span>Team</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Collapsible Settings section */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => toggleItem('settings')}
                    aria-expanded={openItems.settings}
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                    <svg
                      className={`ml-auto h-4 w-4 shrink-0 transition-transform ${openItems.settings ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6" />
                    </svg>
                  </SidebarMenuButton>

                  {openItems.settings && (
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Profile</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Security</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Notifications</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>API Keys</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <User size={18} />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 p-4">
          <SidebarTrigger />
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Collapsible Menu Items</h2>
            <p className="mt-2">Click on Projects or Settings to expand/collapse the submenu.</p>
          </div>
        </div>
      </SidebarProvider>
    );
  }
};
