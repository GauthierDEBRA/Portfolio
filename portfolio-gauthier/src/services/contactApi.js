const DEFAULT_API_BASE_URL = 'http://localhost:8080';

function normalizeBaseUrl(baseUrl) {
  return (baseUrl || DEFAULT_API_BASE_URL).replace(/\/$/, '');
}

function buildContactUrl() {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const isLocalHost = typeof window !== 'undefined'
    && ['localhost', '127.0.0.1'].includes(window.location.hostname);

  if (!configuredBaseUrl && !isLocalHost) {
    throw new Error(
      "Configuration manquante: VITE_API_BASE_URL n'est pas definie sur le frontend."
    );
  }

  return `${normalizeBaseUrl(configuredBaseUrl)}/api/contact`;
}

export async function sendContactMessage(payload) {
  const response = await fetch(buildContactUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const rawBody = await response.text();
  const data = rawBody ? JSON.parse(rawBody) : null;

  if (!response.ok) {
    const error = new Error(data?.message || "Une erreur s'est produite.");
    error.status = response.status;
    error.payload = data;
    throw error;
  }

  return data;
}
