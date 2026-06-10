import { chapters as bio } from '../subjects/bio/index.js';
import { chapters as biochem } from '../subjects/biochem/index.js';
import { chapters as gchem } from '../subjects/gchem/index.js';
import { chapters as ochem } from '../subjects/ochem/index.js';
import { chapters as psych } from '../subjects/psych/index.js';
import { chapters as cars } from '../subjects/cars/index.js';

// status: 'ready' (built) | 'soon' (planned, phased build)
export const SUBJECTS = [
  { id: 'bio', name: 'Biology', short: 'Bio', icon: '🧬', accent: 'emerald',
    blurb: 'Cell biology, systems physiology, genetics & evolution — the backbone of the Bio/Biochem section.',
    source: 'Kaplan MCAT Biology Review', status: 'ready', chapters: bio },
  { id: 'biochem', name: 'Biochemistry', short: 'Biochem', icon: '🧪', accent: 'rose',
    blurb: 'Amino acids & proteins, enzymes, bioenergetics, metabolism, and lab techniques.',
    source: 'Kaplan MCAT Biochemistry Review', status: 'ready', chapters: biochem },
  { id: 'gchem', name: 'General Chemistry', short: 'Gen Chem', icon: '⚗️', accent: 'sky',
    blurb: 'Atomic theory, bonding, stoichiometry, thermodynamics, kinetics, equilibrium, acids/bases, electrochemistry.',
    source: 'Kaplan MCAT General Chemistry Review', status: 'ready', chapters: gchem },
  { id: 'ochem', name: 'Organic Chemistry', short: 'O-Chem', icon: '🔬', accent: 'amber',
    blurb: 'Nomenclature, functional groups, reaction mechanisms, stereochemistry, spectroscopy, separations.',
    source: 'Kaplan MCAT Organic Chemistry Review', status: 'ready', chapters: ochem },
  { id: 'physics', name: 'Physics & Math', short: 'Physics', icon: '📐', accent: 'violet',
    blurb: 'Kinematics, forces, work & energy, fluids, thermodynamics, electricity, waves, optics, and MCAT math.',
    source: 'Kaplan MCAT Physics and Math Review', status: 'soon', chapters: [] },
  { id: 'psych', name: 'Behavioral Sciences', short: 'Psych/Soc', icon: '🧠', accent: 'fuchsia',
    blurb: 'Psychology & sociology — sensation, cognition, identity, social structures, and demographics.',
    source: 'Psych/Soc review documents', status: 'ready', chapters: psych },
  { id: 'cars', name: 'CARS', short: 'CARS', icon: '📖', accent: 'teal',
    blurb: 'Critical Analysis & Reasoning Skills — strategy, question archetypes, and worked passage walkthroughs.',
    source: 'Kaplan MCAT CARS Review', status: 'ready', chapters: cars }
];

export const getSubject = (id) => SUBJECTS.find((s) => s.id === id);
