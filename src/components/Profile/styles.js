import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  margin: 0 auto;
  width: 405px;
  text-align: center;
  align-self: center;
  ${media.lessThan("480px")`
    width: 100%;
    padding: 0 10px 0;
  `}
`
export const Name = styled.h1`
  color: #fff;
  font-size: 26px;
  margin-top: 10px;
`
export const Position = styled.h2`
  font-size: 16px;
  color: #fff;
`
export const HandIcon = styled.img`
  width: 20px;
  top: 4px;
  left: 3px;
  position: relative;
`

export const Description = styled.p`
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
`