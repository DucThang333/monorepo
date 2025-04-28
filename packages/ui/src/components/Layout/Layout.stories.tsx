import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Layout from "./Layout";

const meta: Meta<typeof Layout> = {
  title: "Layout/Layout",
  component: Layout,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Layout>;

export const Basic: Story = {
  render: () => (
    <Layout>
      <Layout.Header style={{ background: '#f5f5f5', padding: 16 }}>Header</Layout.Header>
      <Layout.Sidebar style={{ background: '#e0e0e0', padding: 16 }}>Sidebar</Layout.Sidebar>
      <Layout.Content style={{ background: '#fff', padding: 16 }}>Content</Layout.Content>
      <Layout.Footer style={{ background: '#f5f5f5', padding: 16 }}>Footer</Layout.Footer>
    </Layout>
  ),
  name: 'Basic layout',
};

export const SidebarRight: Story = {
  render: () => (
    <Layout sidebarPosition="right">
      <Layout.Header style={{ background: '#f5f5f5', padding: 16 }}>Header</Layout.Header>
      <Layout.Sidebar style={{ background: '#e0e0e0', padding: 16 }}>Sidebar (Right)</Layout.Sidebar>
      <Layout.Content style={{ background: '#fff', padding: 16 }}>Content</Layout.Content>
      <Layout.Footer style={{ background: '#f5f5f5', padding: 16 }}>Footer</Layout.Footer>
    </Layout>
  ),
  name: 'Sidebar right',
};

export const CollapsedSidebar: Story = {
  render: () => (
    <Layout sidebarCollapsed>
      <Layout.Header style={{ background: '#f5f5f5', padding: 16 }}>Header</Layout.Header>
      <Layout.Sidebar style={{ background: '#e0e0e0', padding: 16 }}>Sidebar (Collapsed)</Layout.Sidebar>
      <Layout.Content style={{ background: '#fff', padding: 16 }}>Content</Layout.Content>
      <Layout.Footer style={{ background: '#f5f5f5', padding: 16 }}>Footer</Layout.Footer>
    </Layout>
  ),
  name: 'Collapsed sidebar',
};

export const StickyHeaderFooter: Story = {
  render: () => (
    <Layout stickyHeader stickyFooter>
      <Layout.Header style={{ background: '#f5f5f5', padding: 16 }}>Sticky Header</Layout.Header>
      <Layout.Sidebar style={{ background: '#e0e0e0', padding: 16 }}>Sidebar</Layout.Sidebar>
      <Layout.Content style={{ background: '#fff', padding: 16, minHeight: 600 }}>
        Content with scrollable area<br />
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i}>Row {i + 1}</div>
        ))}
      </Layout.Content>
      <Layout.Footer style={{ background: '#f5f5f5', padding: 16 }}>Sticky Footer</Layout.Footer>
    </Layout>
  ),
  name: 'Sticky header & footer',
};

export const StickyHeaderScreen: Story = {
  render: () => (
    <Layout stickyHeader>
      <Layout.Header style={{ background: '#1976d2', color: '#fff', padding: 18, fontWeight: 'bold' }}>
        Sticky App Bar
      </Layout.Header>
      <Layout.Content style={{ background: '#fafafa', padding: 32, minHeight: '80vh' }}>
        <h2>Welcome to the App!</h2>
        <p>This layout keeps the header visible at the top while you scroll the content.</p>
        <div style={{ height: 800, background: '#e3e3e3', borderRadius: 8, margin: '24px 0', padding: 24 }}>
          Scrollable content area
        </div>
      </Layout.Content>
    </Layout>
  ),
  name: 'Sticky header, content fills screen',
};

export const BlogLayout: Story = {
  render: () => (
    <Layout sidebarPosition="left">
      <Layout.Header style={{ background: '#222', color: '#fff', padding: 20, fontSize: 24 }}>
        My Tech Blog
      </Layout.Header>
      <Layout.Sidebar style={{ background: '#f8f9fa', padding: 20, minWidth: 220 }}>
        <div style={{ fontWeight: 'bold', marginBottom: 12 }}>Categories</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>React</li>
          <li>TypeScript</li>
          <li>UI/UX</li>
          <li>DevOps</li>
        </ul>
      </Layout.Sidebar>
      <Layout.Content style={{ background: '#fff', padding: 32 }}>
        <h1>How to Build a Flexible Layout Component</h1>
        <p style={{ color: '#666' }}>
          April 28, 2025 • by <b>Thang</b>
        </p>
        <p>
          In this article, you’ll learn how to create a reusable and powerful layout system in React, supporting headers, sidebars, and more.
        </p>
        <h2>Why Use a Layout Component?</h2>
        <p>
          Layout components help keep your app consistent and easy to maintain. You can combine header, sidebar, and content areas as needed.
        </p>
      </Layout.Content>
      <Layout.Footer style={{ background: '#222', color: '#fff', padding: 16, textAlign: 'center' }}>
        © 2025 My Tech Blog
      </Layout.Footer>
    </Layout>
  ),
  name: 'Blog layout',
};
