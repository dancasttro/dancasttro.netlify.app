import React from 'react'
import SocialLinks from '../SocialLinks'
import hand from '../../images/hand.svg'

import Avatar from '../Avatar'
import * as S from './styles'

const Profile = () => {

  return (
    <S.Container>
      <Avatar />
      <S.Name>Daniel Castro</S.Name>
      <S.Position>Front-End Engineer</S.Position>
      <S.Description>
        Olá, meu nome é Daniel Castro e sou Front-End Engineer apaixonado pela web, Games, Jiu-Jitsu e Heavy Metal
        <S.HandIcon src={hand} />
      </S.Description>
      <SocialLinks />
    </S.Container>
  )
}

export default Profile