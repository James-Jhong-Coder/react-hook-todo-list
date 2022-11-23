import styled from 'styled-components';

const Dashboard = styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-basis: 80%;
    max-width: 80%;
`

const Title = styled.h1`
    color: #181818;
    font-size: 20px;
    font-weight: 500;
`

const Panels = styled.div`
    // display: flex;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr;
    gap: 0 15px;
    height: 100%;
    margin-top: 20px;
`

const Panel = styled.div`
    background: #F5F9F9;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
`

const PanelTitle = styled.h2`
    font-size: 14px;
    color: #181818;
`

export default () => {
    return (
        <Dashboard>
            <Title>Project</Title>
            <Panels>
                <Panel>
                    <PanelTitle>To do</PanelTitle>
                </Panel>
                <Panel>
                    <PanelTitle>in Progress</PanelTitle>
                </Panel>
                <Panel>
                    <PanelTitle>completed</PanelTitle>
                </Panel>
            </Panels>
        </Dashboard>
    )
}

    // const panelData = {
    //     todo: [
    //         {
    //             title: 'Design',
    //             content: 'Design Content'
    //         }
    //     ],
    //     inProgress: [
    //         {
    //             title: 'Development',
    //             content: 'Development Content'
    //         }
    //     ],
    //     completed: [
    //         {
    //             title: 'Finish!',
    //             content: 'Finish Content'
    //         }
    //     ]
    // }

//     return (
//         <div className="main">
//             <h1>Projects</h1>
//             <Panel></Panel>
//             <Panel></Panel>
//             <Panel></Panel>
//         </div>
//     )
// }

// export default Dashboard;