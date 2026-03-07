import { A, useParams } from '@solidjs/router';
import { For } from 'solid-js';
import { slides } from '../slides';

export default function SlideList() {
  const params = useParams();
  const currentId = () => parseInt(params.id ?? '1');

  return (
    <ul class="menu bg-base-200 min-h-full w-72 p-4 gap-1">
      <li class="menu-title text-xs uppercase tracking-widest mb-2">Slides</li>
      <For each={slides}>
        {(slide) => (
          <li>
            <A
              href={`/slides/${slide.id}`}
              class={currentId() === slide.id ? 'active' : ''}
            >
              <span class="text-xs font-mono text-base-content/50 w-6">{slide.id}</span>
              {slide.title}
            </A>
          </li>
        )}
      </For>
    </ul>
  );
}
