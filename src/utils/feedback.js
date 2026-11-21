import { useSyncExternalStore } from 'react';

// Feedback goes to GitHub Issues through a pre-filled issue form (.github/ISSUE_TEMPLATE/feedback.yml).
// No server or token is involved: the link opens GitHub, where the viewer signs in and submits.
const NEW_ISSUE_URL = 'https://github.com/LAWRENC0/InstrumentLearner/issues/new';

// The open theory topic, published by the Theory screen so the feedback link can say where the viewer was.
let theoryTopic = null;
const listeners = new Set();

export function setFeedbackTopic(next) {
  if (next === theoryTopic) return;
  theoryTopic = next;
  listeners.forEach((listener) => listener());
}

export function useFeedbackTopic() {
  return useSyncExternalStore(
    (listener) => { listeners.add(listener); return () => listeners.delete(listener); },
    () => theoryTopic,
    () => null,
  );
}

// Link to a new feedback issue with the "Where in the app" field filled in.
// Query parameters named after a form field's id pre-fill that field.
export function feedbackUrl(where) {
  // eslint-disable-next-line no-undef
  const build = typeof __BUILD_DATE__ === 'string' ? __BUILD_DATE__ : 'dev';
  const width = typeof window === 'undefined' ? '' : ` · ${window.innerWidth}px wide`;
  const params = new URLSearchParams({
    template: 'feedback.yml',
    title: `[Feedback] ${where}`,
    where: `${where} · build ${build}${width}`,
  });
  return `${NEW_ISSUE_URL}?${params}`;
}
