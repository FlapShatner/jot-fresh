import Editor from '../editor'
import { redirect } from 'next/navigation'
import { validateRequest } from '@/actions/auth-actions'

async function EditorPage() {
 const { user, session } = await validateRequest()
 if (!user) {
  return redirect('/login')
 }
 return <Editor nid={null} />
}

export default EditorPage
