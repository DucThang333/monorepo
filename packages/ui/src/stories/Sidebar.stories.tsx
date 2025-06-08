import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from '@package/i18next';
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
  SidebarMenuBadge,
  SidebarSeparator,
  SidebarTrigger,
  SidebarLanguageSwitcher,
  SidebarThemeSwitcher
} from '../components/Sidebar';
import { Home, User, PieChart, FileText, Settings, HelpCircle, LogOut } from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <div className="h-screen w-screen flex">
        <SidebarProvider>
          <Story />
        </SidebarProvider>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => {
    const { t } = useTranslation();
    const [theme, setTheme] = React.useState<"light" | "dark" | "system">("light");
    
    return (
      <>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{t('app.name')}</h2>
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton active>
                    <Home size={18} />
                    <span>{t('sidebar.dashboard')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <User size={18} />
                    <span>{t('sidebar.profile')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <PieChart size={18} />
                    <span>{t('sidebar.analytics')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FileText size={18} />
                    <span>{t('sidebar.reports')}</span>
                    <SidebarMenuBadge>5</SidebarMenuBadge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            
            <SidebarSeparator />
            
            <SidebarGroup label="sidebar.settings">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings size={18} />
                    <span>{t('sidebar.settings')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <HelpCircle size={18} />
                    <span>{t('sidebar.help')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="flex items-center justify-between px-3">
              <SidebarMenuButton className="w-auto px-2">
                <LogOut size={18} />
                <span>{t('sidebar.logout')}</span>
              </SidebarMenuButton>
              <div className="flex items-center gap-2">
                <SidebarThemeSwitcher theme={theme} onThemeChange={setTheme} />
                <SidebarLanguageSwitcher />
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">{t('sidebar.dashboard')}</h1>
          <p className="text-muted-foreground">
            {t('messages.welcome')}
          </p>
        </div>
      </>
    );
  }
};

export const RightAligned: Story = {
  render: () => {
    const { t } = useTranslation();
    
    return (
      <>
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">{t('sidebar.dashboard')}</h1>
          <p className="text-muted-foreground">
            {t('messages.welcome')}
          </p>
        </div>
        
        <Sidebar side="right">
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <SidebarTrigger />
              <h2 className="text-lg font-semibold">{t('app.name')}</h2>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton active>
                    <Home size={18} />
                    <span>{t('sidebar.dashboard')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <User size={18} />
                    <span>{t('sidebar.profile')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <PieChart size={18} />
                    <span>{t('sidebar.analytics')}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="flex items-center justify-between px-3">
              <SidebarLanguageSwitcher />
              <SidebarMenuButton className="w-auto px-2">
                <LogOut size={18} />
                <span>{t('sidebar.logout')}</span>
              </SidebarMenuButton>
            </div>
          </SidebarFooter>
        </Sidebar>
      </>
    );
  }
};

export const Collapsed: Story = {
  render: () => {
    const { t } = useTranslation();
    
    return (
      <>
        <Sidebar collapsed>
          <SidebarHeader>
            <div className="flex items-center justify-center">
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton active className="justify-center">
                    <Home size={18} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton className="justify-center">
                    <User size={18} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton className="justify-center">
                    <PieChart size={18} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton className="justify-center">
                    <FileText size={18} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            
            <SidebarSeparator />
            
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="justify-center">
                    <Settings size={18} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="justify-center">
                    <HelpCircle size={18} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="flex flex-col items-center gap-2 py-2">
              <SidebarLanguageSwitcher />
              <SidebarMenuButton className="w-auto justify-center px-2">
                <LogOut size={18} />
              </SidebarMenuButton>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">{t('sidebar.dashboard')}</h1>
          <p className="text-muted-foreground">
            {t('messages.welcome')}
          </p>
        </div>
      </>
    );
  }
}; 