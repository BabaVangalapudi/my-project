async function sendSMS() {
    const response = await fetch('http://localhost:5174/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'USER_PHONE_NUMBER',
        message: 'Thank you for your purchase! Your order is confirmed.',
      }),
    });
  
    if (response.ok) {
      console.log('SMS sent successfully');
    } else {
      console.error('Failed to send SMS');
    }
  }
  