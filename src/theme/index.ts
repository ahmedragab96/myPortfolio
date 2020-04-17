import { ThemePalette } from './palette';
import { RecursivePartialNonMethod } from './utils/types';

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