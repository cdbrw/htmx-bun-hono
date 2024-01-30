import { Hono } from 'hono';
import Home from './pages/Home';
import { db } from '../db';
import { todos } from '../db/schema';
import TodoItem from './components/TodoItem';
import { eq } from 'drizzle-orm';

const app = new Hono();

app.get('/', (c) => {
  return c.html(<Home/>);
});

app.get('/api/todos', async (c) => {
  const results = await db.select().from(todos);
  
  return c.html(
    <>
      {results.map(todo => <TodoItem {...todo} />)}
    </>,
  );
});

app
  .post('/api/todo', async (c) => {
    const { content } = await c.req.json();
    
    const results = await db.insert(todos).values({ content }).returning();
    if (!results || results.length < 1) {
      return c.html(<></>);
    }
    
    return c.html(<TodoItem {...results[0]} />);
  })
  .delete(async (c) => {
    const { todoId } = await c.req.json();
    
    await db.delete(todos).where(eq(todos.id, todoId));
    
    return c.body('✔', 200, {
      'HX-Trigger': 'todo-delete',
    });
  });

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
