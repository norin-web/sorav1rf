// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are marked — replace them when the owner sends real data.
// Facts below come only from the owner's Terms of Use / Privacy Policy (.docx),
// the app's Figma screens, and the App Store ID the owner supplied.

export const site = {
  brand: "Sora",
  email: "zigo@cuberdoo.store",
  year: new Date().getFullYear(),
  operator: "PLACEHOLDER",
};

export const app = {
  id: "6795551687",
  url: "https://apps.apple.com/app/id6795551687",
  // The iTunes lookup returned no results for this ID in any storefront
  // (checked 2026-11-20): the App may not be published yet. Refresh from
  // https://itunes.apple.com/lookup?id=6795551687 once it is live.
  minIOS: "PLACEHOLDER",
  category: "PLACEHOLDER",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export const tagline = "AI video creator for iPhone";

export const steps = [
  { n: "01", title: "Write a prompt", text: "Describe the video you want, or start from an image." },
  { n: "02", title: "Pick a style", text: "Choose a visual style such as Lifestyle, Food Macro, Studio or Cartoon." },
  { n: "03", title: "Save or export", text: "Keep it in Recent, Saved or Favorites, or add it to your Photos." },
];

// Taken from the Create / New video screens and the Terms of Use.
export const appFeatures = [
  { tag: "01 · Prompt", title: "Text to video", text: "Type a description and generate a video from it. You can improve or change the prompt before you run it again." },
  { tag: "02 · Images", title: "Image to video", text: "Start from a picture you choose. The image is sent for generation only after you agree to the consent notice." },
  { tag: "03 · Styles", title: "Visual styles", text: "Pick a look before you generate — the style list in the Create screen holds Lifestyle, Food Macro, Studio and more." },
  { tag: "04 · Library", title: "Recent, Saved, Favorites", text: "Generated videos are kept on your device in Recent, Saved and Favorites, and you can delete them yourself." },
];

// Rows whose value is still unknown are left out, not shown as placeholders.
const known = (v: string) => !v.includes("PLACEHOLDER");
export const specs: [string, string][] = [
  ["Platform", "iPhone"],
  ["Requirements", "Internet connection for AI generation"],
  ["Account", "Not required"],
  ["Purchases", "Subscriptions through your Apple ID"],
  ...(known(app.minIOS) ? [["Compatibility", `iPhone · iOS ${app.minIOS} or later`] as [string, string]] : []),
  ...(known(app.category) ? [["Category", app.category] as [string, string]] : []),
];

export const faq = [
  { q: "Do I need an account?", a: "No. The App does not require you to create an account or sign in." },
  { q: "Where are my videos stored?", a: "Generated videos used for Recent, Saved and Favorites are stored on your device. Deleting the App or its local data may permanently delete them." },
  { q: "Is my prompt sent to a third party?", a: "Yes, for AI generation. Before anything is sent, the App shows a consent notice naming the provider, the information shared and why. If you decline, AI features stay unavailable until you agree." },
  { q: "Can I save a video to my Photos?", a: "Yes, when you choose to save or export a creation. The App asks for add-only access, so it can add videos but cannot browse your library." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple ID and renew automatically unless canceled at least 24 hours before the end of the period. Manage or cancel them in your Apple ID subscription settings. Deleting the App does not cancel it." },
  { q: "Who handles refunds?", a: "Refunds and billing are handled by Apple under its own policies." },
];
