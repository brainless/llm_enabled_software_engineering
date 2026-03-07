import { useParams, useNavigate } from '@solidjs/router';
import { createMemo, onMount } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import Layout from '../components/Layout';
import { slides } from '../slides';

export default function SlidePage() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const slide = createMemo(() => {
    const id = parseInt(params.id ?? '0');
    return slides.find((s) => s.id === id);
  });

  onMount(() => {
    if (!slide()) navigate('/slides/1', { replace: true });
  });

  return (
    <Layout>
      <div class="h-[calc(100vh-4rem)] p-8">
        {slide() && <Dynamic component={slide()!.component} />}
      </div>
    </Layout>
  );
}
