export async function GET(request: Request, { params }: { params: Promise<{ tok: string }> }) {
 const token = (await params).tok
}
