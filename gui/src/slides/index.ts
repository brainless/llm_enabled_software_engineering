import { Component } from 'solid-js';
import HelloWorld from './HelloWorld';

export interface Slide {
  id: number;
  title: string;
  component: Component;
}

export const slides: Slide[] = [
  { id: 1, title: 'Hello World', component: HelloWorld },
];
