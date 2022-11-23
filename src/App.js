import styled from 'styled-components';
import Aside from './components/Aside'
import Dashboard from './components/Dashboard'
import './App.css';

const Main = styled.main`
  background: #FEFEFE;
  width: 80%;
  height: 80%;
  border-radius: 15px;
  box-shadow: 0px 0px 5px #bdb2b2;
  display: flex;
`

const Divider = styled.span`
  height: 100%;
  width: 1px;
  background: #dfdbdb;
`
export default () => {
  return (
    <Main>
      <Aside />
      <Divider />
      <Dashboard />
    </Main>
  )
}