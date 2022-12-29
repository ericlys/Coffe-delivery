import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, Space } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Space/>
      <Outlet />
    </LayoutContainer>
  )
}
