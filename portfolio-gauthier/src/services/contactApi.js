const DEFAULT_API_BASE_URL = 'http://localhost:8080';
const CONTACT_REQUEST_TIMEOUT_MS = 12000;

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
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), CONTACT_REQUEST_TIMEOUT_MS);

  let response;

  try {
    response = await fetch(buildContactUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(
        "Le serveur met trop de temps a repondre. Reessayez dans quelques secondes."
      );
    }

    throw new Error("Impossible d'envoyer le message pour le moment.");
  } finally {
    window.clearTimeout(timeoutId);
  }

  const rawBody = await response.text();
  let data = null;

  if (rawBody) {
    try {
      data = JSON.parse(rawBody);
    } catch {
      data = { message: "Reponse inattendue du serveur." };
    }
  }

  if (!response.ok) {
    const error = new Error(data?.message || "Une erreur s'est produite.");
    error.status = response.status;
    error.payload = data;
    throw error;
  }

  return data;
}
