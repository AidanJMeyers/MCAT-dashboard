// Behavioral Sciences — authored chapter modules (chNN.js). Self-contained (no figures/questions JSON).
import { finalizeAuthored } from '../_finalize.js';
import ch01 from './ch01.js';
import ch02 from './ch02.js';
import ch03 from './ch03.js';
import ch04 from './ch04.js';
import ch05 from './ch05.js';
import ch06 from './ch06.js';
import ch07 from './ch07.js';

export const chapters = [ch01, ch02, ch03, ch04, ch05, ch06, ch07].map(finalizeAuthored);
