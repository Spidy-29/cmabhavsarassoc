export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Proxying request to Google Apps Script...');
    
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwCSEtThG1b1aXjyUbUfStGIihPu1bq7sK5DR7TOmTK2r3eAcOpVXoNxdEKW1cOMe1D/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    console.log('Google Apps Script response status:', response.status);

    if (!response.ok) {
      throw new Error(`Google Apps Script error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Google Apps Script response data:', data);

    return Response.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return Response.json(
      { 
        success: false, 
        error: error.message || 'Failed to submit form' 
      },
      { status: 500 }
    );
  }
}