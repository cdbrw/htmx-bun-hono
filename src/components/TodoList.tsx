export default function TodoList() {
  return (
    <div class="mt-8 w-full max-w-m dark:text-white">
      <h1>My Todos</h1>
      <div
        class="mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flow-root">
          <ul
            hx-get="/api/todos"
            hx-trigger="load, todo-delete from:body"
            id="todo-list"
            role="list"
            class="divide-y divide-gray-200 dark:divide-gray-700"
          ></ul>
        </div>
      </div>
    </div>
  );
}