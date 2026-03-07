import { ParentProps } from 'solid-js';
import Navbar from './Navbar';
import SlideList from './SlideList';

export default function Layout(props: ParentProps) {
  return (
    <div class="drawer lg:drawer-open min-h-screen">
      <input id="slide-drawer" type="checkbox" class="drawer-toggle" />

      <div class="drawer-content flex flex-col">
        <Navbar />
        <main class="flex-1 overflow-hidden">
          {props.children}
        </main>
      </div>

      <div class="drawer-side z-20">
        <label for="slide-drawer" aria-label="close sidebar" class="drawer-overlay" />
        <SlideList />
      </div>
    </div>
  );
}
