"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { cn } from "cn"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "fixed top-12 left-0 bottom-0 z-50 w-72",
          "bg-background border-r border-border",
          "data-open:animate-in data-open:slide-in-from-left-4 data-closed:animate-out data-closed:slide-out-to-left-4",
          "shadow-xl"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-12 items-center justify-between px-4 border-b border-border">
            <h2 className="text-sm font-medium text-foreground">Projects</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close sidebar"
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="my-projects" className="flex-1 flex flex-col p-4">
            <TabsList variant="line" className="w-full mb-4">
              <TabsTrigger value="my-projects" className="text-sm">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="text-sm">
                Shared
              </TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects" className="flex-1 flex flex-col">
              <div className="flex flex-1 items-center justify-center text-muted-foreground text-sm">
                No projects yet
              </div>
            </TabsContent>

            <TabsContent value="shared" className="flex-1 flex flex-col">
              <div className="flex flex-1 items-center justify-center text-muted-foreground text-sm">
                No shared projects
              </div>
            </TabsContent>
          </Tabs>

          <div className="p-4 border-t border-border">
            <Button
              className="w-full justify-center gap-2"
              variant="default"
              size="default"
            >
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}