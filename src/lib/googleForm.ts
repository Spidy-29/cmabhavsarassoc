export interface GoogleFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// ⚠️ REPLACE THESE WITH YOUR ACTUAL GOOGLE FORM ID AND ENTRY IDs ⚠️
const GOOGLE_FORM_ID = "1FAIpQLSdlLLhF8KGC6axaEKHRLtnbgD_59yGdNuy2BX1Sl-qhhrmKAA";
const ENTRY_IDS = {
  name: "entry.1219307456",
  email: "entry.1352609747",
  phone: "entry.2041624796",
  message: "entry.783145570",
};

export async function submitToGoogleForm(data: GoogleFormData): Promise<void> {
  const formUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

  const formData = new FormData();
  formData.append(ENTRY_IDS.name, data.name);
  formData.append(ENTRY_IDS.email, data.email);
  formData.append(ENTRY_IDS.phone, data.phone);
  formData.append(ENTRY_IDS.message, data.message);

  // Google Forms returns a CORS error for fetch requests by default.
  // Using 'no-cors' mode allows the request to be sent, but the response is opaque.
  // We assume success if the fetch promise resolves without a network error.
  await fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}
