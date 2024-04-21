import { clearChats, getChats } from '@/app/actions'
import { ClearHistory } from '@/components/clear-history'
import { SidebarItems } from '@/components/sidebar-items'
import { ThemeToggle } from '@/components/theme-toggle'
import { cache } from 'react'
import Image from 'next/image'
import SettingsIcon from '../icons/settings.svg'
import { start } from 'repl'
import { CiSettings } from 'react-icons/ci'

interface SidebarListProps {
  userId?: string
  children?: React.ReactNode
}

const loadChats = cache(async (userId?: string) => {
  return await getChats(userId)
})

export async function SidebarList({ userId }: SidebarListProps) {
  const chats = (await loadChats(userId)) || []

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        {chats?.length ? (
          <div className="space-y-2 px-2">
            <SidebarItems chats={chats} />
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
        )}
      </div>
      <div
        className=" bg-slate-50 w-full ms-7"
        style={{ height: '0.05rem', backgroundColor: 'hsl(var(--border))' }}
      ></div>
      <div className="flex p-4 pt-0 justify-between items-center">
        <div className="flex items-center p-4 truncate gap-3">
          <Image src="/user.png" width={35} height={35} alt="user" />{' '}
          <p>{userId}</p>
        </div>
        {/* <Image
          src="/settings.png"
          width={25}
          height={25}
          alt="settings"
          style={{ width: '35px !important', height: '35px' }}
        /> */}
        <CiSettings size={35} />
        {/* <SettingsIcon /> */}
      </div>
      {/* <div className="flex items-center justify-between p-4">
        <ThemeToggle /> */}
      {/* <ClearHistory clearChats={clearChats} isEnabled={chats?.length > 0} /> */}
      {/* </div> */}
    </div>
  )
}
