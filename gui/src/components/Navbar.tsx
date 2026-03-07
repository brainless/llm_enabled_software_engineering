import { useNavigate, useParams } from '@solidjs/router';
import { slides } from '../slides';

export default function Navbar() {
  const params = useParams();
  const navigate = useNavigate();

  function handlePlay() {
    navigate('/slides/1');
  }

  function handleNext() {
    const current = parseInt(params.id ?? '1');
    const next = slides.find((s) => s.id === current + 1);
    if (next) navigate(`/slides/${next.id}`);
  }

  function handlePrev() {
    const current = parseInt(params.id ?? '1');
    const prev = slides.find((s) => s.id === current - 1);
    if (prev) navigate(`/slides/${prev.id}`);
  }

  const currentId = () => parseInt(params.id ?? '1');
  const isFirst = () => currentId() <= 1;
  const isLast = () => currentId() >= slides[slides.length - 1].id;

  return (
    <div class="navbar bg-base-100 border-b border-base-300 z-10">
      <div class="navbar-start">
        <label for="slide-drawer" class="btn btn-ghost btn-square drawer-button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </div>
      <div class="navbar-center">
        <span class="text-lg font-semibold">LLM Enabled Software Engineering</span>
      </div>
      <div class="navbar-end gap-2">
        <button class="btn btn-ghost btn-sm" onClick={handlePrev} disabled={isFirst()}>
          ‹ Prev
        </button>
        <button class="btn btn-primary btn-sm" onClick={handlePlay}>
          ▶ Play
        </button>
        <button class="btn btn-ghost btn-sm" onClick={handleNext} disabled={isLast()}>
          Next ›
        </button>
      </div>
    </div>
  );
}
