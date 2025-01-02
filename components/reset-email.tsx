
import { Body, Button, Container, Head, Html, Preview, Section, Link, Text } from '@react-email/components'

const ResetPasswordEmail = ({ resetLink }: { resetLink: string }) => {
 console.log(resetLink)
 const ifText = `If you don't want to change your password, just ignore and delete this message.`
 const ifText2 = `If link above doesn't work, copy and paste this address into your address bar:`
 return (
  <Html>
   <Head />
   <Preview>Reset your Jot password</Preview>
   <Body style={main}>
    <Container style={container}>
     <Section>
      <Text style={heading}>From Jot</Text>
      <Text style={text}>Someone recently requested a password change for your Jot account. If this was you, you can set a new password here:</Text>
      <Button
       style={button}
       href={resetLink}>
       Reset your password
      </Button>
      <Text style={text}>{ifText}</Text>
      <Text style={text}>This link will expire in 1 hour</Text>
      <Text style={smallText}>{ifText2}</Text>
      <Text style={blueText}> {resetLink}</Text>
     </Section>
    </Container>
   </Body>
  </Html>
 )
}

export default ResetPasswordEmail

const main = {
 backgroundColor: 'rgb(35, 39, 46)',
 padding: '10px ',
}

const container = {
 backgroundColor: 'rgb(35, 39, 46)',
 border: '1px solid rgb(192, 204, 216)',
 borderRadius: '12px',
 padding: '45px',
}

const heading = {
 fontSize: '24px',
 fontWeight: '500',
 color: '#fff',
 marginBottom: '20px',
}

const smallText = {
 fontSize: '12px',
 fontFamily: "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
 fontWeight: '300',
 color: 'rgb(192, 204, 216)',
 lineHeight: '26px',
 marginTop: '40px',
}

const blueText = {
 fontSize: '12px',
 fontFamily: "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
 fontWeight: '300',
 color: 'rgb(93, 177, 189)',
 lineHeight: '26px',
 textDecoration: 'underline',
}

const text = {
 fontSize: '16px',
 fontFamily: "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
 fontWeight: '300',
 color: 'rgb(192, 204, 216)',
 lineHeight: '26px',
}

const button = {
 backgroundColor: 'rgb(93, 177, 189)',
 borderRadius: '4px',
 color: 'rgb(35, 39, 46)',
 fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
 fontWeight: 'bold',
 fontSize: '15px',
 textDecoration: 'none',
 textAlign: 'center' as const,
 display: 'block',
 width: '210px',
 padding: '14px 7px',
}
