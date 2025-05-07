// types/socialLink.ts
export interface SocialLink {
  name: string;
  href: string;
  iconClass: string;
  text?: string;
}

export const socialLinksData: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573550787990",
    iconClass: "Facebook",
  },
  {
    name: "Twitter",
    href: "#",
    iconClass: "Twitter",
  },
  {
    name: "LinkedIn",
    href: "#",
    iconClass: "fab fa-linkedin-in",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/233200063564",
    iconClass: "MessageCircle",
  },
  {
    name: "Email",
    text: "datasoln@outlook.com",
    href: "mailto:datasoln@outlook.com",
    iconClass: "fab fa-linkedin-in",
  },
  {
    name: "location",
    text: "Adenta Shopping Mall, Adenta, Ghana",
    href: "#",
    iconClass: "fab fa-linkedin-in",
  },

  {
    name: "Phone",
    text: " 0200 063 564",
    href: "tel:+233200063564",
    iconClass: "fab fa-instagram",
  },
];
