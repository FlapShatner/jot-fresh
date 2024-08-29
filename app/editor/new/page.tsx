import Editor from '../editor'
import { redirect } from 'next/navigation'
import { validateRequest } from '@/actions/auth-actions'
import EditorCtx from '../editor-ctx'

async function EditorPage() {
 const { user, session } = await validateRequest()
 if (!user) {
  return redirect('/login')
 }
 return (
  <EditorCtx>
   <Editor nid={null} />
  </EditorCtx>
 )
}

export default EditorPage
