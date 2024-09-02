import React from 'react'
import {
 Avatar,
 Email,
 EyeOpen,
 EyeClosed,
 Login,
 Logout,
 Trash,
 Save,
 New,
 NewNote,
 FolderNew,
 Folder,
 Home,
 Lock,
 Close,
 Check,
 FolderOpen,
 Note,
 FolderMove,
 FolderEdit,
} from '@/app/icons'

function Page() {
 return (
  <div className='p-12'>
   <ul className='flex flex-wrap gap-4 text-xl'>
    <li>
     <Avatar />
     Avatar
    </li>
    <li>
     <Home />
     Home
    </li>
    <li>
     <Lock />
     Lock
    </li>
    <li>
     <Email />
     Email
    </li>
    <li>
     <EyeOpen />
     EyeOpen
    </li>
    <li>
     <EyeClosed />
     EyeClosed
    </li>
    <li>
     <Login />
     Login
    </li>
    <li>
     <Logout />
     Logout
    </li>
    <li>
     <Trash />
     Trash
    </li>
    <li>
     <Save />
     Save
    </li>
    <li>
     <New />
     New
    </li>
    <li>
     <NewNote />
     NewNote
    </li>
    <li>
     <FolderNew />
     FolderNew
    </li>
    <li>
     <Folder />
     Folder
    </li>
    <li>
     <Close />
     Close
    </li>
    <li>
     <Check />
     Check
    </li>
    <li>
     <FolderOpen />
     FolderOpen
    </li>

    <li>
     <Note />
     Note
    </li>
    <li>
     <FolderMove />
     FolderMove
    </li>
    <li>
     <FolderEdit />
     FolderEdit
    </li>
   </ul>
  </div>
 )
}

export default Page
