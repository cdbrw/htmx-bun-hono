import { Todo } from '../../db/schema';

export default function TodoItem({ id, content, timestamp }: Todo) {
  return (
    <li key={id} id={`todo-${id}`} class="py-3 sm:py-4">
      <div class="flex items-center">
        <div class="flex-1 min-w-0 ms-4">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{content}</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">{timestamp}</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <button
            name="todoId"
            value={id}
            hx-delete="/api/todo"
            hx-swap="delete"
            hx-target={`#todo-${id}`}
            hx-ext="json-enc"
            hx-trigger="click"
          >
            x
          </button>
        </div>
      </div>
    </li>
  );
}