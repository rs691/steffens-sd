"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10).max(500),
});

export type ContactFormState = {
  success: boolean;
  message?: string;
  error?: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  values: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid form data.",
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // In a real application, you would send an email here.
  // For now, we'll just log it and simulate success.
  console.log("Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate potential error
  // if (Math.random() > 0.8) {
  //   return { success: false, error: "An unexpected error occurred on the server." };
  // }

  return { 
    success: true, 
    message: "Your message has been sent successfully!" 
  };
}
