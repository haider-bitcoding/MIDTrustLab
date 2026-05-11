"use server";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // We use Formspree as it's reliable and works across borders including China.
  // The user will need to replace 'your-form-id' with their actual Formspree form ID.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgodrvav";

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (response.ok) {
      return { success: true, message: "Message sent successfully!" };
    } else {
      return { success: false, message: "Failed to send message. Please try again later." };
    }
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, message: "An error occurred while sending the message." };
  }
}
