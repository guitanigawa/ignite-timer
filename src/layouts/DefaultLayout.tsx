import { Container, Logo } from '../styles/Container.styles'
import NavButtons from '../components/NavButtons'
import LogoImg from '../assets/Logo.svg'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <Container>
      <NavButtons />
      <Logo src={LogoImg} />

      <Outlet />
    </Container>
  )
}
