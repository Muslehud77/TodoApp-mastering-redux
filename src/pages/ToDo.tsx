import TodoContainer from '@/components/todo/TodoContainer';
import Container from '@/components/ui/Container';


const ToDo = () => {
    return (
        <Container>
            <h1 className='text-3xl text-center my-10 font-semibold'>My Todos</h1>
            <TodoContainer/>
        </Container>
    );
};

export default ToDo;