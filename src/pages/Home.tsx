import Layout from '../layouts';
import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <Layout>
      <div class="mt-8 max-w-sm mx-auto">
        <NewTodo/>
        <TodoList/>
      </div>
    </Layout>
  );
}