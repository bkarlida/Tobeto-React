import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

type Props = {}

const signedOut = ({signIn: signIn}: {signIn: any}) => {
  return (
    <div>
    <Menu.Item>
       <Button  onClick={signIn} primary>Giriş yap</Button>
       <Button primary style={{marginLeft:'0.5em'}}>Kayıt Ol</Button> 
    </Menu.Item>
    </div>
  )
}

export default signedOut

