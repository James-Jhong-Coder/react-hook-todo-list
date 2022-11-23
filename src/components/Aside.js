// import './Aside.css'
import styled from 'styled-components';
const Aside = styled.aside`
    flex-basis: 20%;
    max-width: 20%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`

const RenderedAside = () => {
    return (
        <Aside>aside</Aside>
    )
}

export default RenderedAside;