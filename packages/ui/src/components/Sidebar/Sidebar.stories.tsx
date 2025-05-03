import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarSeparator
} from ".";
import { 
  Home, 
  Settings, 
  User, 
  Mail, 
  Calendar,
  HelpCircle
} from "lucide-react";

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
  decorators: [(Story) => (
    <div style={{ height: 600, width: '100%', display: 'flex' }}>
      <Story />
    </div>
  )],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar style={{ height: 600 }}>
        <SidebarHeader>
          <div className="px-3 py-2">
            <h2 className="text-lg font-semibold">Sidebar</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup label="Main">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton active>
                  <Home size={18} />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Mail size={18} />
                  <span>Messages</span>
                </SidebarMenuButton>
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
          
          <SidebarGroup label="Settings">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings size={18} />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
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
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p className="mt-2">Click the button above to toggle the sidebar.</p>
        </div>
      </div>
    </SidebarProvider>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Sidebar collapsed style={{ height: 600 }}>
      <SidebarContent>
        <div style={{ padding: 16 }}>Sidebar (Collapsed)</div>
      </SidebarContent>
    </Sidebar>
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
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup label="Navigation">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home size={18} />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  ),
};
