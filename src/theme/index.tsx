import { ThemePalette } from './palette';
import { RecursivePartialNonMethod } from './utils/types';
import deepMerge from 'lodash.merge';

export class Theme {
  palette = new ThemePalette();

  constructor(t?: RecursivePartialNonMethod<Theme>) {
    if (t) {
      if (t.palette) {
        this.palette = new ThemePalette(t.palette);
      }
    }
  }
}