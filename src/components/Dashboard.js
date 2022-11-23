import styled from 'styled-components';
import { useReducer } from "react";
import TodoCard from './TodoCard';

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
    margin-bottom: 20px;
`

const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #53AB9A;
    background: #E9F1F0;
    padding: 10px 0px;
    cursor: pointer;
    border: none;
    user-select: none;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 20px;
`

const initialTodos = {
    todo: [
        {
            title: 'todo1',
            content: 'todo1'
        }
    ],
    inProgress: [
        {
            title: 'todo in progress',
            content: 'todo in progress'
        }
    ],
    completed: [
        {
            title: 'todo in completed',
            content: 'todo in completed'
        }
    ]
}

const RenderedDashboard = () => {
    const todoReducer = (state, action) => {

    }
    const [todos, todoDispatch] = useReducer(todoReducer, initialTodos);

    return (
        <Dashboard>
            <Title>Project</Title>
            <Panels>
                <Panel>
                    <PanelTitle>To do</PanelTitle>
                    <AddButton>+</AddButton>
                    {
                        todos.todo.map(item => <TodoCard title={item.title} content={item.content} />)
                    }
                </Panel>
                <Panel>
                    <PanelTitle>in Progress</PanelTitle>
                    <AddButton>+</AddButton>
                    {
                        todos.inProgress.map(item => <TodoCard title={item.title} content={item.content} />)
                    }
                </Panel>
                <Panel>
                    <PanelTitle>completed</PanelTitle>
                    <AddButton>+</AddButton>
                    {
                        todos.completed.map(item => <TodoCard title={item.title} content={item.content} />)
                    }
                </Panel>
            </Panels>
        </Dashboard>
    )
}

export default RenderedDashboard;