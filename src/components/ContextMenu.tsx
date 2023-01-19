import * as Menu from '@radix-ui/react-context-menu';
import { Modal } from './HomeChat/Modal';

interface ContextMenuProps {
  children: React.ReactNode;
  menuComponent: React.ReactNode;
}

export default function ContextMenu(contextMenuProps: ContextMenuProps) {
  const { children, menuComponent } = contextMenuProps;

  return (
    <Menu.Root>
      <Modal />
      <Menu.Trigger asChild>{children}</Menu.Trigger>

      <Menu.Portal>
        <Menu.Content>{menuComponent}</Menu.Content>
      </Menu.Portal>
    </Menu.Root>
  );
}
