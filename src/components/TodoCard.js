import styled from 'styled-components';
const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0px 0px 2px #bdb2b2;
    background: #ffffff;
    border-radius: 5px;
`

const RenderedCard = (props) => {
    return (
        <Card>
            <span>{ props.title }</span>
            <span>{ props.content }</span>
        </Card>
    )
}

export default RenderedCard