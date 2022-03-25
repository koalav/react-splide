import { ComponentConstructor, Options } from '@splidejs/splide';
import { Component, ReactNode, ReactNodeArray } from 'react';
import { SplideEventHandlers } from './events';


export interface SplideProps extends Partial<SplideEventHandlers> {
  id?: string;
  className?: string;
  options?: Options;
  Extensions?: Record<string, ComponentConstructor>;
  Transition?: ComponentConstructor;
  hasSliderWrapper?: boolean;
  hasAutoplayProgress?: boolean;
  hasAutoplayControls?: boolean;
  playButtonLabel?: string;
  pauseButtonLabel?: string;
  renderControls?: () => ReactNode | ReactNodeArray;
  shadow?: Component
}
