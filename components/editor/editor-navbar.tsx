"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

export function EditorNavbar({ sidebarOpen, onSidebarToggle }: { sidebarOpen: boolean; onSidebarToggle: () => void }) {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 h-12 border-b",
        "bg-background/80 backdrop-blur-sm",
        "border-border"
      )}
    >
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onSidebarToggle}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            className="h-8 w-8"
          >
            {sidebarOpen ? (
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeftOpen className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">ArchFlow</span>
        </div>

        <div className="flex items-center gap-2" />
      </div>
    </header>
  )
}