import React from "react";

/**
 * Flexible Layout component for arranging children with spacing, direction, alignment, and wrapping.
 * Designed for layout-specific use cases (not a generic Box).
 *
 * Props:
 * - direction: flex direction (row | column)
 * - gap: spacing between children (CSS gap value)
 * - align: align-items value
 * - justify: justify-content value
 * - wrap: flex-wrap value
 * - style: additional inline styles
 * - className: additional class names
 * - children: React nodes to layout
 */
export interface LayoutProps {
  /** Sidebar position: left or right */
  sidebarPosition?: 'left' | 'right';
  /** Collapse sidebar (width 0) */
  sidebarCollapsed?: boolean;
  /** Sticky header */
  stickyHeader?: boolean;
  /** Sticky footer */
  stickyFooter?: boolean;
  /** Custom class for main layout */
  className?: string;
  /** Custom style for main layout */
  style?: React.CSSProperties;
  /** Layout children (should be Layout subcomponents) */
  children?: React.ReactNode;
}

/**
 * Props for layout area subcomponents (Header, Sidebar, Content, Footer)
 */
export interface LayoutAreaProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> & {
  Header: React.FC<LayoutAreaProps>;
  Sidebar: React.FC<LayoutAreaProps>;
  Content: React.FC<LayoutAreaProps>;
  Footer: React.FC<LayoutAreaProps>;
} = ({
  sidebarPosition = 'left',
  sidebarCollapsed = false,
  stickyHeader = false,
  stickyFooter = false,
  className,
  style,
  children,
}) => {
  // Parse children to extract layout areas
  let header: React.ReactNode = null;
  let sidebar: React.ReactNode = null;
  let content: React.ReactNode = null;
  let footer: React.ReactNode = null;

  React.Children.forEach(children, (child: any) => {
    if (!child || !child.type) return;
    if (child.type.displayName === 'LayoutHeader') header = child;
    else if (child.type.displayName === 'LayoutSidebar') sidebar = child;
    else if (child.type.displayName === 'LayoutContent') content = child;
    else if (child.type.displayName === 'LayoutFooter') footer = child;
  });

  // CSS Grid template
  const gridTemplate = [
    header ? '"header header"' : '',
    sidebar
      ? sidebarPosition === 'left'
        ? '"sidebar content"'
        : '"content sidebar"'
      : '"content content"',
    footer ? '"footer footer"' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: sidebar
      ? sidebarPosition === 'left'
        ? sidebarCollapsed
          ? '0 1fr'
          : '250px 1fr'
        : sidebarCollapsed
        ? '1fr 0'
        : '1fr 250px'
      : '1fr 0',
    gridTemplateRows: [
      header ? 'auto' : '',
      '1fr',
      footer ? 'auto' : '',
    ]
      .filter(Boolean)
      .join(' '),
    gridTemplateAreas: gridTemplate,
    minHeight: '100vh',
    ...style,
  };

  return (
    <div className={className} style={gridStyle}>
      {header && (
        <div style={{ gridArea: 'header', position: stickyHeader ? 'sticky' : undefined, top: 0, zIndex: 10 }}>
          {header}
        </div>
      )}
      {sidebar && (
        <aside
          style={{
            gridArea: 'sidebar',
            minWidth: sidebarCollapsed ? 0 : 250,
            width: sidebarCollapsed ? 0 : 250,
            overflow: 'auto',
            transition: 'width 0.2s',
            borderRight: sidebarPosition === 'left' ? '1px solid #eee' : undefined,
            borderLeft: sidebarPosition === 'right' ? '1px solid #eee' : undefined,
          }}
        >
          {sidebar}
        </aside>
      )}
      <main style={{ gridArea: 'content', minWidth: 0, overflow: 'auto' }}>{content}</main>
      {footer && (
        <footer style={{ gridArea: 'footer', position: stickyFooter ? 'sticky' : undefined, bottom: 0, zIndex: 10 }}>
          {footer}
        </footer>
      )}
    </div>
  );
};

// Subcomponents
const Header: React.FC<LayoutAreaProps> = ({ className, style, children }) => (
  <header className={className} style={style}>
    {children}
  </header>
);
Header.displayName = 'LayoutHeader';

const Sidebar: React.FC<LayoutAreaProps> = ({ className, style, children }) => (
  <nav className={className} style={style}>
    {children}
  </nav>
);
Sidebar.displayName = 'LayoutSidebar';

const Content: React.FC<LayoutAreaProps> = ({ className, style, children }) => (
  <section className={className} style={style}>
    {children}
  </section>
);
Content.displayName = 'LayoutContent';

const Footer: React.FC<LayoutAreaProps> = ({ className, style, children }) => (
  <footer className={className} style={style}>
    {children}
  </footer>
);
Footer.displayName = 'LayoutFooter';

Layout.Header = Header;
Layout.Sidebar = Sidebar;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
