import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { EnquiryForm } from './enquiry-form';

const DemoContext = createContext<(() => void) | null>(null);

export function useDemoModal() {
  const open = useContext(DemoContext);
  if (!open) throw new Error('Demo buttons must be inside DemoModalProvider');
  return open;
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLElement | null>(null);
  const show = useCallback(() => {
    trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpen(true);
  }, []);
  return <DemoContext.Provider value={show}>
    {children}
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="demo-modal" onCloseAutoFocus={event => { event.preventDefault(); trigger.current?.focus(); }}>
        <DialogTitle>Request a demo</DialogTitle>
        <DialogDescription>Let’s discuss your organization’s asset-management requirements.</DialogDescription>
        <EnquiryForm />
      </DialogContent>
    </Dialog>
  </DemoContext.Provider>;
}