exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const payload = JSON.parse(event.body || '{}');

    // TODO: connect this to Google Sheets, Airtable, Supabase, or email delivery.
    // Keep this function as the single backend entry point for submissions.
    console.log('Diagnostic submission received:', {
      company: payload.company,
      email: payload.email,
      totalScore: payload.totalScore,
      date: payload.date
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true })
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Invalid submission payload' })
    };
  }
};
