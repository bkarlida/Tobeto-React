import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'


type Props = {}

const signedIn = ({signOut : signOut}: {signOut: any}) => {
  return (
    <div>
    <Menu.Item>
        <Image avatar spaced="right" src=""/>
        <Dropdown pointing="top left" text="Engin">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
    </div>
  )
}

export default signedIn
